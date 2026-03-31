'use client';

import React, { useState } from 'react';
import { useCart } from './cart-context';
import { X, Minus, Plus, ShoppingBag, Trash2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function CartDrawer() {
  const { items, isDrawerOpen, setIsDrawerOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isDrawerOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
    // Reset success state when closing
    setTimeout(() => {
        if(checkoutSuccess) setCheckoutSuccess(false);
    }, 300);
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-bold text-foreground">Tu Carrito</h2>
          </div>
          <button onClick={handleClose} className="p-2 text-foreground/60 hover:text-foreground transition rounded-full hover:bg-muted">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {checkoutSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
              <h3 className="text-2xl font-bold text-foreground">¡Orden Confirmada!</h3>
              <p className="text-foreground/70">
                Gracias por tu compra. Te enviaremos los detalles de tu pedido K-Beauty pronto.
              </p>
              <Button onClick={handleClose} className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                Seguir comprando
              </Button>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-foreground/50">
              <ShoppingBag className="w-16 h-16 mb-2 opacity-20" />
              <p>Tu carrito está vacío.</p>
              <Button onClick={handleClose} variant="outline" className="mt-4">
                Explorar catálogo
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-card rounded-xl p-3 border border-border/50">
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-muted">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-foreground/60">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-foreground/40 hover:text-destructive transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-accent">${item.price.toFixed(2)}</span>
                      
                      {/* Quantity Control */}
                      <div className="flex items-center gap-3 bg-muted rounded-full px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-foreground hover:bg-background rounded-full transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-foreground hover:bg-background rounded-full transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!checkoutSuccess && items.length > 0 && (
          <div className="border-t border-border p-6 bg-card/50 backdrop-blur-md">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-foreground/70">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-foreground/70">
                <span>Envío</span>
                <span>Calculado en caja</span>
              </div>
              <div className="border-t border-border/50 pt-3 flex justify-between font-bold text-lg text-foreground">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Procesando...
                </span>
              ) : (
                `Pagar ${items.length} ${items.length === 1 ? 'item' : 'items'} • $${cartTotal.toFixed(2)}`
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
