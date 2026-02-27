import { menuData } from "@/data/menuData";
import { motion } from "framer-motion";

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Our Offerings</p>
          <h2 className="text-4xl md:text-5xl font-display text-primary">The Menu</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {menuData.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i % 2 * 0.15 }}
            >
              <h3 className="text-xl font-display text-gold border-b border-border pb-3 mb-5 uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline gap-4">
                    <span className="text-primary text-sm">{item.name}</span>
                    <span className="border-b border-dotted border-muted-foreground/30 flex-1 min-w-[2rem] translate-y-[-4px]" />
                    <span className="text-muted-foreground text-sm font-medium">{item.price} EGP</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
