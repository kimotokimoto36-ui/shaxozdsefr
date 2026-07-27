import React from 'react';
import { X, QrCode as QrIcon, Download, Copy, ExternalLink } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  telegramUrl: string;
  onCopyUrl: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({
  isOpen,
  onClose,
  telegramUrl,
  onCopyUrl,
}) => {
  if (!isOpen) return null;

  // Uses high quality qr code service
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    telegramUrl
  )}&color=38bdf8&bgcolor=0f172a`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-sm glass-card rounded-3xl p-6 border border-slate-700/60 shadow-2xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg">
          <QrIcon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-1 font-['Outfit']">
          QR-Kod Bilan Ulashish
        </h3>
        <p className="text-xs text-slate-300 mb-5">
          Kamera orqali skanerlang va Shaxzod Baxtiyorovich kanaliga a'zo bo'ling
        </p>

        {/* QR Code Display Container */}
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 inline-block mb-5 shadow-inner">
          <img
            src={qrApiUrl}
            alt="Shaxzod Baxtiyorovich QR Code"
            className="w-48 h-48 rounded-lg mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="text-xs font-mono text-cyan-300 bg-slate-900/80 p-2 rounded-xl border border-slate-800 mb-4 truncate">
          {telegramUrl}
        </div>

        <div className="flex gap-2">
          <button
            onClick={onCopyUrl}
            className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
          >
            <Copy className="w-4 h-4 text-cyan-400" />
            <span>Havolani Nusxalash</span>
          </button>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Kanalga O'tish</span>
          </a>
        </div>
      </div>
    </div>
  );
};
