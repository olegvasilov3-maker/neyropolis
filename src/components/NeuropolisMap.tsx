import React, { useState } from 'react';
import { MODULES } from '../data/courseData';
import { CourseModule } from '../types';

interface NeuropolisMapProps {
  onSelectModule: (module: CourseModule) => void;
  onOpenEnroll: () => void;
}

export const NeuropolisMap: React.FC<NeuropolisMapProps> = ({ onSelectModule, onOpenEnroll }) => {
  const [selectedId, setSelectedId] = useState<string>('module-0');
  const activeModule = MODULES.find(m => m.id === selectedId) || MODULES[0];

  return (
    <section className="flex flex-col px-4 sm:px-6 py-8 max-w-5xl mx-auto w-full">
      {/* City Map Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-[#1A1A1A] text-white border border-[#C49A52]/40 shadow-2xl mb-8 overflow-hidden">
        <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#E2C48C]/15 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 -bottom-10 w-44 h-44 rounded-full bg-[#7b5817]/25 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2C48C]/15 border border-[#E2C48C]/30 text-[#E2C48C] text-[11px] font-extrabold uppercase tracking-widest mb-3 self-start">
              <span className="w-2 h-2 rounded-full bg-[#C49A52] animate-ping"></span>
              Интерактивная карта Нейрополиса
            </div>
            <h1 className="font-serif text-[28px] sm:text-[38px] font-semibold text-white tracking-tight leading-tight">
              Виртуальный мегаполис ИИ
            </h1>
            <p className="text-[14px] sm:text-[15px] text-[#cfc5b7] mt-2 leading-relaxed">
              Исследуйте 7 районов города. Каждый район открывает прикладные суперспособности: от первой генерации до автономных сотрудников и вайбкодинга.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenEnroll}
              className="py-3.5 px-6 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] font-bold text-[14px] shadow-[0_4px_20px_rgba(216,172,99,0.4)] active:scale-95 transition-all text-center"
            >
              Заселиться в Нейрополис
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Map Layout: Left Selector, Right Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Districts Grid / Navigation (7 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
            Районы города (выберите для осмотра)
          </span>

          {MODULES.map((mod, idx) => {
            const isSelected = mod.id === selectedId;

            return (
              <div
                key={mod.id}
                onClick={() => setSelectedId(mod.id)}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 border ${
                  isSelected
                    ? 'bg-white border-[#C49A52] shadow-md ring-2 ring-[#E2C48C]/50'
                    : 'bg-white/80 border-[#d8ac63]/20 hover:border-[#E2C48C] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E2C48C]/40 bg-[#f4f3f1] shadow-xs">
                    <img
                      src={mod.imageUrl}
                      alt={mod.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7b5817]">
                        {mod.number}
                      </span>
                      <span className="text-[10px] text-[#807567] font-medium">
                        {idx === 0 ? '· Старт' : `· Уровень ${idx}`}
                      </span>
                    </div>
                    <span className="font-serif text-[16px] font-bold text-[#1A1A1A] truncate">
                      {mod.title}
                    </span>
                    <span className="text-[12px] text-[#655d52] truncate">
                      {mod.subtitle}
                    </span>
                  </div>
                </div>

                <span className={`material-symbols-outlined text-[20px] shrink-0 ${isSelected ? 'text-[#7b5817]' : 'text-[#d2c4b4]'}`}>
                  {isSelected ? 'radio_button_checked' : 'arrow_forward_ios'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected District Deep View (7 columns) */}
        <div className="lg:col-span-7">
          <div className="sticky top-24 rounded-3xl bg-white border border-[#d8ac63]/30 shadow-xl p-6 sm:p-8 flex flex-col">
            {/* Header with 3D Image */}
            <div className="flex flex-col sm:flex-row items-start gap-5 pb-6 border-b border-[#f4f3f1]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 ring-2 ring-[#E2C48C] shadow-lg bg-[#f4f3f1]">
                <img
                  src={activeModule.imageUrl}
                  alt={activeModule.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#E2C48C]/20 text-[#7b5817] text-[11px] font-bold uppercase tracking-wider self-start mb-1.5">
                  {activeModule.number} · {activeModule.dateBadge}
                </div>
                <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-[#1A1A1A] leading-tight">
                  {activeModule.title}
                </h2>
                <span className="text-[14px] text-[#524F49] font-medium mt-1">
                  {activeModule.subtitle}
                </span>
              </div>
            </div>

            {/* Description & Outcome */}
            <div className="py-5 border-b border-[#f4f3f1]">
              <p className="text-[14px] sm:text-[15px] text-[#4e4539] leading-relaxed mb-4">
                {activeModule.description}
              </p>
              <div className="p-3 rounded-xl bg-[#f4f3f1] border border-[#E2C48C]/40 text-[13px] text-[#1A1A1A] font-semibold flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#7b5817] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span>{activeModule.outcome}</span>
              </div>
            </div>

            {/* Curriculum Breakdown */}
            <div className="py-5">
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#7b5817] block mb-3">
                Программа района:
              </span>
              <div className="flex flex-col gap-2">
                {activeModule.lessons.map((lesson, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-3 rounded-xl bg-[#faf9f7] border border-[#d2c4b4]/20 text-[13px] text-[#1A1A1A] font-medium flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#E2C48C]/30 text-[#7b5817] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {lIdx + 1}
                    </span>
                    <span>{lesson}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Stack & Action */}
            <div className="pt-4 border-t border-[#f4f3f1] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-[#807567] font-semibold mr-1">Инструменты:</span>
                {activeModule.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-[#f4f3f1] text-[11px] font-bold text-[#524F49]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectModule(activeModule)}
                className="py-2.5 px-5 rounded-full bg-[#1A1A1A] text-white text-[13px] font-bold hover:bg-[#333] transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Подробный регламент</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
