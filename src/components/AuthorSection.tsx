import React from 'react';
import { AUTHOR_IMAGE } from '../data/courseData';

export const AuthorSection: React.FC = () => {
  const credentials = [
    {
      icon: 'workspace_premium',
      title: '7 лет опыта',
      subtitle: 'в цифровом маркетинге, личном бренде и EdTech проектах'
    },
    {
      icon: 'groups',
      title: '100 000+ учеников',
      subtitle: 'по всему миру успешно прошли платные обучающие программы'
    },
    {
      icon: 'trending_up',
      title: '250 000+ подписчиков',
      subtitle: 'без затрат на платную рекламу исключительно благодаря виральности ИИ-контента'
    },
    {
      icon: 'verified_user',
      title: 'Гослицензия',
      subtitle: 'Лицензия Мин. образования №Л035-01218-23/02596829'
    }
  ];

  return (
    <section className="flex flex-col px-4 sm:px-6 py-12 bg-[#f4f3f1] border-y border-[#E2C48C]/25">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 ring-2 ring-[#E2C48C] shadow-lg">
            <img
              src={AUTHOR_IMAGE}
              alt="Юлия Голыгина"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col text-center md:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
              Кто ведёт курс
            </span>
            <h2 className="font-serif text-[28px] sm:text-[36px] text-[#1A1A1A] font-semibold leading-tight">
              Юлия Голыгина
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4e4539] mt-2 max-w-xl leading-relaxed">
              Эксперт по практическому внедрению нейросетей в блогинг, автоматизации воронок и построению системных digital-бизнесов.
            </p>
          </div>
        </div>

        {/* Regalia Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#d8ac63]/25 shadow-sm flex items-start gap-3.5 hover:border-[#E2C48C] hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E2C48C]/20 flex items-center justify-center shrink-0 text-[#7b5817]">
                <span className="material-symbols-outlined text-[22px]">
                  {item.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] text-[#1A1A1A] font-bold leading-snug">
                  {item.title}
                </span>
                <span className="text-[13px] text-[#655d52] mt-0.5 leading-relaxed">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
