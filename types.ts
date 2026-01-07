import React from 'react';

export interface Brand {
  name: string;
  website: string;
  logo?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryImage {
  url: string;
  alt: string;
}
