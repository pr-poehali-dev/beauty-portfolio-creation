import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const procedures = [
    {
      title: 'Ботокс',
      description: 'Инъекции ботулотоксина для коррекции мимических морщин',
      price: 'от 8 000 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Плазмолифтинг',
      description: 'Инъекции обогащенной тромбоцитами плазмы для омоложения',
      price: 'от 12 000 ₽',
      icon: 'Droplets'
    },
    {
      title: 'Мезотерапия',
      description: 'Интрадермальное введение активных препаратов',
      price: 'от 5 000 ₽',
      icon: 'Syringe'
    },
    {
      title: 'Контурная пластика',
      description: 'Коррекция объемов и овала лица филлерами',
      price: 'от 15 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'Биоревитализация',
      description: 'Глубокое увлажнение кожи гиалуроновой кислотой',
      price: 'от 10 000 ₽',
      icon: 'Wind'
    },
    {
      title: 'Пилинги',
      description: 'Химическое обновление кожи различной глубины',
      price: 'от 4 000 ₽',
      icon: 'Star'
    }
  ];

  const portfolio = [
    { before: 'https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/9c3ff7f9-4ec8-4169-a46c-745b5edf6a78.jpg', after: 'https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/79c92d0c-62d8-4aa6-9538-a73de5ecc066.jpg', title: 'Биоревитализация лица' },
    { before: 'https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/e16e24c0-0212-4182-8cc3-b2d4679e9a84.jpg', after: 'https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/79c92d0c-62d8-4aa6-9538-a73de5ecc066.jpg', title: 'Контурная пластика губ' },
    { before: 'https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/9c3ff7f9-4ec8-4169-a46c-745b5edf6a78.jpg', after: 'https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/79c92d0c-62d8-4aa6-9538-a73de5ecc066.jpg', title: 'Мезотерапия' }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Великолепный результат! Татьяна - настоящий профессионал своего дела. Деликатный подход и внимание к деталям.',
      rating: 5
    },
    {
      name: 'Елена Смирнова',
      text: 'Делаю процедуры у Татьяны уже больше года. Всегда естественный результат, никакой "маски". Очень рекомендую!',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      text: 'Спасибо за профессионализм и чуткое отношение! Результат превзошел ожидания. Обязательно вернусь снова.',
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Руслана Мишина</h1>
            <p className="text-xs text-accent">ruslana.pm-cosmetic.ru</p>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-accent transition-colors">Главная</button>
            <button onClick={() => scrollToSection('procedures')} className="text-sm hover:text-accent transition-colors">Процедуры</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-accent transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-accent transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('certificates')} className="text-sm hover:text-accent transition-colors">Сертификаты</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-accent transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('booking')} size="sm">Записаться</Button>
        </div>
      </nav>

      <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100" 
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/97cee2f3-e500-4b2d-bffa-3d3054bffe28.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-accent text-sm uppercase tracking-wider mb-4">Врач косметолог</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Руслана<br />Мишина
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Кандидат медицинских наук. Создаю естественную красоту с заботой о вашем здоровье. 
                Индивидуальный подход и современные методики.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg">
                  Посмотреть работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">3000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">процедур</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Sparkles" className="text-accent mx-auto mb-4" size={80} />
                  <p className="text-muted-foreground text-lg">Профессиональный уход за кожей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="procedures" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm uppercase tracking-wider mb-3">Услуги</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Процедуры</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Современные методики эстетической косметологии для решения любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={proc.icon as any} className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{proc.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{proc.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-accent font-semibold">{proc.price}</span>
                    <Button variant="ghost" size="sm" onClick={() => scrollToSection('booking')}>
                      Записаться
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm uppercase tracking-wider mb-3">Результаты</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры работ с реальными результатами пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-0">
                  <div className="relative group">
                    <img src={item.before} alt="До" className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">До процедуры</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <img src={item.after} alt="После" className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">После процедуры</span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm uppercase tracking-wider mb-3">Отзывы</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят пациенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent text-sm uppercase tracking-wider mb-3">Образование</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Сертификаты и дипломы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Подтвержденная квалификация и постоянное повышение профессионального уровня
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/ffbcd453-ee30-420d-a476-9656df9d96d1.jpg" 
                  alt="Диплом косметолога" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-center">Диплом врача-косметолога</h4>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/b41b0ccd-8102-42cb-9f8a-f042f6d358ed.jpg" 
                  alt="Сертификат косметологии" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-center">Сертификат по эстетической косметологии</h4>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/projects/39f9aadf-363b-4525-b734-31243bad6e64/files/44e29c3f-b34f-4592-9fbc-3073af05bb83.jpg" 
                  alt="Сертификат повышения квалификации" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-center">Повышение квалификации</h4>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-accent text-sm uppercase tracking-wider mb-3">Запись</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Онлайн запись</h2>
              <p className="text-primary-foreground/80">
                Заполните форму, и я свяжусь с вами для подтверждения записи
              </p>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="procedure">Процедура</Label>
                    <Select>
                      <SelectTrigger id="procedure">
                        <SelectValue placeholder="Выберите процедуру" />
                      </SelectTrigger>
                      <SelectContent>
                        {procedures.map((proc) => (
                          <SelectItem key={proc.title} value={proc.title.toLowerCase()}>
                            {proc.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Расскажите о ваших пожеланиях..." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center animate-fade-in">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (926) 572-29-46</p>
                </CardContent>
              </Card>
              <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">5722946@mail.ru</p>
                </CardContent>
              </Card>
              <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">Москва, КМН</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Руслана Мишина</h3>
              <p className="text-primary-foreground/60 text-sm">Врач косметолог, КМН</p>
              <p className="text-accent text-sm mt-1">ruslana.pm-cosmetic.ru</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 Руслана Мишина. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;