import React, { useState } from 'react';

interface RoiCalculatorProps {
  onOpenEnroll: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenEnroll }) => {
  const [weeklyHours, setWeeklyHours] = useState(16);
  const [hourlyRate, setHourlyRate] = useState(1500);
  const [monthlyRevenue, setMonthlyRevenue] = useState(150000);

  // Math:
  // AI saves ~75% of routine hours
  const hoursSavedPerMonth = Math.round(weeklyHours * 4.2 * 0.75);
  // Money saved by not outsourcing to copywriters/editors
  const monthlySavingsRub = hoursSavedPerMonth * hourlyRate;
  // Estimated extra revenue upside (students average +30% boost due to consistency & mini-products)
  const extraRevenueRub = Math.round(monthlyRevenue * 0.35);
  // Total monthly value
  const totalMonthlyBenefit = monthlySavingsRub + extraRevenueRub;
  // Course price (Max tier: 31 990)
  const paybackDays = Math.max(2, Math.round((31990 / totalMonthlyBenefit) * 30));

  return (
    <section className="flex flex-col px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col mb-8 text-center items-center">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
          Финансовая математика
        </span>
        <h1 className="font-serif text-[28px] sm:text-[38px] text-[#1A1A1A] font-semibold tracking-tight">
          Калькулятор окупаемости курса
        </h1>
        <p className="text-[15px] text-[#4e4539] mt-2 max-w-xl">
          Посчитайте, сколько часов вашей жизни и денег на подрядчиках сберегут нейросети каждый месяц.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sliders Input Column */}
        <div className="md:col-span-6 p-6 rounded-3xl bg-white border border-[#d8ac63]/30 shadow-md flex flex-col gap-6">
          {/* Slider 1: Hours */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-[13px] font-bold text-[#1A1A1A]">
                Часов в неделю на контент и рутину:
              </label>
              <span className="font-serif text-[20px] font-bold text-[#7b5817]">
                {weeklyHours} ч/нед
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="40"
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
              className="w-full accent-[#C49A52]"
            />
            <div className="flex justify-between text-[11px] text-[#807567] mt-1">
              <span>4 ч</span>
              <span>20 ч</span>
              <span>40 ч</span>
            </div>
          </div>

          {/* Slider 2: Hourly Rate */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-[13px] font-bold text-[#1A1A1A]">
                Стоимость часа вашего времени / подрядчика:
              </label>
              <span className="font-serif text-[20px] font-bold text-[#7b5817]">
                {hourlyRate.toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="250"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-[#C49A52]"
            />
            <div className="flex justify-between text-[11px] text-[#807567] mt-1">
              <span>500 ₽</span>
              <span>2 500 ₽</span>
              <span>5 000 ₽</span>
            </div>
          </div>

          {/* Slider 3: Revenue */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-[13px] font-bold text-[#1A1A1A]">
                Текущий ежемесячный доход:
              </label>
              <span className="font-serif text-[20px] font-bold text-[#7b5817]">
                {monthlyRevenue.toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <input
              type="range"
              min="30000"
              max="1000000"
              step="10000"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="w-full accent-[#C49A52]"
            />
            <div className="flex justify-between text-[11px] text-[#807567] mt-1">
              <span>30 000 ₽</span>
              <span>500 000 ₽</span>
              <span>1 000 000 ₽</span>
            </div>
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#1A1A1A] text-white border-2 border-[#C49A52] shadow-2xl flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E2C48C] flex items-center gap-1.5 mb-3">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              Ваш персональный результат
            </span>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                <span className="text-[11px] text-[#cfc5b7] uppercase font-bold tracking-wider">
                  Экономия времени
                </span>
                <span className="font-serif text-[26px] font-bold text-[#E2C48C] mt-1">
                  ~{hoursSavedPerMonth} ч
                </span>
                <span className="text-[11px] text-[#cfc5b7]/80">в месяц для жизни</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                <span className="text-[11px] text-[#cfc5b7] uppercase font-bold tracking-wider">
                  Сбережение ФОТ
                </span>
                <span className="font-serif text-[24px] font-bold text-[#E2C48C] mt-1">
                  {monthlySavingsRub.toLocaleString('ru-RU')} ₽
                </span>
                <span className="text-[11px] text-[#cfc5b7]/80">без найма ассистентов</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#E2C48C]/15 border border-[#E2C48C]/30 flex flex-col gap-1 mb-5">
              <span className="text-[12px] text-[#E2C48C] font-extrabold uppercase tracking-wider">
                Срок полной окупаемости курса
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[34px] font-bold text-white leading-tight">
                  {paybackDays} дней
                </span>
                <span className="text-[13px] text-[#cfc5b7]">
                  (на тарифе «Максимум»)
                </span>
              </div>
              <p className="text-[12px] text-[#cfc5b7] mt-1 leading-snug">
                Остальное время — чистая прибыль и свободные часы каждый день.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEnroll}
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] font-bold text-[15px] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(216,172,99,0.4)] active:scale-98 transition-all"
          >
            <span>Занять место и окупить за {paybackDays} дней</span>
            <span className="material-symbols-outlined text-[18px]">bolt</span>
          </button>
        </div>
      </div>
    </section>
  );
};
