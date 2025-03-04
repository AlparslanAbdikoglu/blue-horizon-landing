
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 font-inter">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contact@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 font-inter">
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">About</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">Work</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">Media</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-secondary transition-colors"
                )}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-secondary transition-colors"
                )}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-secondary transition-colors"
                )}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-secondary transition-colors"
                )}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="font-montserrat font-semibold text-lg mb-3">Subscribe</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary w-full"
                />
                <button className="bg-secondary px-4 py-2 rounded-r-md hover:bg-secondary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center font-inter text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
