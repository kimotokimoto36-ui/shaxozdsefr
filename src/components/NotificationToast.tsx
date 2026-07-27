import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 border border-cyan-500/50 text-white text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-xl animate-fade-in-up">
      <div className="p-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/40">
        <CheckCircle2 className="w-4 h-4" />
      </div>
      <span>{message}</span>
    </div>
  );
};
