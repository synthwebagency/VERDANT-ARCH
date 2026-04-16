import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Studio", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-cream/80 backdrop-blur-sm border-b border-forest/5">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        <Link 
          to="/"
          className="text-2xl md:text-3xl font-serif font-bold text-forest tracking-tighter"
        >
          Verdant Arch
        </Link>
      </motion.div>

      <div className="hidden md:flex gap-12">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 + i * 0.1 }}
          >
            <a
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-forest/80 hover:text-forest transition-colors"
            >
              {link.name}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <div className="text-[10px] uppercase tracking-widest opacity-40">EN</div>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-forest text-cream text-[10px] uppercase tracking-widest font-bold rounded-sm cursor-pointer"
          >
            Your Project Starts Here
          </motion.button>
        </Link>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-forest"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-forest text-cream flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif tracking-tight"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}
