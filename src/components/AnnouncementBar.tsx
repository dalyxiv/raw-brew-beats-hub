const AnnouncementBar = () => {
  return (
    <div className="w-full bg-secondary py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* English Side */}
        <div className="text-left">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-1">
            Ramadan Timing
          </p>
          <p className="text-muted-foreground text-sm">
            Every day starting from the 20th of Feb.
          </p>
          <p className="text-gold text-2xl font-bold mt-1">
            5 PM - 4 AM
          </p>
        </div>
        {/* Arabic Side */}
        <div className="text-right" dir="rtl">
          <p className="text-gold uppercase tracking-wider text-lg font-bold mb-1 font-sans">
            مواعيد رمضان
          </p>
          <p className="text-muted-foreground text-sm font-sans">
            كل يوم ابتداءً من 20 فبراير
          </p>
          <p className="text-gold text-2xl font-bold mt-1 font-sans">
            من 5 مساءً إلى 4 صباحًا
          </p>
          <p className="text-muted-foreground text-xs mt-1 font-sans">
            كل سنة وانتم طيبين
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
