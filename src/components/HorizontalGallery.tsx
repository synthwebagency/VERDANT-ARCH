import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue, useVelocity } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

// Duplicate projects for seamless marquee
const allProjects = [...projects, ...projects];

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 400, damping: 50 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const baseX = useMotionValue(0);
  const baseVelocity = -0.015; 

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000) * 100;
    
    if (velocityFactor.get() !== 0) {
      moveBy += velocityFactor.get() * 0.2;
    }
    
    baseX.set(baseX.get() + moveBy);
  });

  // Wrap the value for seamless loop (50% because we have 2 sets)
  const x = useTransform(baseX, (v) => `${(v % 50)}%`);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-cream pt-32">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Large Bold Green Title */}
        <div className="px-12 md:px-24 mb-12 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 3.8 }}
            className="text-7xl md:text-[14vw] font-serif font-bold text-forest leading-[0.8] tracking-tighter"
          >
            Verdant Arch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
            className="text-xs uppercase tracking-[0.5em] mt-6 font-light text-forest/60"
          >
            Interior Architecture & Design
          </motion.p>
        </div>

        {/* The Gallery with Auto-scroll + Scroll Influence */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            style={{ x }}
            className="flex gap-12 px-12 md:px-24"
          >
            {allProjects.map((project, index) => (
              <motion.div 
                key={`${project.id}-${index}`} 
                onClick={() => navigate(`/project/${project.id}`)}
                className="flex-shrink-0 w-[70vw] md:w-[40vw] h-[45vh] md:h-[50vh] relative group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl md:text-2xl font-serif text-forest group-hover:italic transition-all">{project.title}</h3>
                    <span className="text-[10px] font-serif italic text-forest/40">{project.id}</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-forest/50 mt-1">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Auto-scroll hint / progress */}
        <div className="absolute bottom-12 left-12 md:left-24 flex items-center gap-4 z-10">
          <div className="w-24 h-[1px] bg-forest/20 relative overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-forest origin-left"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-light text-forest/40">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
