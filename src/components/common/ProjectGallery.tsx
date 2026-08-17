import React, { useState } from 'react';
import { REAL_PROJECTS, BUSINESS_CONFIG, getWhatsAppLink } from '../../config/business';
import { GalleryProject, ServiceCategory } from '../../types';
import { MapPin, ArrowUpRight, X, MessageCircle, Phone } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '../../lib/analytics';

interface ProjectGalleryProps {
  initialFilter?: ServiceCategory;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  initialFilter = 'all',
  title = 'Recent Projects Across Gurugram',
  subtitle = 'Explore real curtain, window blind, and wallpaper installations completed in Sector 84, Vatika India Next, and Gurugram residences.',
  limit,
}) => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>(initialFilter);
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const filtered = REAL_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const displayList = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
              <div className="w-6 h-[1px] bg-[#8B735B]"></div>
              <span>REAL WORKMANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E5E1DA] self-start md:self-auto overflow-x-auto max-w-full">
            {(['all', 'curtains', 'blinds', 'wallpaper'] as ServiceCategory[]).map((tab) => (
              <button
                key={tab}
                id={`gallery-tab-${tab}`}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition whitespace-nowrap cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-[#1C1C1C] text-white'
                    : 'text-stone-700 hover:text-[#1C1C1C] hover:bg-stone-50'
                }`}
              >
                {tab === 'all' ? 'All Work' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayList.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-[#E5E1DA] shadow-2xs hover:border-[#8B735B] transition flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#1C1C1C]/90 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                  {project.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8B735B] mb-2 font-semibold uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-[#8B735B] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <h3 className="font-serif text-[#1C1C1C] text-base font-semibold line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E5E1DA] flex items-center justify-between gap-2">
                  <button
                    id={`view-project-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-stone-700 hover:text-[#1C1C1C] uppercase tracking-wider transition flex items-center gap-1 cursor-pointer"
                  >
                    View Details
                  </button>
                  <a
                    id={`whatsapp-project-${project.id}`}
                    href={getWhatsAppLink(`Hi Ddecor India, I like this project: ${project.title} (${project.tag}). Can you share fabric catalogs and pricing?`, project.tag)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`Gallery Card ${project.title}`, project.tag)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full detail view with Direct Action */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E5E1DA]">
              <div className="relative aspect-16/10 bg-stone-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  id="close-gallery-modal"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 bg-black/80 hover:bg-black text-white p-2 transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#8B735B] font-semibold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8B735B]" />
                  {selectedProject.location} • <span className="font-bold">{selectedProject.tag}</span>
                </div>
                <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">{selectedProject.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed mb-6">{selectedProject.description}</p>

                <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-[#E5E1DA]">
                  <a
                    id="modal-whatsapp-btn"
                    href={getWhatsAppLink(`Hi Ddecor India, I am interested in getting a quote for this style: ${selectedProject.title} (${selectedProject.tag}).`, selectedProject.tag)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackWhatsAppClick('Gallery Modal', selectedProject.tag);
                      setSelectedProject(null);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 text-center shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire About This Style on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
