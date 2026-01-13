
import React from 'react';
import { Doctor, HospitalService, GalleryImage } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Senior Cardiologist',
    image: 'https://picsum.photos/seed/doc1/400/500',
    experience: '15+ Years',
    education: 'MD, Harvard Medical School',
    bio: 'Specialist in non-invasive cardiology and cardiovascular disease prevention.'
  },
  {
    id: '2',
    name: 'Dr. James Wilson',
    specialty: 'Neurologist',
    image: 'https://picsum.photos/seed/doc2/400/500',
    experience: '12 Years',
    education: 'MD, Stanford University',
    bio: 'Expert in treating complex neurological disorders and neuro-rehabilitation.'
  },
  {
    id: '3',
    name: 'Dr. Emily Chen',
    specialty: 'Pediatrician',
    image: 'https://picsum.photos/seed/doc3/400/500',
    experience: '10 Years',
    education: 'MD, Johns Hopkins University',
    bio: 'Passionate about child health, specialized in pediatric intensive care.'
  },
  {
    id: '4',
    name: 'Dr. Robert Brown',
    specialty: 'Orthopedic Surgeon',
    image: 'https://picsum.photos/seed/doc4/400/500',
    experience: '20+ Years',
    education: 'MD, Yale Medicine',
    bio: 'Renowned surgeon specializing in sports medicine and joint replacement.'
  }
];

export const SERVICES: HospitalService[] = [
  {
    id: 's1',
    title: 'Emergency Care',
    description: '24/7 world-class emergency response and trauma center with rapid-action medical teams.',
    icon: '🚨'
  },
  {
    id: 's2',
    title: 'Diagnostic Imaging',
    description: 'Advanced MRI, CT Scan, and X-ray facilities for accurate medical diagnosis.',
    icon: '🔬'
  },
  {
    id: 's3',
    title: 'Surgery Unit',
    description: 'State-of-the-art operation theaters equipped for minimally invasive and complex surgeries.',
    icon: '🏥'
  },
  {
    id: 's4',
    title: 'Maternity Ward',
    description: 'Comprehensive maternal and neonatal care with comfortable recovery suites.',
    icon: '👶'
  },
  {
    id: 's5',
    title: 'Cardiology Center',
    description: 'Expert heart care including bypass surgery, angioplasty, and cardiac rehab.',
    icon: '❤️'
  },
  {
    id: 's6',
    title: 'Physical Therapy',
    description: 'Tailored rehabilitation programs to restore mobility and strength after injury.',
    icon: '🏃'
  }
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://picsum.photos/seed/hosp1/800/600', caption: 'Modern Reception Lobby', category: 'Facility' },
  { id: 'g2', url: 'https://picsum.photos/seed/hosp2/800/600', caption: 'State-of-the-art MRI Unit', category: 'Equipment' },
  { id: 'g3', url: 'https://picsum.photos/seed/hosp3/800/600', caption: 'Specialized Nursing Staff', category: 'Staff' },
  { id: 'g4', url: 'https://picsum.photos/seed/hosp4/800/600', caption: 'Private Recovery Suite', category: 'Facility' },
  { id: 'g5', url: 'https://picsum.photos/seed/hosp5/800/600', caption: 'Robotic Surgery System', category: 'Equipment' },
  { id: 'g6', url: 'https://picsum.photos/seed/hosp6/800/600', caption: 'Healing Garden', category: 'Facility' }
];
