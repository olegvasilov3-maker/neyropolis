import React from 'react';
import { CourseModule } from '../types';

interface DistrictModalProps {
  module: CourseModule | null;
  onClose: () => void;
  onOpenEnroll: () => void;
}

export const DistrictModal: React.FC<DistrictModalProps> = ({ module, onClose, onOpenEnroll }) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#d8ac63]/40 shadow-2xl p-6 sm:p-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f4f3f1] hover:bg-[#E2C48C]/30 text-[#1A1A1A] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 sm:gap-5 mb-5 pr-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 ring-2 ring-[#E2C48C] shadow-md bg-[#f4f3f1]">
            <img
              src={module.imageUrl}
              alt={module.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
              {module.number} · {module.dateBadge}
            </span>
            <h2 className="font-serif text-[22px] sm:text-[28px] font-bold text-[#1A1A1A] leading-tight">
              {module.title}
            </h2>
            <span className="text-[13px] sm:text-[14px] text-[#524F49] font-medium mt-0.5">
              {module.subtitle}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] text-[#4e4539] leading-relaxed mb-5">
          {module.description}
        </p>

        {/* Outcome Box */}
        <div className="p-3.5 rounded-xl bg-[#E2C48C]/20 border border-[#E2C48C] text-[13px] text-[#1A1A1A] font-semibold flex items-center gap-2.5 mb-6">
          <span className="material-symbols-outlined text-[#7b5817] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          <span>{module.outcome}</span>
        </div>

        {/* Lessons List */}
        <div className="mb-6">
          <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-[#7b5817] mb-3">
            Программа уроков района:
          </h4>
          <div className="flex flex-col gap-2">
            {module.lessons.map((lesson, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#faf9f7] border border-[#d2c4b4]/30 text-[13px] text-[#1A1A1A] font-medium flex items-start gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-[#E2C48C]/30 text-[#7b5817] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{lesson}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Homework */}
        <div className="p-4 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/30 mb-6">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#7b5817] block mb-1">
            Практическое задание района:
          </span>
          <p className="text-[13px] text-[#4e4539] leading-relaxed">
            {module.homework}
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#f4f3f1]">
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-center">
            {module.tools.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-[#faf9f7] border border-[#d2c4b4]/40 text-[11px] font-bold text-[#524F49]">
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenEnroll();
            }}
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] text-[14px] font-bold shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
          >
            Занять место на потоке
          </button>
        </div>
      </div>
    </div>
  );
};
