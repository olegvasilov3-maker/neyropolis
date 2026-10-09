import React from 'react';

interface FooterProps {
  onOpenEnroll: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnroll }) => {
  return (
    <footer className="flex flex-col w-full bg-[#efeeec] border-t border-[#E2C48C]/30 text-[#4e4539] text-[12px] leading-relaxed">
      {/* Pre-Footer Hero Banner */}
      <div className="py-14 px-4 sm:px-6 bg-white border-b border-[#E2C48C]/20 text-center flex flex-col items-center">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-2">
          Финальный шаг
        </span>
        <h2 className="font-serif text-[28px] sm:text-[38px] text-[#1A1A1A] font-semibold mb-3 leading-tight">
          Встретимся в Нейрополисе
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#4e4539] max-w-xl mb-8 leading-relaxed">
          Агенты, сайты и скилы, которые ты соберёшь, — <strong className="text-[#1A1A1A] font-bold">твои навсегда</strong>. Курс закончится — цифровые сотрудники останутся работать на тебя.
        </p>
        <button
          onClick={onOpenEnroll}
          className="w-full sm:w-auto min-w-[280px] py-4 px-8 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_8px_24px_-2px_rgba(216,172,99,0.45)] hover:shadow-[0_12px_28px_rgba(216,172,99,0.6)] active:scale-98 transition-all"
        >
          <span>Занять место на потоке</span>
          <span className="material-symbols-outlined text-[20px]">bolt</span>
        </button>
      </div>

      {/* Requisites & Legal Info */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 flex flex-col">
        <div className="font-serif text-[18px] text-[#1A1A1A] font-bold mb-2">
          Claude + ChatGPT на максимум
        </div>

        <p className="mb-4 text-[#524F49]">
          ИП Голыгина Юлия Евгеньевна<br />
          ИНН 753618244408 · ОГРНИП 320237500142010<br />
          350909, Россия, Краснодарский край, г. Краснодар, ст-ца Старокорсунская, с/т Дружба, уч. 193<br />
          goliginaylia@mail.ru · +7 996 972-30-75
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-[#7b5817] font-semibold text-[13px]">
          <a
            href="https://golyginayulia.ru/page149263906.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Политика обработки данных
          </a>
          <a
            href="https://golyginayulia.ru/claudeoferta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Публичная оферта
          </a>
          <a
            href="https://telegram.me/sluzba_zaboti_golygina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Служба заботы
          </a>
        </div>

        <p className="text-[11px] text-[#807567]">
          Лицензия на образовательную деятельность №Л035-01218-23/02596829 от 04.07.2025.<br />
          Сайт не связан с компанией Anthropic PBC или OpenAI. Все товарные знаки принадлежат их законным владельцам.
        </p>
      </div>
    </footer>
  );
};
