
const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 font-inter">
              <li>Email: contact@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Location: New York, NY</li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Media</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Follow</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            </ul>
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
