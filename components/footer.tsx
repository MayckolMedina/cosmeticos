import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-muted/30 border-t border-border py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-black uppercase tracking-widest text-accent">K-shop</h3>
          <p className="text-xs text-foreground/40 leading-relaxed font-medium">
            Conectando la cultura coreana con el mundo a través de la moda, el sabor y el estilo de vida.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-black uppercase tracking-widest">Navegación</h3>
          <div className="flex flex-col gap-2 text-xs font-medium text-foreground/60 uppercase tracking-widest">
            <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
            <Link href="/catalog" className="hover:text-accent transition-colors">Catálogo Completo</Link>
            <Link href="/cart" className="hover:text-accent transition-colors">Carrito de Compras</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-black uppercase tracking-widest">Soporte</h3>
          <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">info@k-shop.store</p>
          <p className="text-[9px] text-foreground/30 font-medium uppercase tracking-[0.2em] mt-4">
            K-shop Collective &copy; 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
