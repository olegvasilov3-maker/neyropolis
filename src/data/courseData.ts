import { CourseModule, PricingPlan, StudentCase, FaqItem } from '../types';

export const AUTHOR_IMAGE = 'https://lh3.googleusercontent.com/aida/AEtjO1V8uHAqGPD6HKyg3d7t40uU1DAkvLNq_mIRYP--GuQhBODGk4L1hTvlwT535Er0dePWZrGLgk_W_lM2Is10OX07rk4xOzi-UlRisJPwwRfOgCEUYoCYSHk2-QBZg1jMSePBUoSFCI6BZBLvqsWPIk80TN1v4VFdH6XHalzcnMix0iKoPC3AEvgGMGAULqU6QY3BWx9ecmAmqw3plv7x7OYFzYYtA87CwvR_WjiukzKvHn7Db0PEe_90BBI';

export const MODULES: CourseModule[] = [
  {
    id: 'module-0',
    number: 'Старт',
    title: 'Космопорт',
    subtitle: 'Рабочий Claude и ChatGPT с нуля',
    dateBadge: 'Доступен сразу после оплаты',
    description: 'Регистрация и безопасная оплата подписок из любой точки мира, установка на телефон и компьютер, персональные коннекторы и скилы без риска блокировок.',
    outcome: 'Итог: рабочие ИИ на телефоне и ПК в первый же вечер',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1USuRd_DXIVvmJk5ok0qLj1Eyf9VtTlGZ70OdwtNv5134vNbOBIpcpdb9h9d-7MKGoeU5B_ijwo3c9rWmBiV_HO7C-1eo8Hj5JUfbDkZn_UeYX0Cf-V1Drv1UOcBwrEE7yLE-hrL74BvfZHJVVlxUmgGMNWcfteYNM3_aiKiPjMuoL4MeErWkM7cZlfQTCACf7nvuBd8tWcUJxSwEXL5FpDX6SsaS8tg34sg1ZjNH9p6gPkuuJSqwylgycF',
    animClass: 'anim-float-1',
    lessons: [
      'Урок 0.1: Регистрация в Anthropic Claude и OpenAI без риска бана',
      'Урок 0.2: Оплата зарубежных подписок российскими картами за 5 минут',
      'Урок 0.3: Настройка мобильных приложений для iPhone и Android',
      'Урок 0.4: Анатомия идеального промпта: системные инструкции и контекст'
    ],
    tools: ['Claude 3.5 Sonnet', 'ChatGPT Plus', 'Artifacts', 'Custom Instructions'],
    homework: 'Настроить мобильное приложение, отправить эталонный промпт-распаковку и получить индивидуальный рабочий профиль.'
  },
  {
    id: 'module-1',
    number: 'Модуль 1',
    title: 'Центр управления',
    subtitle: 'Твой личный SMM-маркетолог',
    dateBadge: 'Открытие 12 октября',
    description: 'Глубокий анализ блога, целевой аудитории и конкурентов. Распаковка твоих уникальных сильных сторон, виральные сценарии и расширение в браузере для работы на любых сайтах.',
    outcome: 'Итог: ИИ разбирает блог по косточкам и выполняет задачи в сети',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UM1hVVcn5gAf4uS_MpNN-AnVh5amKT_07Eurhd5n1ooWCHqpFKgrdVvYE4SQN5PjUnIC_lRmnt7baKyyhIAJTAL5RxCdWfjmEbmIsCJICXYOIY0rWnQ2fwetmHjdIO1fbQVO1T2TFwx0OcV8W6b36D3QwqNpAcYv2feHJnERI0OwOrYAMXorW8khKjniu6GcPrmqFpvriKkD2jFLLVHdy7ljz-3jFxKVlVarQF18e95pDyk_LxblOid9_Q',
    animClass: 'anim-float-2',
    lessons: [
      'Урок 1.1: Аудит контент-стратегии: скоринг текущих постов через ИИ',
      'Урок 1.2: Распаковка экспертности и оцифровка личного Tone of Voice',
      'Урок 1.3: Шпионаж за конкурентами: парсинг и выявление топ-виральных тем',
      'Урок 1.4: Браузерный ассистент для автоматического анализа страниц'
    ],
    tools: ['Claude Projects', 'Custom GPTs', 'Web Research', 'Knowledge Base'],
    homework: 'Сформировать «Досье эксперта» в Claude Projects и составить контент-план с прогнозом виральности на месяц.'
  },
  {
    id: 'module-2',
    number: 'Модуль 2',
    title: 'Медиа-квартал',
    subtitle: 'Собираешь контент-завод',
    dateBadge: 'Открытие 14 октября',
    description: 'Сценарии Reels, цепляющие тексты постов, карусели, фотосессии и видеомонтаж роликов. Шесть готовых ассистентов для ведения блога в твоем авторском стиле.',
    outcome: 'Итог: автоматизированный выпуск вирусного контента и визуала',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X2Ifrk-sP22_VFhbvGeDl8FXf5gXb49Qd4n47k48jHmZf0SYw2XuN_vtlbZxJgPZN6ESCgw6dVZHB2cfKUq1LytVd0ivFK89b45UhBnkaUmp0QRPGGaa25-v-_gIdLOR9hGb0UjwcTTEiskjwMhwZWm9Khj-et3JWJrxoodjZlfgCraCHnnw3R5TirIHdZMUsOrnGpWAAoyn-tjBb8Dla_Ub6F0NjPeE2t-5e90aA5jHco4f2ORaCup-I',
    animClass: 'anim-float-3',
    lessons: [
      'Урок 2.1: Формулы вирусных хуков для Reels и Shorts (удержание от 70%)',
      'Урок 2.2: Генерация авторских фотосессий в Midjourney & Flux в твоем лице',
      'Урок 2.3: Сборка дизайнерских каруселей без Photoshop в 1 клик',
      'Урок 2.4: Нейромонтаж: клонирование голоса и говорящие реалистичные аватары'
    ],
    tools: ['Flux.1', 'Midjourney v6.1', 'HeyGen', 'CapCut AI', 'ElevenLabs'],
    homework: 'Сгенерировать 3 сценария рилс с раскадровкой, 5 брендовых ассетов и готовую карусель в Telegram-канале.'
  },
  {
    id: 'module-3',
    number: 'Модуль 3',
    title: 'Квартал Агентов',
    subtitle: 'ИИ работают сами 24/7',
    dateBadge: 'Открытие 19 октября',
    description: 'Создание автономного агента, живущего в Telegram: постинг в каналы, генерация задач, квалификация лидов, автоответы и управление рутиной без твоего участия.',
    outcome: 'Итог: автономный цифровой сотрудник на связи круглосуточно',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XGrAIUrx4LWYQ815N85CtJ_Zd1c2qpun3hQVpcLDw9yOHjCxQueo08fS2SLRm0M_VYJPjmR6N1k1jEubCJOdK-f8-umGWbtPgXDI0viJW7hn0ki0EhG3AkIPM5sHrtnsY4bY5isq9fGdjARyyMoaoH2nINEBCJJ16PlongvmC1vXabVxIyeBfLZwW20m0XXfpZr41Z5BXwZ3dcSxTEk64xtG6bFcBEsjjW5BuCkmvzeArfzXZ7EiabQ36_',
    animClass: 'anim-float-4',
    lessons: [
      'Урок 3.1: Архитектура ИИ-агентов: память, инструменты и правила решений',
      'Урок 3.2: Создание бота в Telegram через BotFather и привязка к ИИ',
      'Урок 3.3: Автоматический кросспостинг и мониторинг комментариев',
      'Урок 3.4: Лидогенератор: агент-продажник с закрытием на созвон в Google Calendar'
    ],
    tools: ['Make / n8n', 'Telegram Bot API', 'Claude API', 'Google Sheets'],
    homework: 'Запустить личного Telegram-ассистента, который отвечает клиентам по скрипту и записывает контакты в таблицу.'
  },
  {
    id: 'module-4',
    number: 'Модуль 4',
    title: 'Башня Архитекторов',
    subtitle: 'Вайбкодинг: продукты без кода',
    dateBadge: 'Открытие 26 октября',
    description: 'Создание полноценных сайтов, интернет-магазинов, калькуляторов и Telegram Mini App приложений простыми голосовыми или текстовыми запросами без знания программирования.',
    outcome: 'Итог: готовый сайт и рабочее интерактивное мини-приложение',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UjU13SjVICmtdRhP105ctppM09FHIgJQG01jEQS-KWAlQ4c5eGnqG_sdqkiFaRHyewrdSdQJJKlGtxn4UiJwtFGJTm9ZUKcGmYP6Hwt9eKTm6dKSrCSlGT53gQwRujlaDNme4wdc1z3n4Fv05ETvj1Vc9iQ8bKqpJL-YLCSRJJTRdOr3BgYpGB2nfpW83lDLB-f8YEJhhuWUk8nIlO9m2RrGrx1f8K3kgBGn1COB7fSpS6L7Sa59xq1O9d',
    animClass: 'anim-float-5',
    lessons: [
      'Урок 4.1: Что такое Вайбкодинг: создание продуктов на чистом естественном языке',
      'Урок 4.2: Сборка продающего лендинга в Claude Artifacts за 20 минут',
      'Урок 4.3: Публикация сайта на бесплатный домен с подключением формы заявок',
      'Урок 4.4: Разработка Telegram Mini App: интерактивный квиз и витрина курсов'
    ],
    tools: ['Claude Artifacts', 'Cursor / Bolt.new', 'Vercel', 'Telegram WebApp'],
    homework: 'Собрать свой лендинг-портфолио или квиз-лидмагнит и выкатить его в интернет с активной ссылкой.'
  },
  {
    id: 'module-5',
    number: 'Модуль 5',
    title: 'Монетный двор',
    subtitle: 'Монетизация и продажи',
    dateBadge: 'Новый модуль · 26 октября',
    description: 'Упаковка услуг на базе ИИ, поиск платежеспособных клиентов, создание высококонверсионной воронки продаж и конвертация полученных навыков в осязаемый стабильный доход.',
    outcome: 'Итог: упакованный оффер и план привлечения первых оплат',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UBbt6k2_zRG8z1NeKJ8RO0E4KxE2RYoaP0t6UGoHE2yf33_jsEdylmbyhILqSHUQMm6klAf-83GTrNUkAETxf8RIqaO_WV8o6y5YdAA2-jYXRXl2Y2tr8G81nvty5dPCpzZ3CvFHnowBpJgdqL0V0J1y_lIMgyGV8Oklj6BosNSBjroPBQ8GsZAuUS9qux_EsRT1WhZ1qBBlAmR_t7k6B-ywUz9lAf1bFU80iHHAx92daS6sUK9snfB_I',
    animClass: 'anim-float-6',
    lessons: [
      'Урок 5.1: 5 моделей монетизации нейросетей: от услуг под ключ до инфопродуктов',
      'Урок 5.2: Пакет «ИИ-директор для бизнеса»: продажа внедрения от 100 000 ₽',
      'Урок 5.3: Автоматизированная воронка продаж через бесплатный ИИ-аудит',
      'Урок 5.4: Переговоры и юридическое оформление договоров на ИИ-разработку'
    ],
    tools: ['Sales Framework', 'CRM integration', 'AI Audit Template', 'Offer Builder'],
    homework: 'Оформить презентацию коммерческого предложения на внедрение ИИ и отправить его 5 потенциальным заказчикам.'
  },
  {
    id: 'bonus-library',
    number: 'Бонус',
    title: '7 мини-курсов',
    subtitle: 'Библиотека прикладных навыков',
    dateBadge: 'Подарок к юбилейному потоку',
    description: 'Комплексный арсенал прикладных навыков: видео-аватары HeyGen, SyntxAI, умные воронки и чат-боты, Claude Дизайн, умный автопостинг и сборка обучающей платформы.',
    outcome: 'Итог: 7 готовых специализаций для вас или вашей команды',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1Uo5S1kEZCoH7BxHxYQY5DHKX1k6H1eqqBjaTPtHu1SjN4uOQHBs_sHcf57io2l1Zc6Awsz-nS9A3hqGykTlftyKdy21Lsnkiz23wDWmGlH0nbswkmSpbiYKKGGSnjlX3dvcpBkLSgnux0HmaNZuewfHMt71T1Ct0sr4Ji3EOetnHPW_-h_-u7j8rT65TdNgmpNgH8o6Uf0pDN8TIUCwbo3nO7vXQ6RVE1wgN4LHWzFG8Q7s_iMakfCYcZe',
    animClass: 'anim-float-7',
    lessons: [
      'Мини-курс 1: Видео-аватары HeyGen: генерация контента без съемок',
      'Мини-курс 2: SyntxAI: генерация фотореалистичных моделей',
      'Мини-курс 3: Воронки и боты в SaleBot и BotHelp',
      'Мини-курс 4: Claude Дизайн: эстетика баннеров и полиграфии',
      'Мини-курс 5: Автопостинг во все соцсети по расписанию',
      'Мини-курс 6: Создание закрытой обучающей базы знаний',
      'Мини-курс 7: Юридическая безопасность и защита авторских прав на ИИ-контент'
    ],
    tools: ['HeyGen', 'SyntxAI', 'Midjourney', 'SaleBot', 'Notion AI'],
    homework: 'Активировать доступ ко всем 7 курсам в личном кабинете платформы.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'claude',
    name: 'Claude',
    badge: 'Город Claude',
    description: 'Весь Нейрополис в экосистеме Claude: модули, агенты, вайбкодинг — с экспертной поддержкой.',
    price: 23990,
    originalPrice: 40000,
    installment: 2499,
    features: [
      'Стартовый модуль «Космопорт» + Модули 1–5 на Claude',
      'Бонус: 7 мини-курсов в подарок',
      'Именной сертификат в финале курса',
      'Доступ ко всем материалам до 12 апреля 2027',
      'Обратная связь в чате с куратором + живые зум-разборы'
    ]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    badge: 'Город ChatGPT',
    description: 'Тот же маршрут в городе-близнеце: модули, агенты, вайбкодинг — на базе ChatGPT.',
    price: 23990,
    originalPrice: 40000,
    installment: 2499,
    features: [
      'Стартовый модуль + Модули 1–5 на ChatGPT',
      'Бонус: 7 мини-курсов в подарок',
      'Именной сертификат в финале курса',
      'Доступ ко всем материалам до 12 апреля 2027',
      'Чат с кураторами, живые разборы и разбор ДЗ'
    ]
  },
  {
    id: 'maximum',
    name: 'Максимум',
    badge: 'Оба города · Хит',
    description: 'Claude + ChatGPT: два города, вся программа, все инструменты без каких-либо ограничений.',
    price: 31990,
    originalPrice: 60000,
    installment: 3499,
    isPopular: true,
    giftNote: 'Выгода 15 990 ₽ · Выбор 78% учеников',
    features: [
      'Вся программа и в Claude, и в ChatGPT одновременно',
      '+ Библиотека знаний: 7 программ, 23 закрытых урока',
      'Бонус: 7 мини-курсов в подарок',
      'Именной диплом-сертификат в финале с печатью',
      'Доступ к материалам до 12 апреля 2027',
      'Приоритетная поддержка кураторов в VIP-чате'
    ]
  }
];

