import { menuData } from "@/data/menuData";

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-3">Our Offerings</p>
          <h2 className="text-4xl md:text-5xl font-display text-primary">The Menu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {menuData.map((category) => (
            <div key={category.title}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
