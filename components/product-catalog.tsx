'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from './cart-context';
import { PRODUCTS } from '@/lib/products';

interface ProductCatalogProps {
  limit?: number;
  showFilters?: boolean;
  title?: string;
}

export function ProductCatalog({ limit, showFilters = true, title = "Catálogo K-shop" }: ProductCatalogProps) {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Fanshop', 'Moda', 'Alimentos', 'Belleza'];

  const filteredProducts = activeCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="w-full bg-background py-24" id="catalog">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-foreground tracking-tighter uppercase mb-4">{title}</h2>
            <p className="text-foreground/40 font-medium">
              Selección exclusiva curada directamente desde Seúl. Productos oficiales y tendencias globales.
            </p>
          </div>

          {showFilters && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                      ? 'bg-accent text-white shadow-lg shadow-accent/20'
                      : 'bg-muted text-foreground/40 hover:bg-muted/80'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-card border border-border/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5">

              {/* Image Container */}
              <div className="relative h-80 bg-muted overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Badges */}
                <div className="absolute top-5 left-5">
                  {product.isNew && (
                    <span className="bg-accent text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Nuevo</span>
                  )}
                  {product.onSale && (
                    <span className="bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Sale</span>
                  )}
                </div>

                {/* Quick Add overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Button
                    size="icon"
                    className="bg-accent hover:bg-accent/90 text-white rounded-full w-14 h-14 translate-y-4 group-hover:translate-y-0 transition-all shadow-2xl"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-foreground text-sm uppercase tracking-tight leading-tight line-clamp-2 max-w-[80%]">
                    {product.name}
                  </h3>
                  <button className="text-foreground/20 hover:text-accent transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[10px] text-foreground/30 font-black uppercase tracking-widest mb-6">
                  {product.category}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-black text-accent tracking-tighter">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[10px] font-black uppercase tracking-widest text-foreground hover:text-accent p-0"
                    onClick={() => addToCart(product)}
                  >
                    Añadir +
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (if limited) */}
        {limit && PRODUCTS.length > limit && (
          <div className="mt-20 flex justify-center">
            <Link href="/catalog">
              <Button size="lg" className="bg-foreground hover:bg-accent text-background hover:text-white rounded-full px-12 h-14 text-xs font-black uppercase tracking-widest transition-all">
                Ver Catálogo Completo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}

        {/* Empty State */}
        {displayedProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-foreground/30 font-bold uppercase tracking-widest">No se encontraron productos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}


