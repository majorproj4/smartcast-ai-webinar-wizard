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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "glass-premium border-white/20 shadow-elevated" 
        : "border-transparent bg-transparent hover:bg-black/5"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Rahul</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/portfolio" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Portfolio
            </Link>
            <a href="#projects" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Experience
            </a>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 hover:bg-white/10">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline text-sm font-medium">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-premium border-white/20">
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
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground font-medium">
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90 font-semibold rounded-full px-6">
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
