'use client';

import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProductCatalog() {
const products = [
  {
    id: 1,
    name: 'Labial Mate Terciopelo',
    category: 'Pétalo de Rosa',
    price: 24.0,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    onSale: false,
  },
  {
    id: 2,
    name: 'Base Hidratante',
    category: 'Bases de Maquillaje',
    price: 36.0,
    image: 'https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=800&auto=format&fit=crop',
    isNew: false,
    onSale: false,
  },
  {
    id: 3,
    name: 'Paleta Oro Rosa',
    category: '12 Tonos',
    price: 45.0,
    originalPrice: 55.0,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    isNew: false,
    onSale: true,
  },
  {
    id: 4,
    name: 'Máscara de Pestañas Voluminizadora',
    category: 'Negro Intenso',
    price: 18.0,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    isNew: false,
    onSale: false,
  },
  {
    id: 5,
    name: 'Sérum Iluminador',
    category: 'Vitamina C',
    price: 42.0,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    onSale: false,
  },
  {
    id: 6,
    name: 'Brocha Pro para Rubor',
    category: 'Cerdas Sintéticas',
    price: 28.0,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    isNew: true,
    onSale: false,
  },
  {
    id: 7,
    name: 'Brillo Labial Cristal',
    category: 'Brillo Transparente',
    price: 16.0,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    isNew: false,
    onSale: false,
  },
  {
    id: 8,
    name: 'Polvos Traslúcidos',
    category: 'Acabado Mate',
    price: 32.0,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    isNew: false,
    onSale: false,
  },
];

  return (
    <section className="w-full bg-background py-16 md:py-24" id="catalog">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Todos los productos</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Explora nuestra última colección de tonos pastel perfectos. Desde bases radiantes hasta labiales atrevidos, encuentra tu nuevo brillo.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="text-sm text-foreground/70">
            Mostrando <span className="font-semibold text-accent">12</span> de <span className="font-semibold text-accent">48</span> productos
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Ordenar por:</span>
            <select className="px-3 py-2 border border-border rounded-md text-sm bg-background">
              <option>Más vendidos</option>
              <option>Precio: de menor a mayor</option>
              <option>Precio: de mayor a menor</option>
              <option>Más nuevos</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary to-primary/50 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && (
                    <div className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                  {product.onSale && (
                    <div className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                      SALE
                    </div>
                  )}
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-foreground text-base mb-1">{product.name}</h3>
                <p className="text-xs text-foreground/60 mb-4">{product.category}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-accent font-bold text-lg">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-foreground/50 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-auto"
                  size="sm"
                >
                  Añadir al carrito
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="px-3 py-2 border border-border rounded-md text-foreground hover:bg-primary transition">←</button>
          <button className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold">1</button>
          <button className="px-4 py-2 border border-border rounded-md text-foreground hover:bg-primary transition">2</button>
          <button className="px-4 py-2 border border-border rounded-md text-foreground hover:bg-primary transition">3</button>
          <span className="text-foreground/50 px-2">...</span>
          <button className="px-4 py-2 border border-border rounded-md text-foreground hover:bg-primary transition">8</button>
          <button className="px-3 py-2 border border-border rounded-md text-foreground hover:bg-primary transition">→</button>
        </div>
      </div>
    </section>
  );
}
