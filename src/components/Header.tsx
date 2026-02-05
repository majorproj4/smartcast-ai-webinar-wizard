import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { user, signOut, subscription } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 border-b transition-smooth ${scrolled ? "glass shadow-card" : "border-border bg-background/50 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">SmartCast</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-smooth">
              Portfolio
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
              How It Works
            </a>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/account">Account Settings</Link>
                  </DropdownMenuItem>
                  {subscription?.subscribed && (
                    <DropdownMenuItem>
                      <span className="text-primary font-medium">
                        {subscription.subscription_tier} Plan
                      </span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/pricing">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
