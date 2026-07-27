import React from 'react';
import { Award, PenTool, CheckCircle, BarChart2 } from 'lucide-react';

export const ScoreCard: React.FC = () => {
  return (
    <div className="w-full bg-black/40 border border-cyan-500/30 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 mb-5 relative overflow-hidden group hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-all duration-300 shadow-2xl animate-fade-in-up">
      {/* Background Ambient Glow */}
      <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-fuchsia-500/30 transition-all"></div>
      
      <div className="flex items-center justify-between mb-3 border-b border-cyan-500/20 pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            <Award className="w-4 h-4 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-cyan-300 font-sora">Malaka Darajasi</h3>
            <p className="text-base font-bold text-white font-sora flex items-center gap-1.5">
              Multilevel C1
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-1.5 py-0.2 rounded font-sora shadow-[0_0_8px_rgba(52,211,153,0.25)]">Rasmiy Sertifikat</span>
            </p>
          </div>
        </div>

        {/* Highlight Score Pill */}
        <div className="text-right">
          <span className="text-2xl creative-number-text tracking-tight block">75 / 75</span>
          <span className="text-[10px] font-medium text-amber-300/90 uppercase tracking-wider block -mt-0.5 font-sora">Maksimal Natija</span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_12px_rgba(251,191,36,0.3)] transition-all">
          <div className="flex items-center justify-center gap-1 text-amber-300 font-semibold mb-0.5 font-sora text-sm">
            <PenTool className="w-3 h-3 text-amber-400" />
            <span>75 / 68</span>
          </div>
          <span className="text-slate-300 font-medium text-[11px] font-jakarta">Writing</span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] transition-all">
          <div className="flex items-center justify-center gap-1 text-emerald-300 font-semibold mb-0.5 font-sora text-sm">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>75 / 75</span>
          </div>
          <span className="text-slate-300 font-medium text-[11px] font-jakarta">Listening</span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/40 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all">
          <div className="flex items-center justify-center gap-1 text-cyan-300 font-semibold mb-0.5 font-sora text-sm">
            <CheckCircle className="w-3 h-3 text-cyan-400" />
            <span>75 / 75</span>
          </div>
          <span className="text-slate-300 font-medium text-[11px] font-jakarta">Reading</span>
        </div>

        <div className="p-2.5 rounded-xl bg-black/40 border border-fuchsia-500/30 hover:border-fuchsia-400 hover:shadow-[0_0_12px_rgba(217,0,255,0.3)] transition-all">
          <div className="flex items-center justify-center gap-1 text-fuchsia-300 font-semibold mb-0.5 font-sora text-sm">
            <BarChart2 className="w-3 h-3 text-fuchsia-400" />
            <span>75 / 69</span>
          </div>
          <span className="text-slate-300 font-medium text-[11px] font-jakarta">Speaking</span>
        </div>
      </div>
    </div>
  );
};
