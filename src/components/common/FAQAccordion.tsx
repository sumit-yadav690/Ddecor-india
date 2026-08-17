import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  id?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Find clear answers about measurement, curtain fabric selection, blind motors, and wallpaper installation in Gurgaon.',
  id = 'faq-section',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id={id} className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-[#E5E1DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.2em] text-[#8B735B] uppercase mb-2">
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
            <span>FREQUENT QUESTIONS</span>
            <div className="w-6 h-[1px] bg-[#8B735B]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1C1C] mt-2">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E5E1DA] bg-white overflow-hidden transition-colors"
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FAF9F6] transition cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif font-semibold text-[#1C1C1C] text-base leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8B735B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-[#E5E1DA]"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
