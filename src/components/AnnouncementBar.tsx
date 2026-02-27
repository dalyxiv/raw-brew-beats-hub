const AnnouncementBar = () => {
  return (
    <div className="w-full bg-accent py-2.5 px-4 text-center">
      <p className="text-sm font-medium text-accent-foreground tracking-wide">
        <span>RAMADAN TIMING: Every day starting from the 20th of Feb. | 5 pm - 4 am</span>
        <span className="mx-3 opacity-40">|</span>
        <span dir="rtl" className="font-sans">
          مواعيد رمضان: كل يوم ابتداءً من 20 فبراير | من 5 مساءً إلى 4 صباحًا | كل سنة وانتم طيبين
        </span>
      </p>
    </div>
  );
};

export default AnnouncementBar;
