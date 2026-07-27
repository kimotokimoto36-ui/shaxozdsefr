import React, { useState } from 'react';
import { X, Copy, Check, Code2, Download } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  onCopySuccess,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Complete standalone HTML string with embedded <style> tags as specifically requested
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>𝐌𝐮𝐥𝐭𝐢𝐥𝐞𝐯𝐞𝐥_𝐒𝐡𝐚𝐱𝐳𝐨𝐝 | @CEFRSHAKHZOD</title>
  <meta name="description" content="𝐌𝐮𝐥𝐭𝐢𝐥𝐞𝐯𝐞𝐥_𝐒𝐡𝐚𝐱𝐳𝐨𝐝 - Multilevel C1 (75/75 Maksimal Natija) ingliz tili o'qituvchisining rasmiy vizitkasi">
  
  <!-- Font Awesome 6 Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet">

  <style>
    /* Clean Reset & Variables */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }

    body {
      background: linear-gradient(-45deg, #0d032b, #4c00b0, #8b00ff, #ff007f, #00f0ff, #120836, #d900ff, #00e5ff);
      background-size: 400% 400%;
      animation: cosmicPlasma 14s ease-in-out infinite;
      color: #F1F5F9;
      font-family: 'Poppins', system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 16px;
      position: relative;
      overflow-x: hidden;
    }

    @keyframes cosmicPlasma {
      0% { background-position: 0% 50%; filter: hue-rotate(0deg) contrast(1.15); }
      50% { background-position: 100% 50%; filter: hue-rotate(180deg) contrast(1.25); }
      100% { background-position: 0% 50%; filter: hue-rotate(360deg) contrast(1.15); }
    }

    /* Card Wrapper */
    .container {
      width: 100%;
      max-width: 480px;
      position: relative;
      z-index: 10;
      background: rgba(10, 8, 25, 0.65);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.20);
      border-radius: 28px;
      padding: 24px;
      animation: neonPulseCard 6s ease-in-out infinite, fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes neonPulseCard {
      0%, 100% { box-shadow: 0 0 25px rgba(0, 240, 255, 0.4), 0 0 50px rgba(255, 0, 127, 0.25); border-color: rgba(255, 255, 255, 0.2); }
      50% { box-shadow: 0 0 45px rgba(255, 0, 127, 0.6), 0 0 85px rgba(0, 240, 255, 0.45); border-color: rgba(0, 240, 255, 0.6); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Glassmorphism Cards */
    .glass-card {
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
    }

    /* Profile Header Styling */
    .profile-header {
      text-align: center;
      margin-bottom: 24px;
    }

    .avatar-wrapper {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 0 auto 16px auto;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #080C14;
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.5), 0 0 45px rgba(168, 85, 247, 0.3);
    }

    .verified-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 999px;
      background: rgba(8, 47, 73, 0.8);
      border: 1px solid rgba(56, 189, 248, 0.3);
      color: #38bdf8;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .teacher-name {
      font-family: 'Outfit', sans-serif;
      font-size: 26px;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 4px;
    }

    .teacher-username {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #38BDF8;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      background: rgba(12, 74, 110, 0.3);
      padding: 4px 14px;
      border-radius: 999px;
      border: 1px solid rgba(56, 189, 248, 0.2);
      margin-bottom: 12px;
      transition: all 0.2s ease;
    }

    .teacher-username:hover {
      background: rgba(12, 74, 110, 0.5);
      border-color: rgba(56, 189, 248, 0.4);
    }

    .bio-text {
      color: #94A3B8;
      font-size: 14px;
      line-height: 1.6;
      max-width: 400px;
      margin: 0 auto 20px auto;
    }

    .bio-text strong {
      color: #FBBF24;
      background: rgba(120, 53, 15, 0.4);
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }

    /* Score Card Highlight */
    .score-card {
      padding: 16px;
      margin-bottom: 20px;
      border: 1px solid rgba(56, 189, 248, 0.2);
    }

    .score-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 10px;
      margin-bottom: 12px;
    }

    .score-title {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #FFF;
    }

    .score-val {
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 800;
      color: #FBBF24;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      text-align: center;
    }

    .stat-box {
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 8px 4px;
      border-radius: 12px;
    }

    .stat-num {
      font-weight: 700;
      font-size: 13px;
      color: #38BDF8;
      display: block;
    }

    .stat-lbl {
      font-size: 10px;
      color: #64748B;
    }

    /* Link Buttons Section */
    .links-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .link-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      text-decoration: none;
      color: #FFF;
      border-radius: 18px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }

    .link-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .icon-box {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .btn-title {
      font-family: 'Outfit', sans-serif;
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .btn-subtitle {
      font-size: 12px;
      color: #94A3B8;
    }

    .arrow-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: rgba(15, 23, 42, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748B;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    /* Individual Brand Glow Effects on Hover */
    .btn-telegram:hover {
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
      border-color: rgba(56, 189, 248, 0.6);
      transform: translateY(-3px) scale(1.015);
    }
    .btn-telegram .icon-box { color: #38BDF8; }

    .btn-youtube:hover {
      box-shadow: 0 0 25px rgba(239, 68, 68, 0.4);
      border-color: rgba(239, 68, 68, 0.6);
      transform: translateY(-3px) scale(1.015);
    }
    .btn-youtube .icon-box { color: #EF4444; }

    .btn-instagram:hover {
      box-shadow: 0 0 25px rgba(236, 72, 153, 0.4);
      border-color: rgba(236, 72, 153, 0.6);
      transform: translateY(-3px) scale(1.015);
    }
    .btn-instagram .icon-box { color: #F472B6; }

    .btn-phone:hover {
      box-shadow: 0 0 25px rgba(34, 197, 94, 0.4);
      border-color: rgba(34, 197, 94, 0.6);
      transform: translateY(-3px) scale(1.015);
    }
    .btn-phone .icon-box { color: #4ADE80; }

    .btn-dm:hover {
      box-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
      border-color: rgba(168, 85, 247, 0.6);
      transform: translateY(-3px) scale(1.015);
    }
    .btn-dm .icon-box { color: #A855F7; }

    .link-btn:hover .arrow-icon {
      color: #FFF;
      background: rgba(30, 41, 59, 0.8);
      transform: translateX(3px);
    }

    .link-btn:hover .icon-box {
      transform: scale(1.1);
    }

    /* Footer */
    footer {
      text-align: center;
      margin-top: 32px;
      font-size: 12px;
      color: #64748B;
    }

    footer a {
      color: #38BDF8;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <!-- Background Animated Lights -->
  <div class="bg-blob-1"></div>
  <div class="bg-blob-2"></div>

  <!-- Main Container -->
  <div class="container">
    
    <!-- Profile Header -->
    <div class="profile-header">
      <div>
        <span class="verified-badge"><i class="fa-solid fa-circle-check"></i> Rasmiy O'qituvchi</span>
      </div>

      <h1 class="teacher-name">𝐌𝐮𝐥𝐭𝐢𝐥𝐞𝐯𝐞𝐥_𝐒𝐡𝐚𝐱𝐳𝐨𝐝</h1>
      <a href="https://t.me/CEFRWITHSHAKHZOD" target="_blank" class="teacher-username">
        <i class="fa-brands fa-telegram"></i> @CEFRWITHSHAKHZOD
      </a>

      <p class="bio-text">
        <strong>Multilevel C1 (75/75 • Maksimal Natija)</strong> sohibi. Ingliz tili grammatikasi, Writing va CEFR imtihonlariga tayyorlovchi tajribali o'qituvchi.
      </p>
    </div>

    <!-- CEFR Score Card -->
    <div class="glass-card score-card">
      <div class="score-row">
        <div>
          <div style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700;">Imtihon Natijasi</div>
          <div class="score-title">Multilevel C1 Level</div>
        </div>
        <div style="text-align: right;">
          <div class="score-val">75 / 75</div>
          <div style="font-size: 10px; color: #FBBF24; font-weight: 700;">Maksimal Natija</div>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-box">
          <span class="stat-num" style="color: #FBBF24;">75 / 68</span>
          <span class="stat-lbl">Writing</span>
        </div>
        <div class="stat-box">
          <span class="stat-num" style="color: #38BDF8;">75 / 75</span>
          <span class="stat-lbl">Listening</span>
        </div>
        <div class="stat-box">
          <span class="stat-num" style="color: #38BDF8;">75 / 75</span>
          <span class="stat-lbl">Reading</span>
        </div>
        <div class="stat-box">
          <span class="stat-num" style="color: #38BDF8;">75 / 69</span>
          <span class="stat-lbl">Speaking</span>
        </div>
      </div>
    </div>

    <!-- Links List -->
    <div class="links-list">
      
      <!-- Telegram Channel -->
      <a href="https://t.me/CEFRWITHSHAKHZOD" target="_blank" class="glass-card link-btn btn-telegram">
        <div class="link-left">
          <div class="icon-box"><i class="fa-brands fa-telegram"></i></div>
          <div>
            <div class="btn-title">Telegram Kanal</div>
            <div class="btn-subtitle">Bepul darsliklar va materiallar</div>
          </div>
        </div>
        <div class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
      </a>

      <!-- YouTube Channel -->
      <a href="https://www.youtube.com/channel/UCsplxvhOQP7NI53wxTQF-Qw" target="_blank" class="glass-card link-btn btn-youtube">
        <div class="link-left">
          <div class="icon-box"><i class="fa-brands fa-youtube"></i></div>
          <div>
            <div class="btn-title">YouTube Kanal</div>
            <div class="btn-subtitle">CEFRWITHSHAKHZOD • Video darslar</div>
          </div>
        </div>
        <div class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
      </a>

      <!-- Instagram Profile -->
      <a href="https://instagram.com/CEFRWITHSHAKHZOD" target="_blank" class="glass-card link-btn btn-instagram">
        <div class="link-left">
          <div class="icon-box"><i class="fa-brands fa-instagram"></i></div>
          <div>
            <div class="btn-title">Instagram Profil</div>
            <div class="btn-subtitle">@CEFRWITHSHAKHZOD • Maslahatlar</div>
          </div>
        </div>
        <div class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
      </a>

      <!-- Phone Contact -->
      <a href="tel:+998908238303" class="glass-card link-btn btn-phone">
        <div class="link-left">
          <div class="icon-box"><i class="fa-solid fa-phone-volume"></i></div>
          <div>
            <div class="btn-title">Bog'lanish (Telefon)</div>
            <div class="btn-subtitle">+998 (90) 823-83-03</div>
          </div>
        </div>
        <div class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
      </a>

      <!-- Onlayn Admin -->
      <a href="https://t.me/Farahnurim" target="_blank" class="glass-card link-btn btn-admin">
        <div class="link-left">
          <div class="icon-box"><i class="fa-solid fa-user-shield"></i></div>
          <div>
            <div class="btn-title">Onlayn Admin</div>
            <div class="btn-subtitle">@Farahnurim • Administrator bilan bog'lanish</div>
          </div>
        </div>
        <div class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
      </a>

      <!-- Direct Telegram DM -->
      <a href="https://t.me/Brilliantchik" target="_blank" class="glass-card link-btn btn-dm">
        <div class="link-left">
          <div class="icon-box"><i class="fa-solid fa-paper-plane"></i></div>
          <div>
            <div class="btn-title">Shaxsiy Telegram (Lichka)</div>
            <div class="btn-subtitle">Kursga yozilish va savollar</div>
          </div>
        </div>
        <div class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></div>
      </a>

    </div>

    <!-- Footer -->
    <footer>
      &copy; 2026 Shaxzod Baxtiyorovich (@CEFRSHAKHZOD). Barcha huquqlar himoyalangan.
    </footer>

  </div>

</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    onCopySuccess();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shaxzod_baxtiyorovich_vizitka.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-2xl glass-card rounded-3xl p-5 sm:p-6 border border-slate-700/80 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Outfit']">
                Tayyor HTML va CSS Kodi
              </h3>
              <p className="text-xs text-slate-400">
                Barcha CSS style'lar HTML ichidagi &lt;style&gt; tegida yozilgan
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Code View Area */}
        <div className="flex-1 overflow-y-auto bg-slate-950 rounded-2xl p-4 border border-slate-800/90 font-mono text-xs text-slate-300 leading-relaxed custom-scrollbar mb-4">
          <pre>{standaloneHtmlCode}</pre>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-slate-800">
          <button
            onClick={handleCopy}
            className="flex-1 py-3 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Kodni Nusxalandi!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Barcha HTML va CSS Kodini Nusxalash</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-700 active:scale-98"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>.html Faylini Yuklab Olish</span>
          </button>
        </div>
      </div>
    </div>
  );
};
