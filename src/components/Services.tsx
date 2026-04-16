import { motion } from "motion/react";
import { Compass, Layout, PenTool, Users } from "lucide-react";

const services = [
  {
    icon: <Layout size={32} strokeWidth={1} />,
    title: "Interior Architecture",
    description: "Comprehensive spatial planning and structural modifications to redefine how you live and move."
  },
  {
    icon: <PenTool size={32} strokeWidth={1} />,
    title: "Bespoke Furniture",
    description: "Custom-designed pieces crafted by master artisans to fit the unique geometry of your space."
  },
  {
    icon: <Compass size={32} strokeWidth={1} />,
    title: "Material Curation",
    description: "A meticulous selection of raw materials—from reclaimed stone to hand-woven textiles."
  },
  {
    icon: <Users size={32} strokeWidth={1} />,
    title: "Consultation",
    description: "Strategic design guidance for developers and private clients seeking a refined aesthetic."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-forest mb-6 block font-light">Our Expertise</span>
            <h2 className="text-4xl md:text-7xl font-serif tracking-tighter leading-[0.9]">
              Elevating the <br />
              <span className="italic">everyday</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed opacity-70">
            From concept to completion, we provide a full-service design experience that prioritizes quality and detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-cream p-12 flex flex-col gap-8 hover:bg-forest hover:text-cream transition-colors duration-500 group"
            >
              <div className="text-forest group-hover:text-cream transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif">{service.title}</h3>
              <p className="text-sm font-light leading-relaxed opacity-70 group-hover:opacity-90">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
