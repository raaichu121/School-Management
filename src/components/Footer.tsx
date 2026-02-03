import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">Shree Shivaraj E. B. School</span>
            </div>
            <p className="text-sm opacity-80">
              Empowering minds, shaping futures through quality education and holistic development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/#home" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/#about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/#features" className="hover:opacity-100 transition-opacity">Features</Link></li>
              <li><Link to="/#contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Admissions</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/auth?tab=signup" className="hover:opacity-100 transition-opacity">Apply Now</Link></li>
              <li><Link to="/auth" className="hover:opacity-100 transition-opacity">Staff Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Shree Shivaraj School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};