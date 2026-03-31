'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from './cart-context';

export function Header() {
  const { cartCount } = useCart();

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-accent tracking-tighter drop-shadow-sm uppercase">
          K-Shop
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
          <Link href="/catalog" className="hover:text-accent transition-colors">Moda</Link>
          <Link href="/catalog" className="hover:text-accent transition-colors">Alimentos</Link>
          <Link href="/catalog" className="hover:text-accent transition-colors">Fanshop</Link>
          <Link href="/catalog" className="hover:text-accent transition-colors">K-Beauty</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
            <Search className="w-5 h-5" />
          </Button>
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:text-accent transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[8px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}


