import React, { useState } from 'react';
import { FAQ_LIST } from '../data/courseData';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="flex flex-col px-4 sm:px-6 py-12 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col mb-8">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
          Ответы на частые вопросы
        </span>
        <h2 className="font-serif text-[26px] sm:text-[34px] text-[#1A1A1A] font-semibold tracking-tight">
          Что обычно спрашивают
        </h2>
        <p className="text-[15px] text-[#4e4539] mt-1">
          Все нюансы обучения, необходимых программ и технических требований.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3">
        {FAQ_LIST.map((item, idx) => {
          const isOpen = openIndices.includes(idx);

          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#d8ac63]/25 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-serif text-[17px] sm:text-[19px] text-[#1A1A1A] font-semibold gap-3 hover:text-[#7b5817] transition-colors"
              >
                <span>{item.question}</span>
                <span
                  className={`material-symbols-outlined text-[24px] text-[#7b5817] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-[14px] sm:text-[15px] text-[#4e4539] leading-relaxed border-t border-[#f4f3f1]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
