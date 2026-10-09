import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/courseData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [showInstallments, setShowInstallments] = useState(false);

  return (
    <section className="flex flex-col px-4 sm:px-6 py-12 bg-[#f4f3f1] border-y border-[#E2C48C]/25" id="tarify">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col mb-8 text-center items-center">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
            Варианты участия
          </span>
          <h2 className="font-serif text-[28px] sm:text-[38px] text-[#1A1A1A] font-semibold tracking-tight">
            Три тарифа — выбери свой город
          </h2>
          <p className="text-[15px] text-[#4e4539] mt-2 max-w-lg">
            Обучение доступно как в моно-формате (Claude или ChatGPT), так и в полном синхронном тандеме «Максимум».
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-[#d8ac63]/40 mt-6 shadow-sm">
            <button
              onClick={() => setShowInstallments(false)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${
                !showInstallments
                  ? 'bg-[#1A1A1A] text-white shadow-sm'
                  : 'text-[#655d52] hover:text-[#1A1A1A]'
              }`}
            >
              Единоразово
            </button>
            <button
              onClick={() => setShowInstallments(true)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-bold flex items-center gap-1.5 transition-all ${
                showInstallments
                  ? 'bg-[#1A1A1A] text-white shadow-sm'
                  : 'text-[#655d52] hover:text-[#1A1A1A]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B3874B]"></span>
              Рассрочка от 2 499 ₽/мес
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRICING_PLANS.map((plan) => {
            const isVip = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isVip
                    ? 'bg-[#1A1A1A] text-white shadow-[0_16px_40px_-4px_rgba(33,28,19,0.25)] border-2 border-[#C49A52] md:-translate-y-2'
                    : 'bg-white text-[#1A1A1A] border border-[#d8ac63]/30 shadow-md hover:shadow-xl hover:border-[#E2C48C]'
                }`}
              >
                {/* Popular Badge */}
                {isVip && (
                  <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl rounded-tr-xl bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    {plan.giftNote || 'Хит продаж'}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider ${isVip ? 'text-[#E2C48C]' : 'text-[#7b5817]'}`}>
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className={`font-serif text-[24px] sm:text-[26px] font-bold ${isVip ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {plan.name}
                  </h3>

                  <p className={`text-[13px] mt-1.5 mb-5 leading-relaxed ${isVip ? 'text-[#cfc5b7]' : 'text-[#524F49]'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    {showInstallments ? (
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className={`font-serif text-[28px] sm:text-[32px] font-bold ${isVip ? 'text-[#E2C48C]' : 'text-[#1A1A1A]'}`}>
                            {plan.installment.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className={`text-[13px] ${isVip ? 'text-[#cfc5b7]' : 'text-[#655d52]'}`}>
                            / мес
                          </span>
                        </div>
                        <span className={`text-[12px] font-semibold ${isVip ? 'text-[#EAD3A8]' : 'text-[#7b5817]'}`}>
                          Рассрочка 0-0-12 без банка и процентов
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className={`font-serif text-[28px] sm:text-[32px] font-bold ${isVip ? 'text-[#E2C48C]' : 'text-[#1A1A1A]'}`}>
                            {plan.price.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className={`text-[14px] line-through ${isVip ? 'text-[#807567]' : 'text-[#807567]'}`}>
                            {plan.originalPrice.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                        <span className={`text-[12px] font-semibold ${isVip ? 'text-[#EAD3A8]' : 'text-[#7b5817]'}`}>
                          или в рассрочку {plan.installment} ₽/мес
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-2.5 mb-6 pt-4 border-t border-current/15">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[13px] leading-snug">
                        <span 
                          className={`material-symbols-outlined text-[18px] shrink-0 ${isVip ? 'text-[#E2C48C]' : 'text-[#7b5817]'}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className={isVip ? 'text-[#faf9f7]' : 'text-[#4e4539]'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-[14px] active:scale-98 transition-all shadow-md ${
                      isVip
                        ? 'bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] hover:shadow-[0_8px_24px_rgba(216,172,99,0.5)]'
                        : 'bg-[#1A1A1A] text-white hover:bg-[#333]'
                    }`}
                  >
                    Приобрести за {plan.price.toLocaleString('ru-RU')} ₽
                  </button>
                  <p className={`text-center text-[11px] mt-2 ${isVip ? 'text-[#cfc5b7]' : 'text-[#807567]'}`}>
                    Бронь места 3 000 ₽ · Рассрочка без первого взноса
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
