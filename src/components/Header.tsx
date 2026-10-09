import React from 'react';
import { ActiveScreen } from '../types';
import { AUTHOR_IMAGE } from '../data/courseData';

interface HeaderProps {
  activeScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
  onOpenEnroll: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeScreen, onNavigate, onOpenEnroll }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-[#faf9f7]/90 backdrop-blur-xl border-b border-[#E2C48C]/25 shadow-[0_1px_12px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Logo / Brand */}
        <div 
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#EAD3A8] to-[#C49A52] flex items-center justify-center text-[#1A1A1A] font-bold shadow-sm group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">smart_toy</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#1A1A1A] tracking-tight leading-tight group-hover:text-[#7b5817] transition-colors">
              Claude + ChatGPT
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7b5817]">
                Нейрополис · 5 поток
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-[#efeeec]/70 p-1 rounded-full border border-[#E2C48C]/30">
          <button
            onClick={() => onNavigate('overview')}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all ${
              activeScreen === 'overview'
                ? 'bg-[#1A1A1A] text-[#faf9f7] shadow-sm'
                : 'text-[#524F49] hover:text-[#1A1A1A]'
            }`}
          >
            Обзор курса
          </button>
          <button
            onClick={() => onNavigate('map')}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-1.5 transition-all ${
              activeScreen === 'map'
                ? 'bg-[#1A1A1A] text-[#faf9f7] shadow-sm'
                : 'text-[#524F49] hover:text-[#1A1A1A]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#C49A52]">explore</span>
            Карта города
          </button>
          <button
            onClick={() => onNavigate('playground')}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-1.5 transition-all ${
              activeScreen === 'playground'
                ? 'bg-[#1A1A1A] text-[#faf9f7] shadow-sm'
                : 'text-[#524F49] hover:text-[#1A1A1A]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#C49A52]">code</span>
            AI Тест-драйв
          </button>
          <button
            onClick={() => onNavigate('calculator')}
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-1.5 transition-all ${
              activeScreen === 'calculator'
                ? 'bg-[#1A1A1A] text-[#faf9f7] shadow-sm'
                : 'text-[#524F49] hover:text-[#1A1A1A]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#C49A52]">calculate</span>
            Окупаемость
          </button>
        </nav>

        {/* Right side CTA & Author avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenEnroll}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] text-[13px] font-bold shadow-[0_4px_16px_rgba(216,172,99,0.35)] hover:shadow-[0_6px_20px_rgba(216,172,99,0.5)] active:scale-95 transition-all"
          >
            Занять место
          </button>

          <div 
            title="Юлия Голыгина — автор курса"
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-2 pl-1 cursor-pointer"
          >
            <img
              src={AUTHOR_IMAGE}
              alt="Юлия Голыгина"
              className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-[#E2C48C]/70 shadow-sm hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Mobile Screen Switcher Bar */}
      <div className="flex md:hidden overflow-x-auto no-scrollbar px-4 py-2 bg-[#f4f3f1]/90 border-t border-[#E2C48C]/20 gap-2">
        <button
          onClick={() => onNavigate('overview')}
          className={`shrink-0 px-3 py-1 rounded-full text-[12px] font-medium transition-colors ${
            activeScreen === 'overview'
              ? 'bg-[#1A1A1A] text-[#faf9f7]'
              : 'bg-white/80 text-[#524F49] border border-[#d2c4b4]/40'
          }`}
        >
          Обзор
        </button>
        <button
          onClick={() => onNavigate('map')}
          className={`shrink-0 px-3 py-1 rounded-full text-[12px] font-medium flex items-center gap-1 transition-colors ${
            activeScreen === 'map'
              ? 'bg-[#1A1A1A] text-[#faf9f7]'
              : 'bg-white/80 text-[#524F49] border border-[#d2c4b4]/40'
          }`}
        >
          <span className="material-symbols-outlined text-[14px] text-[#C49A52]">explore</span>
          Карта Нейрополиса
        </button>
        <button
          onClick={() => onNavigate('playground')}
          className={`shrink-0 px-3 py-1 rounded-full text-[12px] font-medium flex items-center gap-1 transition-colors ${
            activeScreen === 'playground'
              ? 'bg-[#1A1A1A] text-[#faf9f7]'
              : 'bg-white/80 text-[#524F49] border border-[#d2c4b4]/40'
          }`}
        >
          <span className="material-symbols-outlined text-[14px] text-[#C49A52]">code</span>
          AI Тест-драйв
        </button>
        <button
          onClick={() => onNavigate('calculator')}
          className={`shrink-0 px-3 py-1 rounded-full text-[12px] font-medium flex items-center gap-1 transition-colors ${
            activeScreen === 'calculator'
              ? 'bg-[#1A1A1A] text-[#faf9f7]'
              : 'bg-white/80 text-[#524F49] border border-[#d2c4b4]/40'
          }`}
        >
          <span className="material-symbols-outlined text-[14px] text-[#C49A52]">calculate</span>
          Калькулятор
        </button>
      </div>
    </header>
  );
};
