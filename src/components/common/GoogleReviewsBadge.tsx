import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

interface GoogleReviewsBadgeProps {
  variant?: 'compact' | 'full' | 'card';
  className?: string;
}

export const GoogleReviewsBadge: React.FC<GoogleReviewsBadgeProps> = ({ variant = 'compact', className = '' }) => {
  if (variant === 'compact') {
    return (
      <a
        href={BUSINESS_CONFIG.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-[#FAF9F6] hover:bg-white text-[#1C1C1C] px-3.5 py-1.5 border border-[#E5E1DA] hover:border-[#8B735B] transition text-xs font-medium ${className}`}
        aria-label="Google Business Profile 4.9 out of 5 stars based on 30 reviews"
      >
        <span className="flex items-center text-[#8B735B]">
          <Star className="w-3.5 h-3.5 fill-[#8B735B] text-[#8B735B]" />
        </span>
        <span className="font-bold text-[#1C1C1C]">{BUSINESS_CONFIG.rating}</span>
        <span className="text-stone-400">/ 5</span>
        <span className="text-stone-300">•</span>
        <span className="text-stone-700 tracking-wide">{BUSINESS_CONFIG.reviewsCount} Google Reviews</span>
      </a>
    );
  }

  return (
    <div className={`bg-[#FAF9F6] border border-[#E5E1DA] p-6 shadow-2xs ${className}`}>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white flex items-center justify-center text-[#1C1C1C] font-bold text-xs border border-[#E5E1DA]">
            G
          </div>
          <div>
            <div className="text-[10px] text-[#8B735B] uppercase tracking-[0.2em] font-semibold">Google Verified</div>
            <div className="text-xs font-bold text-[#1C1C1C]">{BUSINESS_CONFIG.name}</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-emerald-800 text-[10px] uppercase tracking-wider font-semibold bg-emerald-50 px-2 py-0.5 border border-emerald-200">
          <ShieldCheck className="w-3 h-3" />
          Verified
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-3xl font-serif font-light text-[#1C1C1C]">{BUSINESS_CONFIG.rating}</span>
        <div className="flex gap-0.5 text-[#8B735B]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#8B735B] text-[#8B735B]" />
          ))}
        </div>
        <span className="text-xs text-stone-500 font-medium">({BUSINESS_CONFIG.reviewsCount} reviews)</span>
      </div>

      <p className="text-xs text-stone-600 leading-relaxed mb-4">
        Serving Sector 84 &amp; all Gurugram with doorstep measurement, custom tailoring, and clean installation.
      </p>

      <a
        href={BUSINESS_CONFIG.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold text-[#8B735B] hover:text-[#1C1C1C] uppercase tracking-wider flex items-center gap-1"
      >
        View verified reviews on Google Maps →
      </a>
    </div>
  );
};
