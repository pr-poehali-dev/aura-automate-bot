import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const solutions = [
    {
      icon: 'MessageSquare',
      title: 'Прием и обработка заявок',
      description: 'Автоматический сбор контактов и запросов клиентов 24/7'
    },
    {
      icon: 'CheckCircle',
      title: 'Подтверждение записей',
      description: 'Автоматическое напоминание о визитах и сокращение числа отмен'
    },
    {
      icon: 'Send',
      title: 'Информационные рассылки',
      description: 'Персонализированные уведомления о новостях, акциях и обновлениях'
    },
    {
      icon: 'TrendingUp',
      title: 'Увеличение среднего чека',
      description: 'Интеллектуальные рекомендации и перекрестные продажи через чат'
    }
  ];

  const industries = [
    { icon: 'Sparkles', title: 'Сфера услуг', desc: 'Запись на прием, напоминания, сбор отзывов' },
    { icon: 'ShoppingBag', title: 'Ритейл', desc: 'Персональные рекомендации, уведомления о скидках' },
    { icon: 'GraduationCap', title: 'Образование', desc: 'Регистрация на курсы, отправка материалов' },
    { icon: 'Heart', title: 'Медицина', desc: 'Запись к специалистам, напоминания о приемах' },
    { icon: 'Coffee', title: 'Рестораны и кафе', desc: 'Бронирование столов, заказ еды с доставкой' }
  ];

  const portfolio = [
    {
      title: 'Система управления салоном красоты',
      description: 'Комплексное Telegram-решение с двумя взаимосвязанными ботами: клиентским и административным',
      features: ['Автоматическая запись', 'Управление расписанием', 'Клиентская база', 'Напоминания']
    },
    {
      title: 'Система записи для косметологии',
      description: 'Система с единой базой данных для мгновенного обновления информации',
      features: ['Создание слотов', 'Управление записями', 'Фильтры по статусу', 'Аналитика']
    }
  ];

  const steps = [
    {
      icon: 'MessageCircle',
      title: 'Консультируем',
      description: 'Проводим бесплатный анализ вашего бизнеса и определяем цели для бота'
    },
    {
      icon: 'Layout',
      title: 'Проектируем',
      description: 'Создаем детальный план: логику диалогов, структуру меню, сценарии'
    },
    {
      icon: 'Code',
      title: 'Разрабатываем',
      description: 'Программируем бота, интегрируем с системами, тестируем все сценарии'
    },
    {
      icon: 'Rocket',
      title: 'Запускаем',
      description: 'Помогаем с внедрением, обучаем сотрудников, настраиваем рассылки'
    },
    {
      icon: 'Settings',
      title: 'Поддерживаем',
      description: 'Техническая поддержка, мониторинг, регулярные улучшения'
    }
  ];

  const pricing = [
    {
      name: 'Базовый',
      price: '9 000',
      description: 'Пакет для старта автоматизации',
      features: [
        'Бот для сбора обратной связи',
        'Автоматические благодарности',
        'Прием заявок 24/7',
        'Обучение сотрудников',
        'Базовая рассылка',
        'FAQ для мгновенной помощи',
        'Интеграция с CRM',
        'Техподдержка в рабочее время'
      ]
    },
    {
      name: 'Стандарт',
      price: '13 000',
      description: 'Комплексное решение для роста',
      features: [
        'Все функции базового',
        'Система бронирования',
        'Сегментированные рассылки',
        'Интеграция с календарем',
        'Триггерные сообщения',
        'Поддержка 24/7',
        'Расширенная аналитика'
      ],
      popular: true
    },
    {
      name: 'Профессиональный',
      price: '20 000',
      description: 'Максимальная автоматизация',
      features: [
        'Все функции стандартного',
        'Интеграция с платежами',
        'Многоуровневое меню',
        'Персонализированные рекомендации',
        'Интеграция с 3+ сервисами',
        'Приоритетная поддержка 24/7',
        'Глубокая аналитика',
        'Регулярные обновления',
        'Месяц бесплатного тестирования'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="neumorphic rounded-full px-6 py-4 flex items-center justify-between backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-gradient">AuraBot</h1>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Решения', 'Портфолио', 'Этапы', 'Тарифы', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection('контакты')} className="rounded-full neumorphic-hover">
            Консультация
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="inline-block neumorphic rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-semibold text-primary">🤖 Автоматизация бизнеса через Telegram</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Telegram-боты для <br />
            <span className="text-gradient">роста вашего бизнеса</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Автоматизируем рутинные задачи, увеличиваем продажи и улучшаем клиентский опыт с помощью интеллектуальных ботов
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('контакты')} className="rounded-full neumorphic-hover text-lg px-8">
              <Icon name="Rocket" className="mr-2" size={20} />
              Бесплатная консультация
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('портфолио')} className="rounded-full neumorphic text-lg px-8">
              <Icon name="Eye" className="mr-2" size={20} />
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="решения" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши решения</h2>
            <p className="text-xl text-muted-foreground">
              Telegram-боты для автоматизации и повышения эффективности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="neumorphic neumorphic-hover border-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl neumorphic-inset flex items-center justify-center mb-4">
                    <Icon name={solution.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отрасли применения</h2>
            <p className="text-xl text-muted-foreground">
              Наши боты успешно работают в различных сферах
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="neumorphic rounded-3xl p-6 text-center neumorphic-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full neumorphic-inset flex items-center justify-center mx-auto mb-4">
                  <Icon name={industry.icon as any} className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="портфолио" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">
              Примеры наших реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="neumorphic border-0 neumorphic-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="о нас" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="neumorphic border-0 p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">О нас</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <span className="font-bold text-foreground">AuraBot</span> — компания по автоматизации бизнес-процессов через Telegram. 
                Помогаем компаниям разных масштабов повышать эффективность, увеличивать продажи и улучшать клиентский опыт с помощью интеллектуальных ботов.
              </p>
              <p>
                Миссия AuraBot — делать автоматизацию доступной и понятной, превращая сложные технологии в простые и эффективные решения для вашего бизнеса. 
                Мы верим, что правильный инструмент должен работать незаметно, принося очевидные результаты.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section id="этапы" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Этапы работы</h2>
            <p className="text-xl text-muted-foreground">
              От идеи до запуска и поддержки
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="neumorphic rounded-3xl p-6 neumorphic-hover h-full">
                  <div className="w-14 h-14 rounded-2xl neumorphic-inset flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="тарифы" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`neumorphic border-0 neumorphic-hover animate-fade-in ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽/месяц</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 rounded-full neumorphic-hover" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('контакты')}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="контакты" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:+79961300200" className="neumorphic rounded-3xl p-8 text-center neumorphic-hover block">
              <div className="w-16 h-16 rounded-full neumorphic-inset flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (996) 130-02-00</p>
            </a>
            <a href="mailto:AuraBotcompany@yandex.ru" className="neumorphic rounded-3xl p-8 text-center neumorphic-hover block">
              <div className="w-16 h-16 rounded-full neumorphic-inset flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground break-all">AuraBotcompany@yandex.ru</p>
            </a>
            <a href="https://t.me/itsannababkina" target="_blank" rel="noopener noreferrer" className="neumorphic rounded-3xl p-8 text-center neumorphic-hover block">
              <div className="w-16 h-16 rounded-full neumorphic-inset flex items-center justify-center mx-auto mb-4">
                <Icon name="Send" className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@itsannababkina</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gradient mb-4">AuraBot</h2>
          <p className="text-muted-foreground mb-6">
            Автоматизация бизнеса через Telegram
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 AuraBot</span>
            <span>•</span>
            <span>Все права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
