import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/data/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if navbar should have light text (when over hero section)
  const isOverHero = isHomePage && !isScrolled;
  const textColorClass = isOverHero 
    ? 'text-white' 
    : 'text-foreground';
  const logoPrimaryClass = isOverHero 
    ? 'text-white' 
    : 'text-primary';
  const logoSecondaryClass = isOverHero 
    ? 'text-white/90' 
    : 'text-foreground';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border/50' 
          : isOverHero
          ? 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
          : 'bg-background/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className={logoPrimaryClass}>Arihant</span>
              <span className={`${logoSecondaryClass} ml-2 text-sm font-normal`}>Fashion</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? isOverHero 
                        ? 'text-white' 
                        : 'text-primary'
                      : isOverHero
                      ? 'text-white/90 hover:text-white'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </span>
                <motion.div
                  className={`absolute -bottom-1 left-0 h-0.5 ${
                    isOverHero ? 'bg-white' : 'bg-primary'
                  }`}
                  initial={{ width: location.pathname === link.path ? '100%' : '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            {/* Contact Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-full transition-all shadow-lg ${
                  isOverHero 
                    ? 'bg-white/20 text-white hover:bg-white/30' 
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
                aria-label="Call us"
              >
                <FaPhone className="text-lg" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${contactInfo.whatsapp?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-full transition-all shadow-lg ${
                  isOverHero 
                    ? 'bg-green-500/20 text-white hover:bg-green-500/30' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
                aria-label="WhatsApp us"
              >
                <FaWhatsapp className="text-lg" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isOverHero ? 'text-white hover:bg-white/20' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-lg font-medium transition-colors rounded-lg px-4 ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Contact Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <motion.a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <FaPhone /> Call
                </motion.a>
                <motion.a
                  href={`https://wa.me/${contactInfo.whatsapp?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp /> WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
