import { Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-display text-primary">Raw</h3>
            <p className="text-muted-foreground">Specialty brews for music lovers.</p>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-muted-foreground text-sm">Cairo, Egypt</span>
            </div>
            <a
              href="https://instagram.com/rawcoffee.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">@rawcoffee.eg</span>
            </a>
          </div>
          <div className="rounded-lg overflow-hidden h-64 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60971148515!2d31.18095705!3d30.05968915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "250px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raw Coffee Location"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center">
        <p className="text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} Raw Specialty Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
