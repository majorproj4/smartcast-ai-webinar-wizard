import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';

const Pricing = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { user, session, subscription } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for getting started with AI webinars',
      price: 29,
      features: [
        'Up to 5 webinars per month',
        'Basic AI presenter',
        'Email support',
        'Standard analytics',
        'Up to 100 attendees'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Best for growing businesses',
      price: 49,
      popular: true,
      features: [
        'Up to 20 webinars per month',
        'Advanced AI presenter',
        'Priority support',
        'Advanced analytics',
        'Up to 500 attendees',
        'Custom branding',
        'Integration with CRM'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations',
      price: 99,
      features: [
        'Unlimited webinars',
        'Premium AI presenter',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Unlimited attendees',
        'White-label solution',
        'API access',
        'Custom integrations'
      ]
    }
  ];

  const handleSubscribe = async (plan: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }

    setIsLoading(plan);

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { plan },
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      if (error) throw error;

      // Open Stripe checkout in a new tab
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast({
        title: "Error",
        description: "Failed to create checkout session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  const isCurrentPlan = (planId: string) => {
    if (!subscription?.subscribed) return false;
    return subscription.subscription_tier?.toLowerCase() === planId;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scale your AI-powered webinars with the perfect plan for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative border-2 transition-all duration-300 hover:shadow-glow ${
                  plan.popular 
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5' 
                    : 'border-border hover:border-primary/50'
                } ${isCurrentPlan(plan.id) ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                {isCurrentPlan(plan.id) && (
                  <Badge className="absolute -top-3 right-4 bg-secondary text-secondary-foreground">
                    Current Plan
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'hero' : 'outline'}
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={isLoading === plan.id || isCurrentPlan(plan.id)}
                  >
                    {isLoading === plan.id && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isCurrentPlan(plan.id) 
                      ? 'Current Plan' 
                      : user 
                        ? 'Subscribe Now' 
                        : 'Sign In to Subscribe'
                    }
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? Contact us for enterprise pricing.
            </p>
            <Button variant="outline">Contact Sales</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;