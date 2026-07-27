export interface TeacherProfile {
  name: string;
  username: string;
  title: string;
  bio: string;
  multilevelLevel: string;
  writingScore: number;
  phone: string;
  telegramChannel: string;
  youtubeChannel: string;
  instagramProfile: string;
  telegramPersonal: string;
  avatarUrl: string;
}

export interface SocialLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  iconClass: string;
  glowClass: string;
  badge?: string;
  color: string;
  isCall?: boolean;
}
