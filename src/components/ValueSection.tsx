import React from 'react';

export const ValueSection: React.FC = () => {
  const capabilities = [
    {
      icon: 'query_stats',
      title: 'Анализировать блог и находить скрытые точки роста',
      detail: 'Выявляет, какие темы дают максимальный охват и конверсию в подписку.'
    },
    {
      icon: 'radar',
      title: 'Анализировать конкурентов и тренды индустрии',
      detail: 'Парсит топ-рилсы ниши и собирает паттерны виральности за 2 минуты.'
    },
    {
      icon: 'movie_edit',
      title: 'Создавать сценарии Reels и виральные хуки',
      detail: 'Генерирует сценарии с раскадровкой, паузами и таймингом под алгоритмы.'
    },
    {
      icon: 'view_carousel',
      title: 'Собирать карусели и оформлять гайды',
      detail: 'Готовые слайды с визуальной структурой и логикой удержания внимания.'
    },
    {
      icon: 'photo_camera',
      title: 'Генерировать фотосессии и монтировать видео',
      detail: 'Фотореалистичные изображения в вашем стиле и автоматический монтаж.'
    },
    {
      icon: 'filter_alt',
      title: 'Делать лид-магниты и воронки продаж',
      detail: 'Интерактивные гайды, мини-уроки и чек-листы, которые привлекают заявки.'
    },
    {
      icon: 'web',
      title: 'Делать сайты и Mini Apps без программиста',
      detail: 'Вайбкодинг: от идеи до рабочего сервиса в браузере за один вечер.'
    },
    {
      icon: 'smart_toy',
      title: 'Выполнять задачи через агентов 24/7',
      detail: 'Цифровые сотрудники, которые сами публикуют посты и общаются с клиентами.'
    }
  ];

  return (
    <section className="flex flex-col px-4 sm:px-6 py-12 bg-[#f4f3f1] border-y border-[#E2C48C]/25">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col mb-8">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
            Уже через неделю
          </span>
          <h2 className="font-serif text-[26px] sm:text-[34px] text-[#1A1A1A] font-semibold tracking-tight">
            Что нейросети смогут делать вместо тебя
          </h2>
          <p className="text-[15px] text-[#4e4539] mt-2">
            ИИ берет на себя 80% рутины, освобождая время для стратегии, жизни и творчества.
          </p>
        </div>

        {/* 8 Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#d8ac63]/25 shadow-sm hover:border-[#E2C48C] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E2C48C]/20 flex items-center justify-center shrink-0 text-[#7b5817] group-hover:scale-105 group-hover:bg-[#E2C48C]/35 transition-all">
                <span className="material-symbols-outlined text-[22px]">
                  {item.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] sm:text-[15px] text-[#1A1A1A] font-semibold leading-snug">
                  {item.title}
                </span>
                <span className="text-[12px] sm:text-[13px] text-[#655d52] mt-1 leading-relaxed">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Obsidian Quote Box */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#1A1A1A] text-white relative overflow-hidden shadow-xl border border-[#C49A52]/30">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-[#E2C48C]/15 blur-2xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C49A52]/20 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col">
            <span className="text-[12px] uppercase font-bold tracking-widest text-[#E2C48C] mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Главный сдвиг парадигмы
            </span>
            <p className="text-[15px] sm:text-[16px] text-[#cfc5b7] mb-2 font-medium">
              Самое ценное не в том, что Claude умеет всё это делать.
            </p>
            <p className="font-serif text-[20px] sm:text-[24px] italic text-[#faf9f7] font-semibold leading-relaxed">
              «Самое ценное в том, что тебе больше никогда не придётся делать это вручную.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
