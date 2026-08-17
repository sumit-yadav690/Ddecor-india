import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
      <ol className="flex items-center flex-wrap gap-2 list-none p-0 m-0">
        <li className="flex items-center gap-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }}
            className="hover:text-[#1C1C1C] transition inline-flex items-center gap-1 text-stone-600"
          >
            <Home className="w-3 h-3 text-[#8B735B]" />
            <span>Home</span>
          </a>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-[#8B735B] shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[#1C1C1C] font-bold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href) {
                      window.history.pushState({}, '', item.href);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo(0, 0);
                    }
                  }}
                  className="hover:text-[#1C1C1C] transition text-stone-600 truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
