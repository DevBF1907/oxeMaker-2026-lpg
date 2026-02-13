
// Fix: Import React to resolve namespace error for React.ReactNode
import React from 'react';

export interface ScheduleItem {
  time: string;
  activity: string;
  location: string;
  description: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: 'Diamond' | 'Gold' | 'Silver';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
}