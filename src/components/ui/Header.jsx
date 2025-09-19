import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', path: '/', icon: 'Home' },
    {
      label: 'Explore',
      path: '/virtual-tour-experience',
      icon: 'Compass',
      submenu: [
        { label: 'Virtual Tour Experience', path: '/virtual-tour-experience', icon: 'Camera' },
        { label: 'Interactive Mandala AI', path: '/interactive-mandala-ai', icon: 'Sparkles' }
      ]
    },
    { label: 'Artisan Connect', path: '/artisan-connect-marketplace', icon: 'ShoppingBag' },
    { label: 'About', path: '/about-us', icon: 'Users' },
    { label: 'Contact', path: '/contact', icon: 'MessageCircle' }
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const isActiveParent = (item) => {
    if (item.submenu) {
      return item.submenu.some(subItem => location.pathname === subItem.path);
    }
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isTransparent = isHomePage && !isScrolled;

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isTransparent 
      ? 'bg-transparent text-white' 
      : 'bg-background/95 backdrop-blur-md spiritual-shadow text-foreground'
  }`;

  const linkClasses = (item) => {
    const isActive = isActiveRoute(item.path) || isActiveParent(item);
    if (isActive) {
      return 'bg-primary text-primary-foreground';
    }
    return isTransparent
      ? 'text-white hover:bg-white/10'
      : 'text-foreground hover:bg-muted';
  };
  
  const logoTextClasses = isTransparent ? 'text-white' : 'text-foreground';


  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-heading font-semibold text-xl transition-colors duration-300 ${logoTextClasses}`}>
                Monastery360
              </h1>
              <p className="font-caption text-xs text-muted-foreground -mt-1">
                Digital Heritage
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 ${linkClasses(item)}`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                  {item.submenu && (
                    <Icon name="ChevronDown" size={14} className="ml-1" />
                  )}
                </Link>

                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg spiritual-shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-md font-body text-sm transition-colors duration-200 ${
                            isActiveRoute(subItem.path)
                              ? 'bg-accent text-accent-foreground'
                              : 'text-popover-foreground hover:bg-muted'
                          }`}
                        >
                          <Icon name={subItem.icon} size={16} />
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button (No changes needed here) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation (No changes needed here) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            {/* ... your existing mobile nav code ... */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;