import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">
              <span className="text-primary">Arihant</span> Fashion
            </h3>
            <p className="text-sm text-accent-foreground/80">
              Kolhapur's premier destination for sophisticated men's formal wear and delightful children's fashion.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>Bhavani Mandap, Kolhapur - 416012</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaPhone className="text-primary" />
                <span>+91 (231) 2654321</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <FaEnvelope className="text-primary" />
                <span>info@arihantfashion.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group"
              >
                <FaFacebook className="text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group"
              >
                <FaInstagram className="text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group"
              >
                <FaTwitter className="text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
            <p className="text-sm text-accent-foreground/80 pt-4">
              Mon-Sat: 10:00 AM - 9:00 PM<br />
              Sun: 11:00 AM - 8:00 PM
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-accent-foreground/60">
            © {currentYear} Arihant Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
