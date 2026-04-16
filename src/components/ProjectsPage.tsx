import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { LayoutGrid, List, ChevronDown } from "lucide-react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import { useState } from "react";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="bg-cream min-h-screen">
      <Intro />
      <Navbar />
      
      <main className="pt-40 pb-0 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Controls Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="flex flex-wrap justify-between items-center mb-12 pb-8 border-b border-forest/5"
          >
            <div className="flex items-center gap-1">
              <div className="flex border border-forest/20 rounded-sm overflow-hidden">
                <button 
                  onClick={() => setView('grid')}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-colors ${view === 'grid' ? 'bg-forest text-cream' : 'hover:bg-forest/5'}`}
                >
                  <LayoutGrid size={12} />
                  Grid
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-colors ${view === 'list' ? 'bg-forest text-cream' : 'hover:bg-forest/5'}`}
                >
                  <List size={12} />
                  List
                </button>
              </div>
              
              <button className="ml-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity">
                Filters
                <ChevronDown size={12} />
              </button>
            </div>

            <div className="hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.5em] font-light text-forest/40">
                {projects.length} Selected Works
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className={`grid gap-x-6 gap-y-12 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4 + i * 0.05 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden bg-forest/5 rounded-sm">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-sm font-serif text-forest font-bold uppercase tracking-tight">{project.title}</h3>
                    <p className="text-[9px] uppercase tracking-widest text-forest/50 mt-1">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Large Branding Footer */}
          <div className="mt-40 relative overflow-hidden py-20">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex justify-between items-end"
            >
              <h2 className="text-[10vw] font-serif font-bold text-forest leading-[0.7] tracking-tighter uppercase">
                Verdant
              </h2>
              <h2 className="text-[10vw] font-serif font-bold text-forest leading-[0.7] tracking-tighter uppercase">
                Arch
              </h2>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
