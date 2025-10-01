import { motion } from "framer-motion";
import { Palette, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-button-hover" />
              <h3 className="text-xl font-heading font-bold gradient-text">
                Styleshop
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transform your ideas into wearable art. Custom clothing printing made simple and beautiful.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Youtube} />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink>Home</FooterLink>
              <FooterLink>Catalog</FooterLink>
              <FooterLink>Custom Design</FooterLink>
              <FooterLink>Size Guide</FooterLink>
              <FooterLink>FAQ</FooterLink>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Shipping Info</FooterLink>
              <FooterLink>Returns</FooterLink>
              <FooterLink>Order Tracking</FooterLink>
              <FooterLink>Support</FooterLink>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <ContactItem icon={Mail} text="hello@Styleshop.com" />
              <ContactItem icon={Phone} text="+1 (555) 123-4567" />
              <ContactItem icon={MapPin} text="123 Design St, Creative City, CC 12345" />
            </div>
            
            <div className="pt-4">
              <p className="text-sm font-medium mb-2">Newsletter</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-muted text-foreground rounded-md text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-primary text-white rounded-md text-sm font-medium"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Styleshop. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
            <FooterLink>Cookies</FooterLink>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <motion.div
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="p-2 bg-muted rounded-lg cursor-pointer hover:bg-primary transition-colors"
  >
    <Icon className="h-4 w-4" />
  </motion.div>
);

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <motion.li
    whileHover={{ x: 4 }}
    className="text-sm text-muted-foreground hover:text-primary-gradient-start cursor-pointer transition-colors"
  >
    {children}
  </motion.li>
);

const ContactItem = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-3 text-sm">
    <Icon className="h-4 w-4 text-button-hover flex-shrink-0" />
    <span className="text-muted-foreground">{text}</span>
  </div>
);