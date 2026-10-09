import React, { useState } from 'react';
import { STUDENT_CASES } from '../data/courseData';

export const CaseStudySection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('katerina');
  const activeCase = STUDENT_CASES.find(c => c.id === selectedCaseId) || STUDENT_CASES[0];

  return (
    <section className="flex flex-col px-4 sm:px-6 py-12 max-w-4xl mx-auto w-full" id="otzyvy">
      {/* Header */}
      <div className="flex flex-col mb-6">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
          Реальные результаты выпускников
        </span>
        <h2 className="font-serif text-[26px] sm:text-[34px] text-[#1A1A1A] font-semibold tracking-tight">
          24 продажи за 2 дня на продукте от Claude
        </h2>
        <p className="text-[15px] text-[#4e4539] mt-1">
          Посмотрите, как студенты окупают стоимость программы еще до окончания обучения.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4">
        {STUDENT_CASES.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCaseId(c.id)}
            className={`px-4 py-2 rounded-full text-[13px] font-bold shrink-0 transition-all ${
              selectedCaseId === c.id
                ? 'bg-[#1A1A1A] text-white shadow-md'
                : 'bg-white border border-[#d8ac63]/30 text-[#524F49] hover:border-[#E2C48C]'
            }`}
          >
            {c.studentName} · {c.niche}
          </button>
        ))}
      </div>

      {/* Case Card */}
      <div className="group rounded-2xl overflow-hidden bg-white border border-[#d8ac63]/25 shadow-[0_8px_28px_-4px_rgba(33,28,19,0.08)] transition-all duration-500 hover:shadow-[0_16px_36px_-6px_rgba(216,172,99,0.25)] hover:border-[#E2C48C]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Photo */}
          <div className="relative w-full aspect-square md:aspect-auto md:min-h-[360px] bg-[#f4f3f1] overflow-hidden shimmer-hover-container">
            <img
              src={activeCase.imageUrl}
              alt={activeCase.studentName}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md text-white text-[12px] font-bold shadow-md">
              {activeCase.studentName} · {activeCase.role}
            </div>
          </div>

          {/* Details */}
          <div className="p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#7b5817]">
                Ниша: {activeCase.niche}
              </span>
              <p className="text-[14px] sm:text-[15px] text-[#4e4539] mt-2 mb-5 leading-relaxed">
                {activeCase.story}
              </p>

              {/* Stats Chips */}
              <div className="grid grid-cols-3 gap-2 text-center mb-5">
                <div className="p-2.5 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/20 flex flex-col">
                  <span className="font-serif text-[20px] sm:text-[22px] text-[#7b5817] font-bold leading-tight">
                    {activeCase.salesCount}
                  </span>
                  <span className="text-[11px] text-[#655d52] font-medium mt-0.5">
                    продажи
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/20 flex flex-col">
                  <span className="font-serif text-[17px] sm:text-[19px] text-[#7b5817] font-bold leading-tight">
                    {activeCase.revenueRub.toLocaleString('ru-RU')} ₽
                  </span>
                  <span className="text-[11px] text-[#655d52] font-medium mt-0.5">
                    оплачено
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/20 flex flex-col">
                  <span className="font-serif text-[18px] sm:text-[20px] text-[#7b5817] font-bold leading-tight">
                    {activeCase.timeframe}
                  </span>
                  <span className="text-[11px] text-[#655d52] font-medium mt-0.5">
                    до результата
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-3.5 rounded-xl bg-[#E2C48C]/15 border border-[#E2C48C]/35 text-[13px] sm:text-[14px] text-[#564216] italic leading-relaxed">
              {activeCase.quote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
