import { motion } from "framer-motion";
import ramadanDrinks from "@/assets/ramadan-drinks.jpg";
const specials = [
  "Qamr Eldeen Frappe",
  "Sobia Frappe",
  "Cloud Coconut Matcha",
  "Date Fruit",
  "Ice Strawberry Matcha",
  "Oreo Matcha",
  "Sobia Strawberry Frappe",
  "Vanilla Brûlée",
];

const RamadanSpecials = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Limited Time</p>
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-12">
            Ramadan Edition
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specials.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 flex items-center justify-center text-center hover:border-gold/50 transition-colors"
            >
              <span className="text-primary font-medium text-sm md:text-base">{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={ramadanDrinks}
            alt="Ramadan special drinks"
            className="w-full aspect-square object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default RamadanSpecials;
