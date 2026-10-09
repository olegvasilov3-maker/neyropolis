import React from 'react';
import { MODULES } from '../data/courseData';
import { CourseModule, ActiveScreen } from '../types';

interface ModulesSectionProps {
  onSelectModule: (module: CourseModule) => void;
  onNavigate: (screen: ActiveScreen) => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onSelectModule, onNavigate }) => {
  return (
    <section className="flex flex-col px-4 sm:px-6 py-12 max-w-4xl mx-auto w-full" id="programma">
      {/* Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
            Собственная платформа
          </span>
          <button
            onClick={() => onNavigate('map')}
            className="text-[12px] font-bold text-[#7b5817] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Открыть 3D-карту города</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
        <h2 className="font-serif text-[26px] sm:text-[34px] text-[#1A1A1A] font-semibold tracking-tight">
          Обучение проходит в Нейрополисе
        </h2>
        <p className="text-[15px] text-[#4e4539] mt-2 leading-relaxed">
          Город будущего: каждый модуль — район на интерактивной карте города. Новые районы открываются по мере твоего прохождения, как уровни в захватывающей игре.
        </p>
      </div>

      {/* Modules List */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {MODULES.map((module) => (
          <div
            key={module.id}
            className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#d8ac63]/25 shadow-[0_4px_20px_-2px_rgba(33,28,19,0.06)] flex flex-col transition-all duration-300 hover:shadow-[0_10px_28px_-4px_rgba(216,172,99,0.25)] hover:border-[#E2C48C]"
          >
            <div className="flex items-start gap-4 mb-3">
              {/* Floating 3D Artwork thumbnail */}
              <div className={`relative shrink-0 ${module.animClass}`}>
                <div className="absolute -inset-1.5 rounded-xl bg-[#E2C48C]/35 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shimmer-hover-container ring-1 ring-[#d8ac63]/40 bg-[#f4f3f1] shadow-sm">
                  <img
                    src={module.imageUrl}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  />
                </div>
              </div>

              {/* Title & metadata */}
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#7b5817]">
                    {module.number}
                  </span>
                  <span className="text-[11px] text-[#807567]">·</span>
                  <span className="text-[11px] font-semibold text-[#807567]">
                    {module.dateBadge}
                  </span>
                </div>
                <h3 className="font-serif text-[20px] sm:text-[23px] text-[#1A1A1A] font-semibold leading-tight">
                  {module.title}
                </h3>
                <span className="text-[13px] sm:text-[14px] text-[#524F49] font-medium mt-0.5">
                  {module.subtitle}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] sm:text-[14px] text-[#4e4539] mb-3 leading-relaxed">
              {module.description}
            </p>

            {/* Outcome Badge & Detail Trigger */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-[#f4f3f1]">
              <div className="p-2 sm:px-3 rounded-lg bg-[#f4f3f1] text-[12px] sm:text-[13px] text-[#1A1A1A] font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#7b5817] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="line-clamp-1">{module.outcome}</span>
              </div>

              <button
                onClick={() => onSelectModule(module)}
                className="px-3.5 py-1.5 rounded-lg border border-[#E2C48C] text-[#7b5817] hover:bg-[#E2C48C]/15 text-[12px] font-bold flex items-center justify-center gap-1 transition-colors self-end sm:self-auto shrink-0"
              >
                <span>Программа района</span>
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
