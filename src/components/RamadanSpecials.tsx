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
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Limited Time</p>
        <h2 className="text-4xl md:text-5xl font-display text-primary mb-12">
          Ramadan Edition
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specials.map((item) => (
            <div
              key={item}
              className="bg-card border border-border rounded-lg p-6 flex items-center justify-center text-center hover:border-gold/50 transition-colors"
            >
              <span className="text-primary font-medium text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RamadanSpecials;
