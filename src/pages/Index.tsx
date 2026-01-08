import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 10);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 10) % 10);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const features = [
    { icon: 'Zap', text: '24/7 работа', color: 'from-purple-500 to-pink-500' },
    { icon: 'MessageCircle', text: 'Telegram', color: 'from-blue-500 to-cyan-500' },
    { icon: 'Brain', text: 'AI логика', color: 'from-green-500 to-emerald-500' }
  ];

  const solutions = [
    { icon: 'MessageSquare', title: 'Прием заявок', description: 'Автоматический сбор контактов 24/7' },
    { icon: 'CheckCircle', title: 'Подтверждение записей', description: 'Напоминания и сокращение отмен' },
    { icon: 'Send', title: 'Рассылки', description: 'Персонализированные уведомления' },
    { icon: 'TrendingUp', title: 'Рост чека', description: 'Рекомендации и продажи' }
  ];

  const industries = [
    { icon: 'Sparkles', title: 'Услуги' },
    { icon: 'ShoppingBag', title: 'Ритейл' },
    { icon: 'GraduationCap', title: 'Образование' },
    { icon: 'Heart', title: 'Медицина' },
    { icon: 'Coffee', title: 'HoReCa' }
  ];

  const pricing = [
    { name: 'Базовый', price: '9 000', features: ['Сбор заявок', 'Рассылки', 'FAQ', 'CRM'] },
    { name: 'Стандарт', price: '13 000', features: ['Всё из Базового', 'Запись', 'Аналитика', '24/7'], popular: true },
    { name: 'Профи', price: '20 000', features: ['Всё из Стандарт', 'Платежи', 'AI', 'Кастом'] }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide ? 'bg-primary w-3 h-3' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-3">
        <Button onClick={prevSlide} size="icon" variant="outline" className="neumorphic rounded-full w-12 h-12">
          <Icon name="ChevronLeft" size={24} />
        </Button>
        <Button onClick={nextSlide} size="icon" className="neumorphic rounded-full w-12 h-12 bg-gradient-to-r from-primary to-secondary">
          <Icon name="ChevronRight" size={24} />
        </Button>
      </div>

      {/* Counter */}
      <div className="fixed bottom-8 left-8 z-50 text-muted-foreground text-sm font-medium">
        {currentSlide + 1} / 10
      </div>

      {/* Slides */}
      <div className="relative w-full h-screen">
        {/* Slide 1: Title */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="text-center max-w-6xl animate-fade-in">
              <div className="inline-flex items-center gap-3 mb-8 neumorphic rounded-full px-8 py-4">
                {['Автоматизация', 'Telegram', 'Продажи', 'AI'].map((tag, i) => (
                  <span key={i} className="text-primary font-semibold">{tag}</span>
                ))}
              </div>
              <h1 className="text-8xl font-bold mb-8 leading-tight">
                <span className="text-gradient">AuraBot</span>
              </h1>
              <p className="text-3xl text-muted-foreground mb-12 font-light">
                Автоматизируем бизнес, увеличиваем продажи<br />и повышаем лояльность
              </p>
              <div className="flex gap-6 justify-center">
                {features.map((feature, i) => (
                  <div key={i} className="neumorphic rounded-3xl px-8 py-6 flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <Icon name={feature.icon as any} className="text-white" size={24} />
                    </div>
                    <span className="font-semibold text-xl">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Mission */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-5xl text-center animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                <Icon name="Target" className="text-white" size={64} />
              </div>
              <h2 className="text-6xl font-bold mb-12">Что мы делаем?</h2>
              <Card className="neumorphic border-0 p-16">
                <p className="text-3xl text-muted-foreground leading-relaxed">
                  Мы создаем <span className="text-gradient font-bold">интеллектуальных Telegram-ботов</span>, 
                  которые превращают мессенджер в мощный инструмент для вашего бизнеса. 
                  Наши решения принимают заявки, подтверждают записи, делают рассылки и увеличивают средний чек.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Slide 3-4: Solutions */}
        {[0, 2].map((start, slideIndex) => (
          <div key={slideIndex} className={`absolute inset-0 transition-all duration-700 ${currentSlide === slideIndex + 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
            <div className="h-screen flex items-center justify-center px-8">
              <div className="max-w-6xl w-full animate-fade-in">
                <h2 className="text-6xl font-bold mb-16 text-center">Наши решения</h2>
                <div className="grid grid-cols-2 gap-8">
                  {solutions.slice(start, start + 2).map((solution, index) => (
                    <Card key={index} className="neumorphic border-0 p-12" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="w-24 h-24 rounded-3xl neumorphic-inset flex items-center justify-center mb-8">
                        <Icon name={solution.icon as any} className="text-primary" size={48} />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                      <p className="text-xl text-muted-foreground">{solution.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide 5: Industries */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <h2 className="text-6xl font-bold mb-16 text-center">Отрасли</h2>
              <div className="grid grid-cols-5 gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="neumorphic rounded-3xl p-8 text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-20 h-20 rounded-full neumorphic-inset flex items-center justify-center mx-auto mb-6">
                      <Icon name={industry.icon as any} className="text-primary" size={40} />
                    </div>
                    <h3 className="font-bold text-xl">{industry.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slides 6-7: Portfolio */}
        {['Салон красоты', 'Косметология'].map((title, slideIndex) => (
          <div key={slideIndex} className={`absolute inset-0 transition-all duration-700 ${currentSlide === slideIndex + 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
            <div className="h-screen flex items-center justify-center px-8">
              <div className="max-w-5xl w-full animate-fade-in">
                <div className="text-center mb-12">
                  <span className="text-primary text-xl font-semibold">Кейс #{slideIndex + 1}</span>
                  <h2 className="text-5xl font-bold mt-4">{title}</h2>
                </div>
                <Card className="neumorphic border-0 p-16">
                  <h3 className="text-4xl font-bold mb-8 text-gradient">
                    {slideIndex === 0 ? 'Система управления' : 'Система записи'}
                  </h3>
                  <p className="text-2xl text-muted-foreground mb-12">
                    {slideIndex === 0 
                      ? 'Два взаимосвязанных бота: клиентский и административный'
                      : 'Единая база данных для мгновенного обновления'
                    }
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {(slideIndex === 0 
                      ? ['Запись', 'Расписание', 'База', 'Напоминания']
                      : ['Слоты', 'Управление', 'Фильтры', 'Аналитика']
                    ).map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 neumorphic-inset rounded-2xl p-6">
                        <Icon name="CheckCircle2" className="text-primary" size={32} />
                        <span className="text-xl font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ))}

        {/* Slide 8: Pricing */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 7 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <h2 className="text-6xl font-bold mb-16 text-center">Тарифы</h2>
              <div className="grid grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <Card key={index} className={`neumorphic border-0 p-10 relative ${plan.popular ? 'ring-4 ring-primary scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold">
                        Популярный
                      </div>
                    )}
                    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                      <span className="text-xl text-muted-foreground"> ₽</span>
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 9: Benefits */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 8 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <h2 className="text-6xl font-bold mb-16 text-center">Почему AuraBot?</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: 'Sparkles', title: 'Персонализация', desc: 'AI под каждого клиента' },
                  { icon: 'Settings', title: 'Гибкость', desc: 'Под ваши процессы' },
                  { icon: 'Zap', title: 'Автоматизация', desc: 'Заявки в чате' },
                  { icon: 'TrendingUp', title: 'Рост', desc: 'Увеличение чека' }
                ].map((benefit, index) => (
                  <Card key={index} className="neumorphic border-0 p-12" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8">
                      <Icon name={benefit.icon as any} className="text-white" size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-xl text-muted-foreground">{benefit.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 10: Contacts */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 9 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-5xl w-full animate-fade-in text-center">
              <h2 className="text-7xl font-bold mb-8">
                Начнем <span className="text-gradient">сейчас?</span>
              </h2>
              <p className="text-3xl text-muted-foreground mb-16">
                Бесплатная консультация и анализ
              </p>
              <div className="grid grid-cols-3 gap-8 mb-16">
                <a href="tel:+79961300200" className="neumorphic rounded-3xl p-12 block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Phone" className="text-white" size={48} />
                  </div>
                  <p className="text-2xl font-bold">+7 (996) 130-02-00</p>
                </a>
                <a href="mailto:AuraBotcompany@yandex.ru" className="neumorphic rounded-3xl p-12 block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Mail" className="text-white" size={48} />
                  </div>
                  <p className="text-xl font-bold">AuraBotcompany@<br/>yandex.ru</p>
                </a>
                <a href="https://t.me/itsannababkina" target="_blank" rel="noopener noreferrer" className="neumorphic rounded-3xl p-12 block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <Icon name="Send" className="text-white" size={48} />
                  </div>
                  <p className="text-2xl font-bold">@itsannababkina</p>
                </a>
              </div>
              <div className="text-2xl font-bold text-gradient">
                AuraBot — автоматизация через Telegram
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
        Используйте стрелки или пробел
      </div>
    </div>
  );
};

export default Index;
