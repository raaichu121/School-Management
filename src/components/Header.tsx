import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Shree Shivaraj English School</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/auth">
            <Button variant="outline">Staff Login</Button>
          </Link>
          <Link to="/auth?tab=signup">
            <Button>Apply Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/#home" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/#about" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/#features" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/#contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Staff Login</Button>
              </Link>
              <Link to="/auth?tab=signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};