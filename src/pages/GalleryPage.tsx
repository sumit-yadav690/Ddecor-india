import React, { useEffect } from 'react';
import { ProjectGallery } from '../components/common/ProjectGallery';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateDocumentSEO } from '../lib/seo';

interface GalleryPageProps {
  onNavigate?: (path: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  useEffect(() => {
    updateDocumentSEO({
      title: 'Project Gallery | Curtains, Blinds & Wallpaper in Gurgaon | Ddecor',
      description: 'Browse photos of completed custom curtains, window blinds, and luxury wallpaper projects in Sector 84, Vatika India Next, and Gurugram residences.',
      canonicalPath: '/gallery',
      h1: 'Real Projects Gallery in Gurgaon',
    });
  }, []);

  return (
    <main>
      <div className="bg-white border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Project Gallery' }]} />
        </div>
      </div>

      <ProjectGallery
        title="Our Workmanship Across Gurgaon Residences"
        subtitle="Filter by Curtains, Blinds, and Wallpaper to explore real installations completed by our Sector 84 team."
      />
    </main>
  );
};
