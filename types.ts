
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  education: string;
  bio: string;
}

export interface HospitalService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'Facility' | 'Equipment' | 'Staff';
}

export enum Page {
  Home = 'home',
  Services = 'services',
  Doctors = 'doctors',
  Gallery = 'gallery',
  Contact = 'contact'
}
