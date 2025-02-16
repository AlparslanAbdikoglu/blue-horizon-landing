
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    {
      title: "About",
      submenu: ["Biography", "Awards", "Timeline"],
    },
    {
      title: "Work",
      submenu: ["Projects", "Publications", "Speaking"],
    },
    {
      title: "Media",
      submenu: ["Press", "Gallery", "Videos"],
    },
    {
      title: "Contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-montserrat font-bold text-xl text-primary-dark">Logo</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button
                    className="flex items-center font-inter text-gray-700 hover:text-primary-dark px-3 py-2 text-sm font-medium transition-colors"
                    onMouseEnter={() => setActiveSubmenu(item.title)}
                    onClick={() => setActiveSubmenu(activeSubmenu === item.title ? null : item.title)}
                  >
                    {item.title}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                  
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fade-in">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-primary-dark transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button
                  className="w-full flex items-center justify-between text-gray-700 hover:text-primary-dark px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setActiveSubmenu(activeSubmenu === item.title ? null : item.title)}
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </button>
                {item.submenu && activeSubmenu === item.title && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-dark hover:bg-primary"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
