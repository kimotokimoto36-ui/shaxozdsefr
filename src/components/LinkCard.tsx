import React from 'react';
import { SocialLink } from '../types';

interface LinkCardProps {
  link: SocialLink;
  index: number;
  onCopyPhone?: () => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, index, onCopyPhone }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Mobile tactile feedback simulation
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(20);
      } catch {
        // Ignore if unsupported
      }
    }

    if (link.isCall && onCopyPhone) {
      // Optional callback
    }
  };

  // Special highlighted button styling for phone / main call action matching the Cyber Glassmorphism theme
  if (link.isCall) {
    return (
      <a
        href={link.url}
        onClick={handleClick}
        style={{ animationDelay: `${0.1 + index * 0.08}s` }}
        className="w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 border border-fuchsia-400/60 rounded-2xl p-4 mb-3 flex items-center justify-between group cursor-pointer transition-all duration-300 shadow-xl active:scale-98 relative overflow-hidden animate-fade-in-up breathing-btn"
      >
        <div className="flex items-center gap-3.5 relative z-10 min-w-0 pr-2">
          <div className="w-10 h-10 rounded-xl bg-black/30 border border-white/30 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-phone-volume text-lg text-cyan-300"></i>
          </div>

          <div className="text-left min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight truncate font-syne">
                {link.title}
              </h2>
              {link.badge && (
                <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-black/40 text-cyan-300 border border-cyan-400/40 shrink-0 font-sora">
                  {link.badge}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-cyan-100 truncate font-jakarta">
              {link.subtitle}
            </p>
          </div>
        </div>

        <div className="relative z-10 w-9 h-9 rounded-xl bg-black/30 border border-white/20 flex items-center justify-center text-cyan-200 group-hover:text-white group-hover:translate-x-1.5 transition-all shrink-0">
          <i className="fa-solid fa-arrow-right text-sm"></i>
        </div>
      </a>
    );
  }

  return (
    <a
      href={link.url}
      target={link.url.startsWith('tel:') ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
      className="w-full bg-black/40 border border-white/15 backdrop-blur-xl rounded-2xl p-4 mb-3 flex items-center justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden animate-fade-in-up breathing-btn"
    >
      {/* Background Gradient Accent on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

      {/* Left Content: Icon + Labels */}
      <div className="flex items-center gap-3.5 relative z-10 min-w-0 pr-2">
        {/* Icon Box */}
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
          <i className={link.iconClass}></i>
        </div>

        {/* Text Container */}
        <div className="text-left min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors truncate font-syne">
              {link.title}
            </h2>
            {link.badge && (
              <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-400/40 shrink-0 font-sora">
                {link.badge}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-slate-300 group-hover:text-slate-100 transition-colors truncate font-jakarta">
            {link.subtitle}
          </p>
        </div>
      </div>

      {/* Right Content: Arrow Icon */}
      <div className="relative z-10 w-9 h-9 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-400/50 transition-all duration-300 shrink-0 group-hover:translate-x-1.5">
        <i className="fa-solid fa-arrow-right text-sm"></i>
      </div>
    </a>
  );
};
