import React, { useState } from 'react';

type ToolTab = 'reels' | 'vibecoding' | 'agent';

export const AiPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ToolTab>('reels');

  // Reels Generator State
  const [niche, setNiche] = useState('Онлайн-образование и коучинг');
  const [topic, setTopic] = useState('Как продавать на высокий чек без выгорания');
  const [tone, setTone] = useState('Провокационный и экспертный');
  const [copied, setCopied] = useState(false);

  // Vibe Coding State
  const [vibeTemplate, setVibeTemplate] = useState<'calculator' | 'quiz' | 'leadmagnet'>('calculator');
  const [calcClients, setCalcClients] = useState(5);
  const [calcPrice, setCalcPrice] = useState(30000);

  // Telegram Agent State
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string }>>([
    {
      sender: 'agent',
      text: 'Здравствуйте! Я автономный AI-ассистент выпускника Нейрополиса. Могу рассказать о тарифах, провести диагностику вашего блога или записать на персональный аудит. Чем могу помочь?',
      time: '12:00'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const newMessages = [...messages, { sender: 'user' as const, text: userText, time: '12:01' }];
    setMessages(newMessages);
    setInputMessage('');

    // Simulated Smart AI Agent Response
    setTimeout(() => {
      let reply = 'Отличный вопрос! Я зафиксировал ваш запрос в CRM-таблице эксперта.';
      const lower = userText.toLowerCase();

      if (lower.includes('цена') || lower.includes('стоим') || lower.includes('тариф')) {
        reply = 'Стоимость консультации эксперта — 25 000 ₽. Но для новых подписчиков действует специальный оффер: бесплатный 15-минутный разбор воронки. Удобно созвониться в этот четверг?';
      } else if (lower.includes('курс') || lower.includes('обуч') || lower.includes('нейро')) {
        reply = 'Мы обучаем связке Claude + ChatGPT в Нейрополисе. 6 модулей, 7 мини-курсов и запуск ваших личных агентов. Регистрация открыта до 12 октября!';
      } else if (lower.includes('запис') || lower.includes('время') || lower.includes('да')) {
        reply = 'Записал вас на разбор! Данные отправлены в Google Календарь эксперта, ссылка на Zoom придет за 1 час до встречи.';
      } else {
        reply = `Принял информацию: «${userText}». Я уже проанализировал ваш профиль через браузерное расширение Claude — у вас отличный потенциал для внедрения автопостинга и рилс-конвейера. Хотите пришлю пример сценария?`;
      }

      setMessages(prev => [...prev, { sender: 'agent', text: reply, time: '12:02' }]);
    }, 700);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatedScript = `🎬 ВИРАЛЬНЫЙ СЦЕНАРИЙ REELS (Генерация Claude 3.5 Sonnet)

ХУК 1 (Визуальный разрыв шаблона):
«Перестаньте продавать консультации по 5 000 ₽, если не хотите бросить профессию через 3 месяца.»

ХУК 2 (Интрига через цифры):
«Как одна таблица в ChatGPT сделала мне 531 000 ₽ за 2 дня без продюсера и бюджета на рекламу.»

РАСКАДРОВКА И ТАЙМИНГ:
00:00 - 00:03: Крупный план, прямой взгляд в камеру. Субтитр золотым цветом.
00:03 - 00:15: «Большинство экспертов тратят 20 часов в неделю на сторис, которые никто не покупает. Но если переложить упаковку на Claude...»
00:15 - 00:30: Демонстрация экрана смартфона с готовой воронкой. «Claude формирует оффер, прогрев и структуру мини-продукта за 4 минуты.»
00:30 - 00:45: Финал. Призыв к действию: «Напиши слово НЕЙРО в директ, и мой автономный агент пришлет тебе шаблон промпта!»`;

  return (
    <section className="flex flex-col px-4 sm:px-6 py-8 max-w-5xl mx-auto w-full">
      {/* Intro Header */}
      <div className="flex flex-col mb-8 text-center items-center">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
          Практический интерактив
        </span>
        <h1 className="font-serif text-[28px] sm:text-[38px] text-[#1A1A1A] font-semibold tracking-tight">
          AI Тест-драйв: попробуй навыки курса
        </h1>
        <p className="text-[15px] text-[#4e4539] mt-2 max-w-xl">
          Опробуйте три ключевые технологии, которые вы освоите на курсе: вирусные сценарии, вайбкодинг и автономного Telegram-агента.
        </p>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-[#d8ac63]/30 mt-6 shadow-sm">
          <button
            onClick={() => setActiveTab('reels')}
            className={`px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 transition-all ${
              activeTab === 'reels'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'text-[#655d52] hover:text-[#1A1A1A]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">movie_edit</span>
            <span>1. Reels Фабрика (Модуль 2)</span>
          </button>
          <button
            onClick={() => setActiveTab('vibecoding')}
            className={`px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 transition-all ${
              activeTab === 'vibecoding'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'text-[#655d52] hover:text-[#1A1A1A]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>2. Вайбкодинг (Модуль 4)</span>
          </button>
          <button
            onClick={() => setActiveTab('agent')}
            className={`px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 transition-all ${
              activeTab === 'agent'
                ? 'bg-[#1A1A1A] text-white shadow-sm'
                : 'text-[#655d52] hover:text-[#1A1A1A]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">smart_toy</span>
            <span>3. 24/7 Telegram-Агент (Модуль 3)</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Reels Factory */}
      {activeTab === 'reels' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-[#d8ac63]/30 shadow-md flex flex-col gap-4">
            <h3 className="font-serif text-[18px] font-bold text-[#1A1A1A]">
              Параметры генерации сценария
            </h3>

            <div>
              <label className="text-[12px] font-extrabold text-[#7b5817] uppercase tracking-wider block mb-1.5">
                Ниша / Экспертиза
              </label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#d2c4b4] bg-[#faf9f7] text-[14px] text-[#1A1A1A] font-medium focus:border-[#C49A52] focus:outline-none"
              >
                <option value="Онлайн-образование и коучинг">Онлайн-образование и коучинг</option>
                <option value="Психология и мышление">Психология и мышление</option>
                <option value="SMM и маркетинг">SMM и маркетинг</option>
                <option value="Здоровье и фитнес">Здоровье и фитнес</option>
                <option value="Недвижимость и инвестиции">Недвижимость и инвестиции</option>
              </select>
            </div>

            <div>
              <label className="text-[12px] font-extrabold text-[#7b5817] uppercase tracking-wider block mb-1.5">
                Тема будущего ролика
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#d2c4b4] bg-[#faf9f7] text-[14px] text-[#1A1A1A] font-medium focus:border-[#C49A52] focus:outline-none"
                placeholder="Например: Как привлекать клиентов через ИИ"
              />
            </div>

            <div>
              <label className="text-[12px] font-extrabold text-[#7b5817] uppercase tracking-wider block mb-1.5">
                Tone of Voice
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#d2c4b4] bg-[#faf9f7] text-[14px] text-[#1A1A1A] font-medium focus:border-[#C49A52] focus:outline-none"
              >
                <option value="Провокационный и экспертный">Провокационный и экспертный</option>
                <option value="Мягкий и доверительный">Мягкий и доверительный</option>
                <option value="Лаконичный и структурный">Лаконичный и структурный</option>
                <option value="Сторителлинг от первого лица">Сторителлинг от первого лица</option>
              </select>
            </div>

            <div className="p-3.5 rounded-xl bg-[#E2C48C]/15 border border-[#E2C48C]/40 text-[12px] text-[#564216] leading-relaxed">
              💡 На курсе вы настроите 6 таких ассистентов, которые знают всю вашу базу знаний и пишут точно вашим стилем.
            </div>
          </div>

          {/* Generated Result */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-[#1A1A1A] text-white border border-[#C49A52]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E2C48C] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E2C48C] animate-pulse"></span>
                  Результат генерации Claude 3.5
                </span>

                <button
                  onClick={() => copyToClipboard(generatedScript)}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[12px] font-bold text-white flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Скопировано!' : 'Копировать'}</span>
                </button>
              </div>

              <pre className="font-mono text-[13px] text-[#cfc5b7] whitespace-pre-wrap leading-relaxed select-text">
                {generatedScript}
              </pre>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] text-[#cfc5b7]">
              <span>Время генерации: 1.4 сек</span>
              <span className="text-[#E2C48C] font-semibold">Готово к публикации</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Vibe Coding Sandbox */}
      {activeTab === 'vibecoding' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-[#d8ac63]/30 shadow-md flex flex-col gap-4">
            <h3 className="font-serif text-[18px] font-bold text-[#1A1A1A]">
              Что такое Вайбкодинг?
            </h3>
            <p className="text-[13px] text-[#4e4539] leading-relaxed">
              Вы просто описываете задачу на русском языке, а Claude Artifacts собирает работающее веб-приложение или сайт за считанные секунды. Без программистов.
            </p>

            <span className="text-[12px] font-extrabold text-[#7b5817] uppercase tracking-wider block mt-2">
              Выберите прототип для сборки:
            </span>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setVibeTemplate('calculator')}
                className={`p-3 rounded-xl text-left text-[13px] font-bold flex items-center justify-between border transition-all ${
                  vibeTemplate === 'calculator'
                    ? 'bg-[#E2C48C]/20 border-[#C49A52] text-[#1A1A1A]'
                    : 'bg-[#faf9f7] border-[#d2c4b4]/30 text-[#524F49] hover:bg-white'
                }`}
              >
                <span>1. Калькулятор потенциала блога</span>
                <span className="material-symbols-outlined text-[18px]">calculate</span>
              </button>
              <button
                onClick={() => setVibeTemplate('quiz')}
                className={`p-3 rounded-xl text-left text-[13px] font-bold flex items-center justify-between border transition-all ${
                  vibeTemplate === 'quiz'
                    ? 'bg-[#E2C48C]/20 border-[#C49A52] text-[#1A1A1A]'
                    : 'bg-[#faf9f7] border-[#d2c4b4]/30 text-[#524F49] hover:bg-white'
                }`}
              >
                <span>2. Telegram Mini App викторина</span>
                <span className="material-symbols-outlined text-[18px]">quiz</span>
              </button>
              <button
                onClick={() => setVibeTemplate('leadmagnet')}
                className={`p-3 rounded-xl text-left text-[13px] font-bold flex items-center justify-between border transition-all ${
                  vibeTemplate === 'leadmagnet'
                    ? 'bg-[#E2C48C]/20 border-[#C49A52] text-[#1A1A1A]'
                    : 'bg-[#faf9f7] border-[#d2c4b4]/30 text-[#524F49] hover:bg-white'
                }`}
              >
                <span>3. Страница захвата лидов</span>
                <span className="material-symbols-outlined text-[18px]">view_quilt</span>
              </button>
            </div>
          </div>

          {/* Interactive Live Mini-App Frame */}
          <div className="lg:col-span-7 rounded-3xl bg-white border-2 border-[#C49A52] shadow-xl overflow-hidden flex flex-col">
            {/* Browser Window Header */}
            <div className="px-4 py-2.5 bg-[#1A1A1A] text-white flex items-center justify-between text-[12px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                <span className="ml-2 font-mono text-[11px] text-[#cfc5b7]">
                  app.vibe-prototype.site
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#C49A52] text-[#1A1A1A] text-[10px] font-bold uppercase">
                Живой прототип
              </span>
            </div>

            {/* Live Interactive Prototype Content */}
            <div className="p-6 bg-[#faf9f7] flex-1 flex flex-col justify-center">
              {vibeTemplate === 'calculator' && (
                <div className="p-5 rounded-2xl bg-white border border-[#E2C48C]/40 shadow-sm flex flex-col gap-4">
                  <h4 className="font-serif text-[18px] font-bold text-[#1A1A1A]">
                    Калькулятор окупаемости внедрения ИИ
                  </h4>

                  <div>
                    <div className="flex justify-between text-[13px] font-bold mb-1">
                      <span>Количество клиентов в месяц:</span>
                      <span className="text-[#7b5817] font-serif text-[16px]">{calcClients} чел.</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={calcClients}
                      onChange={(e) => setCalcClients(Number(e.target.value))}
                      className="w-full accent-[#C49A52]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[13px] font-bold mb-1">
                      <span>Средний чек услуги:</span>
                      <span className="text-[#7b5817] font-serif text-[16px]">{calcPrice.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="5000"
                      value={calcPrice}
                      onChange={(e) => setCalcPrice(Number(e.target.value))}
                      className="w-full accent-[#C49A52]"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-[#E2C48C]/20 border border-[#E2C48C] flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#1A1A1A]">Расчетная выручка с ИИ:</span>
                    <span className="font-serif text-[20px] font-bold text-[#7b5817]">
                      {(calcClients * calcPrice * 1.4).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <span className="text-[11px] text-[#655d52] italic text-center">
                    *Включает рост конверсии на 40% за счет мгновенных автоответов ИИ-агента.
                  </span>
                </div>
              )}

              {vibeTemplate === 'quiz' && (
                <div className="p-5 rounded-2xl bg-white border border-[#E2C48C]/40 shadow-sm flex flex-col gap-3 text-center">
                  <span className="text-[10px] font-extrabold uppercase text-[#7b5817] tracking-widest">
                    Telegram Mini App
                  </span>
                  <h4 className="font-serif text-[18px] font-bold text-[#1A1A1A]">
                    Тест: Готов ли твой блог к полной автоматизации?
                  </h4>
                  <p className="text-[13px] text-[#4e4539]">
                    Ответьте на 3 вопроса и получите персонализированную карту промптов для вашей ниши.
                  </p>
                  <div className="flex flex-col gap-2 mt-2">
                    <button className="py-2.5 px-4 rounded-xl bg-[#f4f3f1] hover:bg-[#E2C48C]/25 text-[13px] font-bold text-[#1A1A1A] text-left transition-colors">
                      А) Публикую посты вручную раз в неделю
                    </button>
                    <button className="py-2.5 px-4 rounded-xl bg-[#f4f3f1] hover:bg-[#E2C48C]/25 text-[13px] font-bold text-[#1A1A1A] text-left transition-colors">
                      Б) Есть ассистент, но уходит много времени на контроль
                    </button>
                    <button className="py-2.5 px-4 rounded-xl bg-[#f4f3f1] hover:bg-[#E2C48C]/25 text-[13px] font-bold text-[#1A1A1A] text-left transition-colors">
                      В) Хочу полностью оцифровать рутину в ИИ
                    </button>
                  </div>
                </div>
              )}

              {vibeTemplate === 'leadmagnet' && (
                <div className="p-5 rounded-2xl bg-white border border-[#E2C48C]/40 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E2C48C]/20 flex items-center justify-center text-[#7b5817] font-bold">
                    ✦
                  </div>
                  <h4 className="font-serif text-[18px] font-bold text-[#1A1A1A]">
                    Гайд: «10 промптов для Claude, заменяющих маркетолога»
                  </h4>
                  <p className="text-[13px] text-[#4e4539]">
                    Оставьте контакт, и бот отправит секретный PDF в течение 5 секунд.
                  </p>
                  <input
                    type="text"
                    placeholder="@username в Telegram"
                    className="p-2.5 rounded-xl border border-[#d2c4b4] text-[13px]"
                  />
                  <button className="py-2.5 rounded-full bg-[#1A1A1A] text-white text-[13px] font-bold hover:bg-[#333]">
                    Получить гайд бесплатно
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Autonomous Telegram Agent */}
      {activeTab === 'agent' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Info */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-[#d8ac63]/30 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7b5817] mb-1">
                Модуль 3: Квартал Агентов
              </span>
              <h3 className="font-serif text-[20px] font-bold text-[#1A1A1A]">
                Сотрудник, который никогда не спит
              </h3>
              <p className="text-[13px] text-[#4e4539] mt-2 leading-relaxed">
                В Квартале Агентов вы соберете бота в Telegram, который подключен к Claude. Он общается как человек, помнит контекст диалога, знает ваши цены и регламенты, а также заносит заявки в таблицы.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-[#f4f3f1] border border-[#d2c4b4]/20 flex flex-col gap-1.5 text-[12px] text-[#1A1A1A]">
                <div className="flex items-center gap-2 font-bold text-[#7b5817]">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Быстрые темы для теста в чате:</span>
                </div>
                <span>• Напишите: «Сколько стоит обучение?»</span>
                <span>• Напишите: «Хочу записаться на консультацию»</span>
                <span>• Напишите: «Что входит в курс?»</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#f4f3f1] text-[11px] text-[#807567]">
              Настоящий агент будет развернут на вашем личном Telegram-боте без абонентской платы.
            </div>
          </div>

          {/* Telegram Chat Mockup */}
          <div className="lg:col-span-7 rounded-3xl bg-[#faf9f7] border-2 border-[#C49A52] shadow-xl overflow-hidden flex flex-col h-[460px]">
            {/* Telegram Header */}
            <div className="p-3.5 bg-[#1A1A1A] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#EAD3A8] to-[#C49A52] flex items-center justify-center text-[#1A1A1A] font-bold text-[14px]">
                  🤖
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white leading-tight">
                    NeuroPolis Assistant [AI Bot]
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium">в сети (отвечает мгновенно)</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#cfc5b7]">more_vert</span>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#1A1A1A] text-white self-end rounded-br-xs'
                      : 'bg-white text-[#1A1A1A] border border-[#d8ac63]/30 shadow-xs self-start rounded-bl-xs'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className={`text-[10px] block mt-1 text-right ${m.sender === 'user' ? 'text-white/60' : 'text-[#807567]'}`}>
                    {m.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#d2c4b4]/30 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Задайте вопрос агенту (например: Сколько стоит?)..."
                className="flex-1 p-2.5 rounded-xl border border-[#d2c4b4] text-[13px] focus:outline-none focus:border-[#C49A52]"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#EAD3A8] to-[#C49A52] text-[#1A1A1A] flex items-center justify-center hover:scale-105 active:scale-95 transition-all shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
