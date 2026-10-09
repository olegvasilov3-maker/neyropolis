import React from 'react';
import { AUTHOR_IMAGE } from '../data/courseData';
import { ActiveScreen } from '../types';

interface HeroSectionProps {
  onOpenEnroll: () => void;
  onNavigate: (screen: ActiveScreen) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll, onNavigate }) => {
  return (
    <section className="flex flex-col px-4 sm:px-6 pt-6 pb-12 max-w-4xl mx-auto w-full">
      {/* Stream Badge */}
      <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#E2C48C]/20 border border-[#E2C48C]/40 text-[#564216] text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#B3874B] animate-pulse"></span>
        <span>5-й юбилейный поток · старт 12 октября · 600+ выпускников</span>
      </div>

      {/* Editorial Typography Title */}
      <div className="flex flex-col mb-3">
        <h1 className="font-serif text-[34px] sm:text-[46px] md:text-[54px] font-semibold text-[#1A1A1A] tracking-tight leading-[1.1]">
          Claude + ChatGPT
        </h1>
        <span className="font-serif text-[34px] sm:text-[46px] md:text-[54px] italic text-[#7b5817] font-medium leading-[1.1]">
          на максимум
        </span>
      </div>

      {/* Subtitle */}
      <p className="text-[16px] sm:text-[18px] text-[#4e4539] mb-6 leading-relaxed">
        Две нейросети вместо <strong className="text-[#1A1A1A] font-bold">целой команды</strong>. От первых шагов до своих автономных агентов, сайтов и автоматизации контента — даже если сейчас ты полный 0 в ИИ.
      </p>

      {/* Author Showcase Card in Hero */}
      <div className="relative w-full rounded-2xl p-2.5 shadow-[0_4px_24px_-4px_rgba(33,28,19,0.08)] mb-6 group bg-white border border-[#d8ac63]/25 transition-all duration-500 hover:shadow-[0_16px_40px_-6px_rgba(216,172,99,0.32)]">
        {/* Ambient Breathing Golden Glow Background */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#EAD3A8]/40 via-[#edbf74]/25 to-[#C49A52]/40 blur-xl -z-10 anim-glow pointer-events-none"></div>
        
        <div className="relative w-full rounded-xl overflow-hidden bg-[#f4f3f1] aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/10] shimmer-hover-container">
          <img
            src={AUTHOR_IMAGE}
            alt="Юлия Голыгина"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent flex flex-col justify-end text-white">
            <span className="font-serif text-[22px] sm:text-[26px] font-bold text-white leading-tight">
              Юлия Голыгина
            </span>
            <span className="text-[13px] sm:text-[14px] text-[#E2C48C] font-medium opacity-95">
              Эксперт по нейросетям и системному блогингу · 100 000+ учеников
            </span>
          </div>
        </div>
      </div>

      {/* Hero Value Highlights */}
      <div className="flex flex-col gap-2.5 mb-6">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/30 hover:bg-white hover:border-[#E2C48C] transition-colors">
          <span className="material-symbols-outlined text-[#7b5817] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <span className="text-[14px] sm:text-[15px] text-[#1A1A1A] font-medium">
            Подключение ИИ к вашим соцсетям и автоматизация рутины
          </span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/30 hover:bg-white hover:border-[#E2C48C] transition-colors">
          <span className="material-symbols-outlined text-[#7b5817] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <span className="text-[14px] sm:text-[15px] text-[#1A1A1A] font-medium">
            Монтаж, генерация фото, карусели, воронки продаж, виральные рилсы
          </span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/30 hover:bg-white hover:border-[#E2C48C] transition-colors">
          <span className="material-symbols-outlined text-[#7b5817] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <span className="text-[14px] sm:text-[15px] text-[#1A1A1A] font-medium">
            Свои автономные агенты, сайты и Telegram Mini App приложения без кода
          </span>
        </div>
      </div>

      {/* CTA Buttons Row */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={onOpenEnroll}
          className="flex-1 py-4 px-6 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_8px_24px_-2px_rgba(216,172,99,0.45)] hover:shadow-[0_12px_28px_-2px_rgba(216,172,99,0.6)] active:scale-98 transition-all"
        >
          <span>Занять место на потоке</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          onClick={() => onNavigate('map')}
          className="sm:w-auto py-4 px-6 rounded-full bg-white border border-[#E2C48C] text-[#1A1A1A] font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#efeeec] active:scale-98 transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-[#7b5817] text-[20px]">map</span>
          <span>Карта Нейрополиса</span>
        </button>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-8 text-center">
        <div className="flex flex-col p-3 rounded-xl bg-white border border-[#d8ac63]/25 shadow-sm">
          <span className="font-serif text-[24px] sm:text-[28px] text-[#7b5817] font-bold leading-tight">2</span>
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#524F49] uppercase tracking-wider">нейросети</span>
        </div>
        <div className="flex flex-col p-3 rounded-xl bg-white border border-[#d8ac63]/25 shadow-sm">
          <span className="font-serif text-[24px] sm:text-[28px] text-[#7b5817] font-bold leading-tight">6</span>
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#524F49] uppercase tracking-wider">модулей</span>
        </div>
        <div className="flex flex-col p-3 rounded-xl bg-white border border-[#d8ac63]/25 shadow-sm">
          <span className="font-serif text-[24px] sm:text-[28px] text-[#7b5817] font-bold leading-tight">7</span>
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#524F49] uppercase tracking-wider">мини-курсов</span>
        </div>
        <div className="flex flex-col p-3 rounded-xl bg-white border border-[#d8ac63]/25 shadow-sm">
          <span className="font-serif text-[24px] sm:text-[28px] text-[#7b5817] font-bold leading-tight">5-й</span>
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#524F49] uppercase tracking-wider">поток</span>
        </div>
      </div>

      {/* Ticker / Capabilities Pills */}
      <div className="overflow-x-auto no-scrollbar flex items-center gap-2 mt-6 py-2 -mx-4 px-4 sm:-mx-6 sm:px-6">
        <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#efeeec] text-[13px] font-medium text-[#4e4539] border border-[#d2c4b4]/30">
          свои агенты
        </span>
        <span className="shrink-0 text-[#B3874B] text-[12px]">✦</span>
        <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#efeeec] text-[13px] font-medium text-[#4e4539] border border-[#d2c4b4]/30">
          сайты
        </span>
        <span className="shrink-0 text-[#B3874B] text-[12px]">✦</span>
        <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#efeeec] text-[13px] font-medium text-[#4e4539] border border-[#d2c4b4]/30">
          воронки
        </span>
        <span className="shrink-0 text-[#B3874B] text-[12px]">✦</span>
        <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#efeeec] text-[13px] font-medium text-[#4e4539] border border-[#d2c4b4]/30">
          рилсы
        </span>
        <span className="shrink-0 text-[#B3874B] text-[12px]">✦</span>
        <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#efeeec] text-[13px] font-medium text-[#4e4539] border border-[#d2c4b4]/30">
          приложения
        </span>
        <span className="shrink-0 text-[#B3874B] text-[12px]">✦</span>
        <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#efeeec] text-[13px] font-medium text-[#4e4539] border border-[#d2c4b4]/30">
          автопостинг
        </span>
      </div>
    </section>
  );
};
