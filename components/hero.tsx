'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="text-xs font-semibold text-accent tracking-widest uppercase">
              ✨ New Summer Drop
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Libera tu
              <br />
              <span className="text-accent">Arte Interior</span>
            </h1>
            
            <p className="text-foreground/70 text-base leading-relaxed max-w-md">
              Fórmulas premium y veganas diseñadas para todos los tonos de piel. Experimenta texturas ligeras y pigmentos vivos que duran todo el día.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Cambiamos #product-catalog por #catalog para que coincida con el ID del componente */}
              <Link href="#catalog"> 
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Catalogo
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border border-background"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border border-background"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border border-background"></div>
              </div>
              <span>Amado por 10k +</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-200 to-pink-100">
              <Image
                src="/hero-image.jpg"
                alt="Beautiful makeup model"
                fill
                className="object-cover"
              />
              {/* Featured Product Card */}
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Producto Destacado</p>
                <h3 className="text-lg font-bold text-foreground mt-1">Velvet Matte Labial</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Petalo Rosa</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-accent font-bold text-lg">$10.00</span>
                  <button className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent/90 transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 001 1h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.28l-.31-1.243A1 1 0 005 3H3a1 1 0 00-1 1zm5 16a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
