'use client';

import React, { useState } from 'react';
import { useCart } from '@/components/cart-context';
import { ShoppingBag, Trash2, Minus, Plus, CreditCard, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CartPage() {
  const { items, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  // Group items by category if needed, or just list them
  const categories = Array.from(new Set(items.map(i => i.category || 'Otros')));

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12 grow w-full">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/" className="text-foreground/50 hover:text-accent transition-colors flex items-center gap-1 text-sm font-medium">
            <ChevronLeft className="w-4 h-4" />
            Volver a la tienda
          </Link>
        </div>

        {orderComplete ? (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="bg-green-100 p-6 rounded-full mb-6">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-foreground mb-4">Pedido Confirmado</h1>
            <p className="text-foreground/60 max-w-md mx-auto mb-8">
              Tu pedido ha sido procesado exitosamente. Recibirás un correo con el seguimiento en breve.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10">
                Regresar al Inicio
              </Button>
            </Link>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ShoppingBag className="w-20 h-20 text-foreground/10 mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Tu carrito está vacío</h1>
            <p className="text-foreground/50 mb-8">Parece que aún no has añadido nada de K-shop.</p>
            <Link href="/catalog">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10">
                Ir al Catálogo
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Items List */}
            <div className="lg:col-span-2 space-y-10">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Mi Carrito</h1>

              {categories.map((cat) => (
                <div key={cat} className="space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-accent/80 border-b border-border pb-2">
                    {cat}
                  </h2>
                  <div className="space-y-4">
                    {items.filter(i => (i.category || 'Otros') === cat).map((item) => (
                      <div key={item.id} className="flex gap-6 items-center bg-card p-4 rounded-3xl border border-border/50 shadow-sm transition-shadow hover:shadow-md">
                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-muted">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>

                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-lg text-foreground line-clamp-1">{item.name}</h3>
                            <p className="text-sm text-foreground/40 font-medium">{item.category}</p>
                            <p className="text-accent font-extrabold mt-1">${item.price.toFixed(2)}</p>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3 bg-muted/50 rounded-full px-3 py-1.5 border border-border/50">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 flex items-center justify-center hover:bg-background rounded-full transition-colors text-foreground/60"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center hover:bg-background rounded-full transition-colors text-foreground/60"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-foreground/20 hover:text-red-500 transition-colors p-2"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-[2.5rem] p-8 border border-border shadow-xl sticky top-24">
                <h2 className="text-xl font-extrabold text-foreground mb-6">Resumen</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-foreground/60 font-medium">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/60 font-medium">
                    <span>Envío</span>
                    <span className="text-green-500 font-bold tracking-tight">GRATIS</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-2xl font-black text-accent">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-7 text-lg font-black shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <CreditCard className="w-6 h-6" />
                      Procesar Pago
                    </>
                  )}
                </Button>

                <p className="text-[10px] text-foreground/40 text-center mt-6 uppercase font-bold tracking-widest">
                  Transacción Segura Segurizada por K-shop
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
