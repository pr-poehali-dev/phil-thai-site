import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    id: 1,
    title: 'Тайский традиционный массаж',
    description: 'Древняя практика исцеления с использованием акупрессуры и растяжки',
    duration: '90 минут',
    price: '4500 ₽',
    image: 'https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/5a960048-b0f2-4b6c-9aea-91ed7a3b8e1e.jpg',
    icon: 'Sparkles'
  },
  {
    id: 2,
    title: 'Ароматерапевтический массаж',
    description: 'Расслабляющий массаж с эфирными маслами для гармонии тела и духа',
    duration: '60 минут',
    price: '3500 ₽',
    image: 'https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/c8c97ea6-49cc-469d-8dc8-3ac170f66f26.jpg',
    icon: 'Flower2'
  },
  {
    id: 3,
    title: 'Массаж горячими камнями',
    description: 'Глубокое расслабление мышц с использованием натуральных базальтовых камней',
    duration: '75 минут',
    price: '4000 ₽',
    image: 'https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/13c139b9-71cf-486d-acbe-a0103f443112.jpg',
    icon: 'Waves'
  }
];

const timeSlots = [
  '10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи.',
    });
    setFormData({ name: '', phone: '', service: '', date: '', time: '', comment: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-primary">Phil Thai</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">Запись</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/13c139b9-71cf-486d-acbe-a0103f443112.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Найди свою гармонию</h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">Традиционные техники массажа для вашего благополучия</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
            <a href="#booking">Записаться на сеанс</a>
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите процедуру, которая подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} />
                      {service.duration}
                    </span>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <a href="#booking">Выбрать</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Запись на сеанс</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подтверждения
            </p>
          </div>
          <Card className="animate-scale-in border-border/50">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name" 
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Выберите услугу *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.title}>
                          {service.title} — {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата *</Label>
                    <Input 
                      id="date" 
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="border-border"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Время *</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment"
                    placeholder="Особые пожелания или вопросы"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="border-border min-h-24"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Наше пространство</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в атмосферу спокойствия и уюта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 overflow-hidden rounded-lg group animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/e2f1bdb3-4faf-42a1-aeb3-a71cc143d449.jpg"
                alt="Массажный кабинет"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Массажный кабинет</h3>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg group animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/376be203-c6d4-4050-8d55-5b13b9460bd6.jpg"
                alt="Ресепшен"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Ресепшен</h3>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg group animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/2af9282e-9460-42fd-8e9b-6827c517fe98/files/07ccc136-c462-4d3d-ad6a-d9b614a79836.jpg"
                alt="Зона отдыха"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Зона отдыха</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши гости
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 animate-scale-in border-border/50">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-primary fill-primary" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Невероятная атмосфера и профессиональные мастера! После тайского массажа чувствую себя заново рожденной. Обязательно вернусь!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Елена Смирнова</div>
                  <div className="text-sm text-muted-foreground">15 октября 2024</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 animate-scale-in border-border/50" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-primary fill-primary" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Массаж горячими камнями — это нечто! Такого глубокого расслабления я не испытывал давно. Интерьер располагает к отдыху."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Андрей Петров</div>
                  <div className="text-sm text-muted-foreground">8 октября 2024</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-scale-in border-border/50" style={{ animationDelay: '0.2s' }}>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-primary fill-primary" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Хожу сюда уже полгода. Всегда внимательное отношение, чистота и качество на высоте. Мой любимый спа-салон в Москве!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Мария Иванова</div>
                  <div className="text-sm text-muted-foreground">2 октября 2024</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">О Phil Thai</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы создали пространство, где древние тайские традиции массажа встречаются с современным комфортом.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Наши мастера прошли обучение в Таиланде и используют только натуральные масла и материалы.
              </p>
              <p className="text-lg text-muted-foreground">
                Каждая процедура — это путешествие к гармонии тела и души.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="text-center p-6 border-border/50">
                <Icon name="Users" className="mx-auto mb-3 text-primary" size={40} />
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </Card>
              <Card className="text-center p-6 border-border/50">
                <Icon name="Award" className="mx-auto mb-3 text-primary" size={40} />
                <div className="text-3xl font-bold text-accent mb-2">8 лет</div>
                <div className="text-muted-foreground">На рынке</div>
              </Card>
              <Card className="text-center p-6 border-border/50">
                <Icon name="Heart" className="mx-auto mb-3 text-primary" size={40} />
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Натуральные масла</div>
              </Card>
              <Card className="text-center p-6 border-border/50">
                <Icon name="Star" className="mx-auto mb-3 text-primary" size={40} />
                <div className="text-3xl font-bold text-accent mb-2">4.9</div>
                <div className="text-muted-foreground">Средний рейтинг</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда рады вас видеть</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 animate-scale-in border-border/50">
              <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">г. Москва, ул. Тверская, 15</p>
            </Card>
            <Card className="text-center p-8 animate-scale-in border-border/50" style={{ animationDelay: '0.1s' }}>
              <Icon name="Phone" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
            <Card className="text-center p-8 animate-scale-in border-border/50" style={{ animationDelay: '0.2s' }}>
              <Icon name="Clock" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
              <p className="text-muted-foreground">Ежедневно<br/>10:00 — 21:00</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Leaf" size={28} />
            <h3 className="text-2xl font-bold">Phil Thai</h3>
          </div>
          <p className="text-accent-foreground/80 mb-6">Традиционный тайский массаж и спа</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-accent-foreground/60">© 2024 Phil Thai. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;