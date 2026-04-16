import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest text-cream"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif font-bold text-cream tracking-tight"
            >
              Verdant Arch
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="absolute bottom-20 left-10 right-10 h-[1px] bg-cream/20 origin-left"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-24 left-10 text-xs uppercase tracking-[0.3em] font-light"
          >
            Studio of Interior Architecture
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
