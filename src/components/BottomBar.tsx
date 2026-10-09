import React from 'react';

interface BottomBarProps {
  onOpenEnroll: () => void;
  onScrollToProgram: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({ onOpenEnroll, onScrollToProgram }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#faf9f7]/95 backdrop-blur-xl border-t border-[#E2C48C]/30 shadow-[0_-4px_24px_rgba(33,28,19,0.08)]">
      <div className="max-w-4xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Left: Stream Date */}
        <div className="flex flex-col justify-center min-w-0">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#807567]">
            Старт 5 потока
          </span>
          <span className="font-serif text-[17px] sm:text-[20px] font-bold text-[#1A1A1A] truncate leading-tight">
            12 октября 2026
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onScrollToProgram}
            className="h-11 px-3 sm:px-4 flex flex-col items-center justify-center text-[#524F49] hover:text-[#1A1A1A] transition-colors rounded-xl"
            title="Перейти к программе"
          >
            <span className="material-symbols-outlined text-[20px]">auto_stories</span>
            <span className="text-[9px] font-bold uppercase tracking-tight">Курс</span>
          </button>

          <button
            onClick={onOpenEnroll}
            className="min-h-[46px] px-5 sm:px-7 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] text-[14px] font-bold flex items-center justify-center shadow-[0_6px_20px_rgba(216,172,99,0.45)] hover:shadow-[0_8px_24px_rgba(216,172,99,0.6)] active:scale-95 transition-all"
          >
            <span>Занять место</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
