import { motion, useScroll, useTransform } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-cream text-forest">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project not found</h1>
          <Link to="/" className="text-xs uppercase tracking-widest border-b border-forest">Back to Home</Link>
        </div>
      </div>
    );
  }

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const otherProjects = projects.filter(p => p.id !== id).slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream text-forest min-h-screen"
    >
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-forest/10 px-6 md:px-12 py-6 flex justify-between items-center">
        <a href="/#projects" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-medium hover:opacity-50 transition-opacity">
          <ArrowLeft size={14} />
          Back to Projects
        </a>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="/" className="hover:opacity-50">Welcome</a>
          <a href="/#projects" className="hover:opacity-50">Projects</a>
          <a href="/#about" className="hover:opacity-50">About</a>
          <a href="/#services" className="hover:opacity-50">Services</a>
          <a href="/#contact" className="hover:opacity-50">Contact</a>
        </div>
        <Link to="/" className="text-[10px] uppercase tracking-[0.3em] font-bold text-forest">
          Verdant Arch
        </Link>
      </div>

      {/* Project Info Bar */}
      <div className="pt-32 pb-8 px-6 md:px-12 border-b border-forest/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-cream">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tight"
        >
          {project.title} — {project.category.split('—')[0]}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-light opacity-60"
        >
          <span>{project.location}</span>
          <span>{project.year}</span>
        </motion.div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[80vh] md:h-[100vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ scale: heroScale, opacity: heroOpacity }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="text-[10px] uppercase tracking-[0.5em] font-light block mb-8"
            >
              The Story
            </motion.span>
          </div>
          <div className="md:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] mb-16 text-forest tracking-tighter"
            >
              {project.description}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light leading-relaxed opacity-80 space-y-8"
            >
              {project.story.split('. ').map((para, i) => (
                <p key={i}>{para}.</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`overflow-hidden ${i === 2 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-video'}`}
            >
              <img 
                src={img} 
                alt={`${project.title} detail ${i}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6 md:px-12 border-t border-forest/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-light mb-12 opacity-40">Awards and Distinctions</h2>
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-forest/10 pb-8">
              <div>
                <p className="text-xs opacity-40 mb-2">2024</p>
                <h3 className="text-2xl md:text-3xl font-serif">{project.title} — Excellence Award</h3>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Winner</p>
            </div>
            <div className="flex justify-between items-end border-b border-forest/10 pb-8 opacity-50">
              <div>
                <p className="text-xs opacity-40 mb-2">2023</p>
                <h3 className="text-2xl md:text-3xl font-serif">Structural Concept of the Year</h3>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Nominee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Projects */}
      <section className="py-32 px-6 md:px-12 bg-forest text-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-light mb-16 opacity-40">Projects similar who could you interest</h2>
          
          <div className="border-t border-cream/10">
            {otherProjects.map((p) => (
              <Link 
                key={p.id} 
                to={`/project/${p.id}`}
                className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-cream/10 transition-all px-4 overflow-hidden"
              >
                {/* Hover Image Preview */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  whileHover={{ opacity: 0.4, scale: 1, x: 0 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 pointer-events-none z-0 hidden md:block"
                >
                  <img src={p.image} alt="" className="w-full h-full object-cover rounded-lg shadow-2xl" />
                </motion.div>

                <div className="flex gap-12 items-center relative z-10">
                  <span className="text-[10px] font-serif italic opacity-40 group-hover:opacity-100 transition-opacity">{p.year}</span>
                  <h3 className="text-3xl md:text-5xl font-serif group-hover:italic group-hover:translate-x-4 transition-all duration-500">{p.title}</h3>
                </div>
                <div className="flex gap-12 items-center mt-6 md:mt-0 relative z-10">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">{p.location.split(',')[1] || p.location}</span>
                  <div className="w-14 h-14 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-forest group-hover:scale-110 transition-all duration-500">
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center border-t border-forest/5">
        <h2 className="text-4xl md:text-7xl font-serif font-bold tracking-tighter mb-12">
          Starting a project
        </h2>
        <Link 
          to="/"
          className="group flex items-center gap-8 text-4xl md:text-8xl font-serif italic hover:gap-12 transition-all"
        >
          GO <span className="not-italic">→</span>
        </Link>
      </section>
    </motion.div>
  );
}
