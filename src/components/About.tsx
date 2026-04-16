import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-24 bg-forest text-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="/images/studio-hero.jpg" 
            alt="Studio" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-forest/50" />
        </div>

        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] font-light mb-8 block"
          >
            The Studio
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif leading-tight mb-12 tracking-tight"
          >
            We believe in the power of <br />
            <span className="italic">quiet architecture.</span>
          </motion.h2>

          <div className="space-y-8 text-sm md:text-lg font-light leading-relaxed opacity-80 max-w-lg">
            <p>
              Founded in 2018, Verdant Arch is a London-based interior architecture studio dedicated to creating spaces that resonate with the soul. Our approach is rooted in the principles of minimalism, materiality, and light.
            </p>
            <p>
              We don't just design rooms; we curate experiences. By stripping away the superfluous, we reveal the inherent beauty of form and function, creating sanctuaries that stand the test of time.
            </p>
          </div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] bg-cream/20 my-12"
          />

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-2xl font-serif">12+</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Design Awards</p>
            </div>
            <div>
              <p className="text-2xl font-serif">85+</p>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
