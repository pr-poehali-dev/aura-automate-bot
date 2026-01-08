import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 10);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 10) % 10);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all ${
              i === currentSlide
                ? 'w-1 h-8 bg-foreground'
                : 'w-1 h-4 bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <Button onClick={prevSlide} size="icon" variant="ghost" className="w-12 h-12 border-2 border-foreground hover:bg-foreground hover:text-background">
          <Icon name="ArrowLeft" size={24} />
        </Button>
        <Button onClick={nextSlide} size="icon" className="w-12 h-12 bg-foreground hover:bg-primary">
          <Icon name="ArrowRight" size={24} />
        </Button>
      </div>

      {/* Counter */}
      <div className="fixed bottom-8 left-8 z-50 font-bold text-lg">
        {String(currentSlide + 1).padStart(2, '0')} / 10
      </div>

      {/* Slides */}
      <div className="relative w-full h-screen">
        {/* Slide 1: Title */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8 grid-lines">
            <div className="max-w-7xl w-full animate-fade-in">
              <div className="flex items-baseline justify-between mb-16">
                <span className="text-muted-foreground font-light">Portfolio 2024</span>
                <span className="text-muted-foreground font-light">Telegram Automation</span>
              </div>
              <h1 className="typography-display mb-8">
                <span className="text-gradient">AURABOT</span>
              </h1>
              <div className="grid grid-cols-12 gap-8 items-end">
                <div className="col-span-7">
                  <p className="text-3xl font-light leading-relaxed">
                    Автоматизируем бизнес, <br />
                    увеличиваем продажи и <br />
                    повышаем лояльность
                  </p>
                </div>
                <div className="col-span-5 space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <div className="text-6xl font-black">24/7</div>
                    <div className="text-muted-foreground">Работа бота</div>
                  </div>
                  <div className="border-l-4 border-foreground pl-6">
                    <div className="text-6xl font-black">AI</div>
                    <div className="text-muted-foreground">Умная логика</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Mission */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <div className="mb-16">
                <span className="text-primary text-xl font-semibold uppercase tracking-wider">О проекте</span>
              </div>
              <h2 className="typography-heading mb-16">
                Что мы <span className="text-outline-primary">делаем?</span>
              </h2>
              <div className="grid grid-cols-12 gap-12">
                <div className="col-span-8">
                  <p className="text-4xl font-light leading-relaxed">
                    Мы создаем{' '}
                    <span className="typography-serif font-bold text-primary">интеллектуальных</span>{' '}
                    Telegram-ботов, которые превращают мессенджер в мощный инструмент для вашего бизнеса.
                  </p>
                </div>
                <div className="col-span-4 space-y-8 pt-8">
                  <div className="border-t-2 border-foreground pt-4">
                    <div className="text-2xl font-bold mb-2">Заявки</div>
                    <div className="text-muted-foreground">Прием 24/7</div>
                  </div>
                  <div className="border-t-2 border-foreground pt-4">
                    <div className="text-2xl font-bold mb-2">Запись</div>
                    <div className="text-muted-foreground">Автоматизация</div>
                  </div>
                  <div className="border-t-2 border-foreground pt-4">
                    <div className="text-2xl font-bold mb-2">Рассылки</div>
                    <div className="text-muted-foreground">Персонализация</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Solutions Grid */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-7xl w-full animate-fade-in">
              <h2 className="typography-heading mb-16 accent-line">РЕШЕНИЯ</h2>
              <div className="grid grid-cols-2 gap-px bg-foreground">
                {[
                  { num: '01', title: 'Прием заявок', desc: 'Автоматический сбор контактов 24/7' },
                  { num: '02', title: 'Запись', desc: 'Напоминания и подтверждения' },
                  { num: '03', title: 'Рассылки', desc: 'Персонализированные уведомления' },
                  { num: '04', title: 'Рост чека', desc: 'Интеллектуальные рекомендации' }
                ].map((item, i) => (
                  <div key={i} className="bg-background p-12 hover:bg-muted transition-colors">
                    <div className="text-primary text-7xl font-black mb-4">{item.num}</div>
                    <h3 className="text-4xl font-bold mb-4 uppercase">{item.title}</h3>
                    <p className="text-xl text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: Industries */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-7xl w-full animate-fade-in">
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <h2 className="typography-heading mb-8">
                    <span className="text-outline">ОТРАСЛИ</span><br />
                    ПРИМЕНЕНИЯ
                  </h2>
                  <p className="text-2xl font-light text-muted-foreground">
                    Наши боты успешно работают в различных сферах бизнеса
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: 'Sparkles', title: 'Сфера услуг' },
                    { icon: 'ShoppingBag', title: 'Ритейл' },
                    { icon: 'GraduationCap', title: 'Образование' },
                    { icon: 'Heart', title: 'Медицина' },
                    { icon: 'Coffee', title: 'HoReCa' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 border-b-2 border-border pb-6 group hover:border-primary transition-colors">
                      <div className="w-16 h-16 border-2 border-foreground flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                        <Icon name={item.icon as any} size={32} />
                      </div>
                      <div className="text-3xl font-bold uppercase">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5: Portfolio 1 */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <div className="mb-12">
                <span className="text-primary text-xl font-semibold uppercase tracking-wider">Кейс #01</span>
              </div>
              <h2 className="typography-heading mb-16">
                САЛОН <span className="text-gradient">КРАСОТЫ</span>
              </h2>
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <p className="text-3xl font-light mb-12 leading-relaxed">
                    Комплексное Telegram-решение с двумя взаимосвязанными ботами
                  </p>
                  <div className="space-y-6">
                    {['Автоматическая запись', 'Управление расписанием', 'Клиентская база', 'Напоминания'].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-xl">
                        <div className="w-2 h-2 bg-primary"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-l-4 border-primary pl-12 space-y-8">
                  <div>
                    <div className="text-6xl font-black mb-2">2</div>
                    <div className="text-muted-foreground text-lg">Синхронизированных бота</div>
                  </div>
                  <div>
                    <div className="text-6xl font-black mb-2">100%</div>
                    <div className="text-muted-foreground text-lg">Автоматизация записи</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 6: Portfolio 2 */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <div className="mb-12">
                <span className="text-primary text-xl font-semibold uppercase tracking-wider">Кейс #02</span>
              </div>
              <h2 className="typography-heading mb-16">
                <span className="text-outline">КОСМЕТОЛОГИЯ</span>
              </h2>
              <div className="grid grid-cols-2 gap-16">
                <div className="space-y-6">
                  {['Создание слотов', 'Управление записями', 'Фильтры по статусу', 'Аналитика и отчеты'].map((item, i) => (
                    <div key={i} className="border-2 border-foreground p-6 hover:bg-foreground hover:text-background transition-colors">
                      <div className="text-2xl font-bold">{item}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-3xl font-light mb-12 leading-relaxed">
                    Система с{' '}
                    <span className="typography-serif font-bold text-primary">единой базой данных</span>{' '}
                    для мгновенного обновления информации
                  </p>
                  <div className="bg-primary text-primary-foreground p-12">
                    <div className="text-7xl font-black mb-4">∞</div>
                    <div className="text-2xl font-bold">Полный цикл управления</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 7: Pricing */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 6 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-7xl w-full animate-fade-in">
              <h2 className="typography-heading mb-16 accent-line">ТАРИФЫ</h2>
              <div className="grid grid-cols-3 gap-px bg-foreground">
                {[
                  { name: 'Базовый', price: '9 000', features: ['Сбор заявок', 'Рассылки', 'FAQ', 'CRM'] },
                  { name: 'Стандарт', price: '13 000', features: ['Всё из Базового', 'Запись', 'Аналитика', '24/7'], popular: true },
                  { name: 'Профи', price: '20 000', features: ['Всё из Стандарт', 'Платежи', 'AI', 'Кастом'] }
                ].map((plan, i) => (
                  <div key={i} className={`bg-background p-12 ${plan.popular ? 'bg-primary text-primary-foreground' : ''}`}>
                    <div className="text-sm font-semibold uppercase tracking-wider mb-8">{plan.name}</div>
                    <div className="mb-12">
                      <span className="text-6xl font-black">{plan.price}</span>
                      <span className="text-2xl"> ₽</span>
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-lg">
                          <span className="mt-1">→</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 8: Benefits */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 7 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <h2 className="typography-heading mb-16">
                ПОЧЕМУ <span className="text-gradient">AURABOT?</span>
              </h2>
              <div className="grid grid-cols-2 gap-12">
                {[
                  { num: '01', title: 'Персонализация', desc: 'AI адаптирует общение под каждого клиента' },
                  { num: '02', title: 'Гибкость', desc: 'Адаптируем под ваши процессы и цели' },
                  { num: '03', title: 'Автоматизация', desc: 'Заявки, записи, рассылки — всё в чате' },
                  { num: '04', title: 'Рост продаж', desc: 'Увеличение среднего чека и лояльности' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-primary pl-8">
                    <div className="text-muted-foreground text-4xl font-black mb-4">{item.num}</div>
                    <h3 className="text-3xl font-bold mb-4 uppercase">{item.title}</h3>
                    <p className="text-xl text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 9: Process */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 8 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-7xl w-full animate-fade-in">
              <h2 className="typography-heading mb-16 accent-line">ПРОЦЕСС</h2>
              <div className="grid grid-cols-5 gap-6">
                {[
                  { num: '01', title: 'Консультация', desc: 'Анализ бизнеса' },
                  { num: '02', title: 'Проектирование', desc: 'Создание плана' },
                  { num: '03', title: 'Разработка', desc: 'Программирование' },
                  { num: '04', title: 'Запуск', desc: 'Внедрение' },
                  { num: '05', title: 'Поддержка', desc: 'Улучшения' }
                ].map((step, i) => (
                  <div key={i} className="space-y-4">
                    <div className="aspect-square border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                      <div className="text-4xl font-black">{step.num}</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold uppercase mb-2">{step.title}</div>
                      <div className="text-muted-foreground">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 10: Contacts */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentSlide === 9 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl w-full animate-fade-in">
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <h2 className="typography-display mb-12">
                    <span className="text-outline">НАЧНЕМ</span><br />
                    <span className="text-gradient">СЕЙЧАС?</span>
                  </h2>
                  <p className="text-2xl font-light text-muted-foreground mb-12">
                    Бесплатная консультация<br />и анализ вашего бизнеса
                  </p>
                </div>
                <div className="space-y-8">
                  <a href="tel:+79961300200" className="block border-2 border-foreground p-8 hover:bg-foreground hover:text-background transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon name="Phone" size={32} />
                      <span className="text-sm font-semibold uppercase tracking-wider">Телефон</span>
                    </div>
                    <div className="text-2xl font-bold">+7 (996) 130-02-00</div>
                  </a>
                  <a href="mailto:AuraBotcompany@yandex.ru" className="block border-2 border-foreground p-8 hover:bg-foreground hover:text-background transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon name="Mail" size={32} />
                      <span className="text-sm font-semibold uppercase tracking-wider">Email</span>
                    </div>
                    <div className="text-2xl font-bold break-all">AuraBotcompany@yandex.ru</div>
                  </a>
                  <a href="https://t.me/itsannababkina" target="_blank" rel="noopener noreferrer" className="block border-2 border-primary bg-primary text-primary-foreground p-8 hover:bg-foreground hover:border-foreground transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon name="Send" size={32} />
                      <span className="text-sm font-semibold uppercase tracking-wider">Telegram</span>
                    </div>
                    <div className="text-2xl font-bold">@itsannababkina</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground uppercase tracking-wider">
        Используйте стрелки или пробел
      </div>
    </div>
  );
};

export default Index;
