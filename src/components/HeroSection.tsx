import heroBg from "@/assets/hero-bg.jpg";
import rawLogo from "@/assets/raw-logo-dark.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 text-center flex flex-col items-center gap-6 animate-fade-in-up px-4">
        <img src={rawLogo} alt="Raw Coffee" className="w-32 h-32 rounded-2xl object-cover" />
        <h1 className="text-6xl md:text-8xl font-display tracking-tight text-primary">
          Raw
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-widest uppercase">
          Specialty brews for music lovers.
        </p>
        <button
          onClick={scrollToMenu}
          className="mt-4 px-10 py-3.5 bg-accent text-accent-foreground font-semibold tracking-wider uppercase text-sm rounded-sm hover:opacity-90 transition-opacity"
        >
          View Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
