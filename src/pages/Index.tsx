import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Кофта "Медведь и Надпись"',
    price: 4990,
    image: 'https://cdn.poehali.dev/projects/17d3022b-7bff-4943-baad-1c3f4adc82d0/files/369b42e8-92d5-4b9f-9847-631ca0987505.jpg',
    badge: 'Хит продаж',
  },
  {
    id: 2,
    name: 'Кофта "Славянские Узоры"',
    price: 4490,
    image: 'https://cdn.poehali.dev/projects/17d3022b-7bff-4943-baad-1c3f4adc82d0/files/b5b7d111-2ba7-4147-82a8-ca1c2f2faba4.jpg',
  },
  {
    id: 3,
    name: 'Кофта "Медвежий След"',
    price: 4690,
    image: 'https://cdn.poehali.dev/projects/17d3022b-7bff-4943-baad-1c3f4adc82d0/files/4eaae3f1-3e97-4e04-8b0c-1f4138bcd8bc.jpg',
    badge: 'Новинка',
  },
];

const Index = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐻</span>
            <h1 className="text-2xl font-bold text-primary">Славянский Стиль</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-secondary transition-colors font-medium">
              Главная
            </a>
            <a href="#catalog" className="text-foreground hover:text-secondary transition-colors font-medium">
              Каталог
            </a>
          </nav>
          <Button variant="outline" size="icon">
            <Icon name="ShoppingCart" size={20} />
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-white">Новая коллекция 2025</Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Славянский Стиль с Характером
              </h2>
              <p className="text-xl text-white/90">
                Уникальные кофты с медведем и традиционными узорами. 
                Качественные материалы, яркий дизайн.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={products[0].image}
                alt="Featured product"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Каталог Товаров</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите размер и оформите заказ. Доставка по всей России.
            </p>
          </div>

          <div className="mb-8 flex justify-center gap-3">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'default' : 'outline'}
                onClick={() => setSelectedSize(size)}
                className="min-w-[60px]"
              >
                {size}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 z-10 bg-secondary text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-secondary">{product.price} ₽</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🐻</span>
                <h3 className="text-xl font-bold">Славянский Стиль</h3>
              </div>
              <p className="text-white/80">
                Качественная одежда с традиционными узорами
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@slavstyle.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
            <p>© 2025 Славянский Стиль. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
