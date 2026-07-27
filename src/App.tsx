import React, { useState } from 'react';
import { teacherData, socialLinks } from './data/teacherData';
import { ProfileHeader } from './components/ProfileHeader';
import { ScoreCard } from './components/ScoreCard';
import { LinkCard } from './components/LinkCard';
import { QrModal } from './components/QrModal';
import { CodeExportModal } from './components/CodeExportModal';
import { NotificationToast } from './components/NotificationToast';
import { Globe, Code } from 'lucide-react';

export default function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const showToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => setToastMessage(null), 3000);
  };

  const copyToClipboard = async (text: string, successMsg: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      showToast(successMsg);
    } catch {
      showToast(successMsg);
    }
  };

  const handleCopyLink = () => {
    copyToClipboard(window.location.href, "Profil havolasi almashtirish buferiga nusxalandi!");
  };

  const handleCopyPhone = () => {
    copyToClipboard(teacherData.phone, "Telefon raqami (+998 90 823-83-03) nusxalandi!");
  };

  return (
    <div className="min-h-screen cosmic-plasma-bg text-slate-100 flex flex-col items-center justify-between p-4 sm:p-6 relative overflow-hidden selection:bg-cyan-500 selection:text-white font-poppins">
      
      {/* Background Animated Glowing Ambient Mesh Blobs */}
      <div className="bg-blob-1 fixed top-[-140px] left-[-140px] w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-fuchsia-600/25 rounded-full blur-[60px] pointer-events-none z-0 will-change-transform"></div>
      <div className="bg-blob-2 fixed bottom-[-140px] right-[-140px] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-cyan-500/25 rounded-full blur-[60px] pointer-events-none z-0 will-change-transform"></div>

      {/* Top Bar Navigation */}
      <header className="w-full max-w-md flex items-center justify-center relative z-10 py-2 mb-3">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-cyan-500/40 backdrop-blur-xl text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-cyan-300 font-bold font-sora tracking-wider">ONLINE</span>
          <span className="text-cyan-500">•</span>
          <span className="text-fuchsia-300 font-sora font-medium">@CEFRWITHSHAKHZOD</span>
        </div>
      </header>

      {/* Central Single-Page Content Card Area */}
      <main className="w-full max-w-md relative z-10 my-auto p-5 sm:p-6 cyber-glass-card">
        
        {/* Teacher Profile Card */}
        <ProfileHeader
          teacher={teacherData}
          onOpenQr={() => setIsQrOpen(true)}
          onCopyLink={handleCopyLink}
          onOpenExport={() => setIsExportOpen(true)}
        />

        {/* Multilevel C1 Score Showcase */}
        <ScoreCard />

        {/* Social / Contact Link Buttons */}
        <div className="w-full space-y-3 mb-2">
          {socialLinks.map((link, idx) => (
            <LinkCard
              key={link.id}
              link={link}
              index={idx}
              onCopyPhone={handleCopyPhone}
            />
          ))}
        </div>

      </main>

      {/* Footer Section */}
      <footer className="w-full max-w-md text-center text-cyan-300/70 text-xs py-4 border-t border-cyan-500/20 relative z-10 mt-6 font-jakarta">
        <div className="flex items-center justify-center gap-1.5 mb-1 text-cyan-300 font-semibold">
          <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span className="font-sora tracking-wider">CEFR & INGLIZ TILI TA'LIMI</span>
        </div>
        <p>© 2026 Shaxzod Baxtiyorovich (@CEFRWITHSHAKHZOD). All Rights Reserved.</p>
      </footer>

      {/* Modals & Toast */}
      <QrModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        telegramUrl={teacherData.telegramChannel}
        onCopyUrl={() => {
          navigator.clipboard.writeText(teacherData.telegramChannel);
          showToast("Telegram kanal havolasi nusxalandi!");
        }}
      />

      <CodeExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        onCopySuccess={() => showToast("HTML & CSS kodi to'liq nusxalandi!")}
      />

      <NotificationToast message={toastMessage} />

    </div>
  );
}
