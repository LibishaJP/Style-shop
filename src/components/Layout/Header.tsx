import { motion } from "framer-motion";
import { ShoppingCart, User, Search, Menu, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  cartCount?: number;
  onMenuToggle?: () => void;
}

export const Header = ({ cartCount = 0, onMenuToggle }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Palette className="h-8 w-8 text-button-hover" />
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
                </motion.div>
                <h1 className="text-2xl font-heading font-bold gradient-text">
                  Styleshop
                </h1>
              </div>
            </motion.div>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/catalog">Catalog</NavLink>
            <NavLink href="/custom-design">Custom Design</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>

          {/* Search Bar - Hidden on mobile, expandable */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <motion.div
              className="relative w-full"
              initial={false}
              animate={{ width: isSearchOpen ? "100%" : "200px" }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-button-hover transition-all"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => navigate('/search')}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate('/profile')}
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1"
                  >
                    <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {cartCount}
                    </Badge>
                  </motion.div>
                )}
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={onMenuToggle}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link to={href}>
    <motion.div
      className="text-foreground/80 hover:text-foreground font-medium transition-colors relative"
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-primary"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  </Link>
);