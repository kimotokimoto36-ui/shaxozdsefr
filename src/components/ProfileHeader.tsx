import React from 'react';
import { TeacherProfile } from '../types';
import { QrCode, Copy, Sparkles } from 'lucide-react';

interface ProfileHeaderProps {
  teacher: TeacherProfile;
  onOpenQr: () => void;
  onCopyLink: () => void;
  onOpenExport?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  teacher,
  onOpenQr,
  onCopyLink,
}) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in-up">
      {/* Verified Badge & Name */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-950/60 border border-cyan-400/40 rounded-full flex items-center gap-1.5 backdrop-blur-xl shadow-[0_0_15px_rgba(0,240,255,0.25)] font-sora">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
          Tasdiqlangan O'qituvchi
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl creative-title-text mb-1.5 tracking-tight">
        {teacher.name}
      </h1>

      <a
        href={teacher.telegramChannel}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-300 font-medium text-xs sm:text-sm hover:text-white transition-all mb-4 bg-black/40 px-4 py-1.5 rounded-full border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_12px_rgba(0,240,255,0.2)] hover:border-fuchsia-400 font-sora tracking-wide"
      >
        <i className="fa-brands fa-telegram text-cyan-400"></i>
        <span>{teacher.username}</span>
      </a>

      {/* Bio Description Frosted Card */}
      <div className="bg-black/40 border border-white/15 backdrop-blur-2xl rounded-2xl p-4 mb-5 text-center w-full shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
        <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/20 via-cyan-500/20 to-purple-600/20 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
        <p className="text-slate-200 text-xs sm:text-sm leading-relaxed relative z-10 font-jakarta">
          Expert English Language Educator •{' '}
          <span className="text-amber-300 font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-400/50 shadow-[0_0_10px_rgba(251,191,36,0.3)] font-sora">
            Multilevel C1 (75/75 • Maksimal Natija)
          </span>{' '}
          sohibi. Ingliz tili grammatikasi va CEFR bo'yicha tayyorlovchi mutaxassis.
        </p>
      </div>

      {/* Quick Actions Row */}
      <div className="flex items-center justify-center gap-2.5 mb-2 w-full max-w-xs">
        <button
          onClick={onCopyLink}
          className="flex-1 py-2.5 px-3 rounded-xl bg-black/40 backdrop-blur-xl text-cyan-200 text-xs font-semibold font-sora flex items-center justify-center gap-1.5 border border-cyan-500/40 hover:border-cyan-300 active:scale-95 shadow-md breathing-btn"
          title="Profil havolasini nusxalash"
        >
          <Copy className="w-3.5 h-3.5 text-cyan-400" />
          <span>Havola</span>
        </button>

        <button
          onClick={onOpenQr}
          className="flex-1 py-2.5 px-3 rounded-xl bg-black/40 backdrop-blur-xl text-fuchsia-200 text-xs font-semibold font-sora flex items-center justify-center gap-1.5 border border-fuchsia-500/40 hover:border-fuchsia-300 active:scale-95 shadow-md breathing-btn"
          title="QR Kodni ochish"
        >
          <QrCode className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>QR Kod</span>
        </button>
      </div>
    </div>
  );
};