export const STUDENT_CASES: StudentCase[] = [
  {
    id: 'katerina',
    studentName: 'Катерина Холодова',
    role: 'Репетитор по математике & Эксперт',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WbHiZUqF-ZWzDO8PbsU8YQdUvZRL6syLqQPJkAMWykK0l6CoCNdxjxLiY3Usa4AZY2KDqjXbQD2C-fFUoXVM2Qd5waJOW2g9HmymXaS2dEUwKKakVoEhwaXYdxLxnXUBiqBtHcCwjAbUT8vu-DIdWZBko4soJnKdOdWE7r688v53dXysL-Wz424rwkKI4T6qzXXQG3qCRvAvUae_kBoz76DiBMRP81OWjR3qVHQfJ80ewZy_GwwN98o9WN',
    salesCount: 24,
    revenueRub: 531951,
    timeframe: 'за 2 дня',
    story: '28 июля Claude помог Катерине сформулировать концепцию и продающий оффер нового экспресс-продукта. Она обновила презентацию, а 2 августа провела закрытый эфир. Вместо обычных 1–2 оплат — рекордные продажи!',
    quote: '«Клод меня просто поразил: не просто подсказал тему, а помог с оффером, сценарием эфира и таргетом!»',
    niche: 'Онлайн-образование'
  },
  {
    id: 'alexander',
    studentName: 'Александр Власов',
    role: 'Основатель SMM-агентства',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1V8uHAqGPD6HKyg3d7t40uU1DAkvLNq_mIRYP--GuQhBODGk4L1hTvlwT535Er0dePWZrGLgk_W_lM2Is10OX07rk4xOzi-UlRisJPwwRfOgCEUYoCYSHk2-QBZg1jMSePBUoSFCI6BZBLvqsWPIk80TN1v4VFdH6XHalzcnMix0iKoPC3AEvgGMGAULqU6QY3BWx9ecmAmqw3plv7x7OYFzYYtA87CwvR_WjiukzKvHn7Db0PEe_90BBI',
    salesCount: 12,
    revenueRub: 780000,
    timeframe: 'за 3 недели',
    story: 'Внедрили автономных Telegram-агентов для 4 клиентских проектов. Агент сам публикует экспертные посты и проводит первичный квалификационный диалог в личке.',
    quote: '«Сократили ФОТ на копирайтинг на 140 000 ₽ в месяц и подняли средний чек на услуги в 2.5 раза.»',
    niche: 'Digital-агентство'
  },
  {
    id: 'elena',
    studentName: 'Елена Миронова',
    role: 'Практикующий психолог',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1WbHiZUqF-ZWzDO8PbsU8YQdUvZRL6syLqQPJkAMWykK0l6CoCNdxjxLiY3Usa4AZY2KDqjXbQD2C-fFUoXVM2Qd5waJOW2g9HmymXaS2dEUwKKakVoEhwaXYdxLxnXUBiqBtHcCwjAbUT8vu-DIdWZBko4soJnKdOdWE7r688v53dXysL-Wz424rwkKI4T6qzXXQG3qCRvAvUae_kBoz76DiBMRP81OWjR3qVHQfJ80ewZy_GwwN98o9WN',
    salesCount: 38,
    revenueRub: 342000,
    timeframe: 'за 10 дней',
    story: 'Собрала лид-магнит и Telegram Mini App с психологическим тестом через вайбкодинг без единой строчки кода. Привлекла 4 200 новых подписчиков по 18 рублей.',
    quote: '«Раньше программисты просили 80 000 ₽ и месяц сроков. В Башне Архитекторов я собрала это за один вечер в субботу!»',
    niche: 'Психология & Коучинг'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Нужно ли проходить первую ступень?',
    answer: 'Нет. Курс начинается со стартового модуля «Космопорт»: регистрация и оплата из любой точки мира, настройка на телефоне и компьютере, первые суперспособности. Даже если вы ещё не открывали Claude или ChatGPT — начнёте спокойно с самого начала.'
  },
  {
    question: 'Я не из IT — потяну модуль про агентов и вайбкодинг?',
    answer: 'Да! Уроки пошаговые: всё показывается руками на экране, без сложного программирования. Курс сделан специально для блогеров, маркетологов и экспертов. Вайбкодинг — это управление разработкой простыми словами на русском языке.'
  },
  {
    question: 'Сколько времени доступны материалы курса?',
    answer: 'До 12 апреля 2027 года. У вас будет более двух лет свободного доступа, чтобы изучать и внедрять инструменты в комфортном ритме вместе со своей командой.'
  },
  {
    question: 'Какой компьютер нужен? Потянет ли мой ноутбук?',
    answer: 'Подойдёт любой обычный ноутбук или компьютер — Windows или Mac, без особых требований: все нейросети и инструменты работают в облаке через браузер. Кроме того, заметную часть задач ученики успешно решают прямо со смартфона.'
  },
  {
    question: 'Какие дополнительные расходы понадобятся на курсе?',
    answer: 'Понадобится официальная подписка на инструмент: Claude Pro или ChatGPT Plus (около 2 000 ₽/мес). Хостинг для агента или собственного сайта — по желанию, когда дойдёте до боевой практики (от 500 до 1 500 ₽/мес).'
  },
  {
    question: 'Есть ли рассрочка и гарантия возврата?',
    answer: 'Да! Доступна банковская рассрочка 0-0-12 от ведущих банков (от 2 499 ₽ в месяц без переплат) и внутренняя бронь с предоплатой 3 000 ₽. Обучение ведется по официальной государственной образовательной лицензии.'
  }
];
