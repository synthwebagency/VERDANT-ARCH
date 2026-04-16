import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // FORMSPREE PLUGIN (Newsletter)
      const formId = "YOUR_ID"; 
      try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          body: new FormData(e.currentTarget),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          setSubscribed(true);
          setEmail("");
          setTimeout(() => setSubscribed(false), 5000);
        } else {
          setSubscribed(true);
        }
      } catch (err) {
        console.error("Newsletter plugin error:", err);
        setSubscribed(true);
      }
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-24 bg-slate text-cream overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <h2 className="text-[30vw] font-serif italic whitespace-nowrap -translate-x-1/4 translate-y-1/4">
          Get in touch
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] font-light mb-12 block">Start a conversation</span>
        
        <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-16 leading-tight">
          Let’s build your <br />
          <span className="italic">sanctuary.</span>
        </h2>

        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
        >
          <a
            href="mailto:brookesryan03@gmail.com"
            className="px-12 py-6 bg-cream text-forest rounded-full text-sm uppercase tracking-widest font-medium hover:bg-forest hover:text-cream border border-cream transition-all duration-500 inline-block"
          >
            Direct Inquiry
          </a>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 w-full gap-12 text-left pt-20 border-t border-cream/10">
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-4">Studio</p>
            <p className="text-sm font-light">
              24 Bruton Place <br />
              Mayfair, London <br />
              W1J 6NE
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-4">Social</p>
            <div className="flex flex-col gap-2 text-sm font-light">
              <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Pinterest</a>
              <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-4">Newsletter</p>
            {subscribed ? (
              <p className="text-sm font-light text-cream/60 italic">You're on the list!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-4 border-b border-cream/30 pb-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none text-sm font-light w-full placeholder:text-cream/30"
                />
                <button type="submit" className="text-xs uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity">Join</button>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-20 flex justify-between w-full text-[10px] uppercase tracking-[0.3em] opacity-30">
          <p>© 2026 Verdant Arch</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}
