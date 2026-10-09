import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/courseData';
import { PricingPlan } from '../types';

interface EnrollmentModalProps {
  initialPlan?: PricingPlan | null;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ initialPlan, onClose }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlan ? initialPlan.id : 'maximum');
  const [paymentType, setPaymentType] = useState<'full' | 'installment' | 'deposit'>('full');
  
  // Form fields
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Promo code
  const [promoCode, setPromoCode] = useState('');
  const [discountRub, setDiscountRub] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  // Confirmation state
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedPlan = PRICING_PLANS.find(p => p.id === selectedPlanId) || PRICING_PLANS[2];

  const handleApplyPromo = () => {
    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === 'NEURO5' || cleanCode === 'VIP2026' || cleanCode === 'JULIA') {
      setDiscountRub(2000);
      setPromoMessage('Промокод применен: скидка 2 000 ₽!');
    } else if (cleanCode) {
      setPromoMessage('Неверный промокод (попробуйте NEURO5)');
      setDiscountRub(0);
    }
  };

  const finalPrice = Math.max(0, selectedPlan.price - discountRub);
  const finalInstallment = Math.round(finalPrice / 12);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-[#d8ac63]/40 shadow-2xl p-6 sm:p-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f4f3f1] hover:bg-[#E2C48C]/30 text-[#1A1A1A] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="flex flex-col mb-5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
                Оформление участия · 5-й поток
              </span>
              <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-[#1A1A1A] leading-tight">
                Занять место в Нейрополисе
              </h2>
              <p className="text-[13px] text-[#655d52] mt-1">
                Старт юбилейного потока — 12 октября. Доступ к материалам до апреля 2027 г.
              </p>
            </div>

            {/* Plan Selector */}
            <div className="flex flex-col gap-2 mb-5">
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#7b5817]">
                Выберите тариф:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PRICING_PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-3 rounded-2xl flex flex-col text-left transition-all border ${
                      selectedPlanId === plan.id
                        ? 'bg-[#1A1A1A] text-white border-[#C49A52] shadow-md ring-2 ring-[#E2C48C]/40'
                        : 'bg-[#faf9f7] text-[#1A1A1A] border-[#d2c4b4]/40 hover:bg-white'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase opacity-80">{plan.name}</span>
                    <span className="font-serif text-[16px] font-bold mt-1">
                      {plan.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Type Tabs */}
            <div className="flex flex-col gap-2 mb-5">
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#7b5817]">
                Формат оплаты:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentType('full')}
                  className={`p-2.5 rounded-xl text-[12px] font-bold text-center border transition-all ${
                    paymentType === 'full'
                      ? 'bg-[#E2C48C]/30 border-[#C49A52] text-[#1A1A1A]'
                      : 'bg-[#faf9f7] border-[#d2c4b4]/30 text-[#655d52]'
                  }`}
                >
                  Полная оплата
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('installment')}
                  className={`p-2.5 rounded-xl text-[12px] font-bold text-center border transition-all ${
                    paymentType === 'installment'
                      ? 'bg-[#E2C48C]/30 border-[#C49A52] text-[#1A1A1A]'
                      : 'bg-[#faf9f7] border-[#d2c4b4]/30 text-[#655d52]'
                  }`}
                >
                  Рассрочка 0-0-12
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('deposit')}
                  className={`p-2.5 rounded-xl text-[12px] font-bold text-center border transition-all ${
                    paymentType === 'deposit'
                      ? 'bg-[#E2C48C]/30 border-[#C49A52] text-[#1A1A1A]'
                      : 'bg-[#faf9f7] border-[#d2c4b4]/30 text-[#655d52]'
                  }`}
                >
                  Бронь 3 000 ₽
                </button>
              </div>
            </div>

            {/* Promo code */}
            <div className="flex items-center gap-2 mb-5">
              <input
                type="text"
                placeholder="Промокод (введите NEURO5)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 p-2.5 rounded-xl border border-[#d2c4b4] text-[13px] uppercase font-mono tracking-wider focus:outline-none focus:border-[#C49A52]"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="py-2.5 px-4 rounded-xl bg-[#f4f3f1] hover:bg-[#E2C48C]/25 text-[12px] font-bold text-[#1A1A1A] transition-colors shrink-0"
              >
                Применить
              </button>
            </div>
            {promoMessage && (
              <p className={`text-[12px] font-medium -mt-3 mb-4 ${discountRub > 0 ? 'text-emerald-700' : 'text-amber-700'}`}>
                {promoMessage}
              </p>
            )}

            {/* Total summary */}
            <div className="p-4 rounded-2xl bg-[#faf9f7] border border-[#d8ac63]/30 mb-5 flex items-center justify-between">
              <div>
                <span className="text-[12px] text-[#655d52] font-semibold block">Итого к оплате:</span>
                <span className="font-serif text-[24px] sm:text-[28px] font-bold text-[#7b5817]">
                  {paymentType === 'deposit'
                    ? '3 000 ₽'
                    : paymentType === 'installment'
                    ? `${finalInstallment.toLocaleString('ru-RU')} ₽ / мес`
                    : `${finalPrice.toLocaleString('ru-RU')} ₽`}
                </span>
              </div>
              <span className="text-[11px] text-[#807567] text-right font-medium">
                {paymentType === 'deposit'
                  ? 'Остаток вносится до 12 октября'
                  : 'Без переплат и скрытых комиссий'}
              </span>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-[12px] font-bold text-[#1A1A1A] block mb-1">
                  Ваше имя и фамилия *
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Юлия Голыгина"
                  className="w-full p-2.5 rounded-xl border border-[#d2c4b4] text-[14px] focus:outline-none focus:border-[#C49A52]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[12px] font-bold text-[#1A1A1A] block mb-1">
                    Телефон *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full p-2.5 rounded-xl border border-[#d2c4b4] text-[14px] focus:outline-none focus:border-[#C49A52]"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-[#1A1A1A] block mb-1">
                    Telegram (@username)
                  </label>
                  <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder="@your_telegram"
                    className="w-full p-2.5 rounded-xl border border-[#d2c4b4] text-[14px] focus:outline-none focus:border-[#C49A52]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[12px] font-bold text-[#1A1A1A] block mb-1">
                  Email для доступа к платформе
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full p-2.5 rounded-xl border border-[#d2c4b4] text-[14px] focus:outline-none focus:border-[#C49A52]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] font-bold text-[15px] shadow-[0_8px_24px_rgba(216,172,99,0.4)] active:scale-98 transition-all mt-3"
              >
                Подтвердить участие в 5-м потоке
              </button>

              <span className="text-[10px] text-center text-[#807567] mt-1">
                Нажимая кнопку, вы соглашаетесь с договором публичной оферты и политикой обработки данных.
              </span>
            </form>
          </div>
        ) : (
          /* Confirmation Success Ticket */
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] flex items-center justify-center shadow-lg mb-4">
              <span className="material-symbols-outlined text-[36px]">check</span>
            </div>

            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817]">
              Билет подтвержден
            </span>
            <h3 className="font-serif text-[26px] sm:text-[32px] font-bold text-[#1A1A1A] mt-1 mb-2">
              Добро пожаловать в Нейрополис!
            </h3>
            <p className="text-[14px] text-[#4e4539] max-w-md leading-relaxed mb-6">
              Поздравляем, {name}! Ваше место на тарифе <strong>«{selectedPlan.name}»</strong> успешно забронировано.
            </p>

            {/* Virtual Student Card */}
            <div className="w-full max-w-md p-5 rounded-2xl bg-[#1A1A1A] text-white border border-[#C49A52] shadow-xl text-left mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <span className="font-serif text-[16px] font-bold text-[#E2C48C]">NEUROPOLIS PASS</span>
                <span className="text-[11px] font-mono text-[#cfc5b7]">ID: #NP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12px] mb-3">
                <div>
                  <span className="text-[#cfc5b7] block">Студент:</span>
                  <span className="font-bold text-white">{name}</span>
                </div>
                <div>
                  <span className="text-[#cfc5b7] block">Тариф:</span>
                  <span className="font-bold text-[#E2C48C]">{selectedPlan.name}</span>
                </div>
                <div>
                  <span className="text-[#cfc5b7] block">Старт:</span>
                  <span className="font-bold text-white">12 октября 2026</span>
                </div>
                <div>
                  <span className="text-[#cfc5b7] block">Модули:</span>
                  <span className="font-bold text-white">Все 6 районов + 7 курсов</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 text-[11px] text-[#cfc5b7] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">verified</span>
                <span>Доступ к чату и материалам отправлен в Telegram</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="py-3 px-8 rounded-full bg-[#1A1A1A] text-white font-bold text-[14px] hover:bg-[#333] transition-colors"
            >
              Вернуться на главную
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
