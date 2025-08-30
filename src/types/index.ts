// Types for E-Cell Application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  roles: UserRole[];
  isEmailVerified: boolean;
  profile: UserProfile;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'admin' | 'core' | 'member';

export interface UserProfile {
  bio?: string;
  college?: string;
  year?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  interests?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: TeamRole;
  headFlag: boolean;
  photoURL: string;
  quote: string;
  bio: string;
  email: string;
  linkedin?: string;
  github?: string;
  visible: boolean;
  order: number;
}

export type TeamRole = 
  | 'Overall Coordinator'
  | 'Events & Public Relations Head'
  | 'Design Head'
  | 'Media Head'
  | 'Technical Head'
  | 'Financial Head'
  | 'Operations Head'
  | 'Core Member'
  | 'Member';

export interface Event {
  id: string;
  title: string;
  slug: string;
  bannerURL: string;
  type: EventType;
  startDate: string;
  endDate: string;
  venue?: string;
  onlineLink?: string;
  capacity: number;
  registrationOpen: string;
  registrationClose: string;
  description: string;
  speakers: Speaker[];
  tags: string[];
  status: EventStatus;
  requirements?: string[];
  prizes?: string[];
  agenda?: AgendaItem[];
  createdAt: string;
  updatedAt: string;
}

export type EventType = 'workshop' | 'seminar' | 'competition' | 'networking' | 'hackathon' | 'conference';
export type EventStatus = 'draft' | 'published' | 'ongoing' | 'completed' | 'cancelled';

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  photoURL: string;
  linkedin?: string;
  twitter?: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speaker?: string;
  duration: number;
}

export interface Registration {
  id: string;
  userId: string;
  eventId: string;
  status: RegistrationStatus;
  registeredAt: string;
  attendedAt?: string;
  feedback?: string;
  rating?: number;
}

export type RegistrationStatus = 'registered' | 'confirmed' | 'attended' | 'cancelled' | 'waitlisted';

export interface Program {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  bannerURL: string;
  status: 'active' | 'upcoming' | 'past';
  highlights: string[];
  timeline?: TimelineItem[];
  registrationLink?: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  type: ResourceType;
  content: string;
  excerpt: string;
  author: string;
  bannerURL?: string;
  tags: string[];
  readTime: number;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export type ResourceType = 'blog' | 'guide' | 'case-study' | 'interview' | 'news';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'general' | 'partnership' | 'media' | 'support';
}

export interface Certificate {
  id: string;
  userId: string;
  eventId: string;
  type: CertificateType;
  issuedAt: string;
  certificateURL: string;
}

export type CertificateType = 'participation' | 'completion' | 'achievement' | 'winner';

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  actionURL?: string;
  createdAt: string;
}

export type NotificationType = 'event' | 'registration' | 'announcement' | 'reminder' | 'achievement';

export interface Partner {
  id: string;
  name: string;
  logoURL: string;
  website: string;
  type: PartnerType;
  visible: boolean;
  order: number;
}

export type PartnerType = 'title' | 'gold' | 'silver' | 'bronze' | 'community' | 'media';

export interface Analytics {
  totalUsers: number;
  totalEvents: number;
  totalRegistrations: number;
  activeEvents: number;
  monthlyGrowth: number;
  popularEvents: { id: string; title: string; registrations: number; }[];
  usersByRole: Record<UserRole, number>;
  registrationsByMonth: { month: string; count: number; }[];
}