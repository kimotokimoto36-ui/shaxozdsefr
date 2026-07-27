import { TeacherProfile, SocialLink } from '../types';

export const teacherData: TeacherProfile = {
  name: "𝐌𝐮𝐥𝐭𝐢𝐥𝐞𝐯𝐞𝐥_𝐒𝐡𝐚𝐱𝐳𝐨𝐝",
  username: "@CEFRWITHSHAKHZOD",
  title: "Professional English Educator & CEFR Specialist",
  bio: "Multilevel C1 (Writing 75/75 • Maksimal Natija) sohibi. Ingliz tili grammatikasi, Writing va CEFR imtihonlariga tayyorlovchi tajribali o'qituvchi.",
  multilevelLevel: "C1 Level (75/75)",
  writingScore: 75,
  phone: "+998908238303",
  telegramChannel: "https://t.me/CEFRWITHSHAKHZOD",
  youtubeChannel: "https://www.youtube.com/channel/UCsplxvhOQP7NI53wxTQF-Qw",
  instagramProfile: "https://instagram.com/CEFRWITHSHAKHZOD",
  telegramPersonal: "https://t.me/Brilliantchik",
  avatarUrl: "/src/assets/images/cefr_certificate_badge_1784728635373.jpg"
};

export const socialLinks: SocialLink[] = [
  {
    id: "telegram",
    title: "Telegram Kanal",
    subtitle: "Bepul darsliklar, testlar va foydali ma'lumotlar",
    url: "https://t.me/CEFRWITHSHAKHZOD",
    iconClass: "fa-brands fa-telegram text-2xl text-sky-400",
    glowClass: "glow-telegram",
    badge: "Rasmiy Kanal",
    color: "from-sky-500/20 to-blue-600/10"
  },
  {
    id: "youtube",
    title: "YouTube Kanal",
    subtitle: "Videodarslar, Writing tahlillari va strimlar",
    url: "https://www.youtube.com/channel/UCsplxvhOQP7NI53wxTQF-Qw",
    iconClass: "fa-brands fa-youtube text-2xl text-red-500",
    glowClass: "glow-youtube",
    badge: "Video Darslar",
    color: "from-red-500/20 to-rose-600/10"
  },
  {
    id: "instagram",
    title: "Instagram Profil",
    subtitle: "@CEFRWITHSHAKHZOD • Foydali post va reelslar",
    url: "https://instagram.com/CEFRWITHSHAKHZOD",
    iconClass: "fa-brands fa-instagram text-2xl text-pink-400",
    glowClass: "glow-instagram",
    badge: "Kundalik postlar",
    color: "from-pink-500/20 to-purple-600/10"
  },
  {
    id: "phone",
    title: "Bog'lanish (Telefon)",
    subtitle: "+998 (90) 823-83-03 • Qo'ng'iroq qilish",
    url: "tel:+998908238303",
    iconClass: "fa-solid fa-phone-volume text-xl text-emerald-400",
    glowClass: "glow-phone",
    badge: "Aloqa",
    color: "from-emerald-500/20 to-teal-600/10"
  },
  {
    id: "online-admin",
    title: "Onlayn Admin",
    subtitle: "@Farahnurim • Administrator bilan bog'lanish",
    url: "https://t.me/Farahnurim",
    iconClass: "fa-solid fa-user-shield text-xl text-cyan-400",
    glowClass: "glow-cyan",
    badge: "Admin",
    color: "from-cyan-500/20 to-teal-600/10"
  },
  {
    id: "telegram-dm",
    title: "Shaxsiy Telegram (Lichka)",
    subtitle: "Kurslarga yozilish va konsultatsiya uchun",
    url: "https://t.me/Brilliantchik",
    iconClass: "fa-solid fa-paper-plane text-xl text-indigo-400",
    glowClass: "glow-purple",
    badge: "24/7 Yozish",
    color: "from-indigo-500/20 to-violet-600/10"
  }
];
