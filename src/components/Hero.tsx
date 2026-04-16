import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate">
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 3.5 }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative h-full flex flex-col justify-end p-6 md:p-20 text-cream">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 4.2 }}
            className="mb-6"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-light">Est. 2018 — London</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 4.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-[10vw] font-serif leading-[0.9] tracking-tighter mb-12"
          >
            Sculpting <br />
            <span className="italic">Atmospheres</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 5 }}
            className="flex flex-col md:flex-row gap-8 md:items-center"
          >
            <p className="max-w-md text-sm md:text-base font-light leading-relaxed opacity-80">
              We create bespoke interior architectures that balance raw materiality with refined elegance. Every space is a dialogue between light, texture, and human experience.
            </p>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-8 py-4 border border-cream/30 rounded-full text-xs uppercase tracking-widest hover:bg-cream hover:text-forest transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1.5, delay: 5.5 }}
        className="absolute right-12 bottom-0 w-[1px] bg-cream/20 hidden md:block"
      />
    </section>
  );
}
