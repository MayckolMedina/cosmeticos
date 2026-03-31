'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from './cart-context';

export function Hero() {
  const { addToCart } = useCart();

  const featuredProduct = {
    id: 99,
    name: "Seoul Limited Hoodie",
    price: 45.00,
    category: "Moda",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <section className="w-full bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                Nueva Colección 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[0.95] tracking-tighter">
              K-SHOP
              <br />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">COLLECTIVE</span>
            </h1>

            <p className="text-foreground/50 text-lg leading-relaxed max-w-md font-medium">
              Descubre lo mejor de la cultura coreana. Desde moda urbana y alimentos tradicionales hasta fanshop exclusivo de BTS y Blackpink.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="#catalog">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-14 text-sm font-black uppercase tracking-widest shadow-2xl shadow-accent/20 transition-all hover:scale-105 active:scale-95">
                  Explorar Tienda
                </Button>
              </Link>
              <Link href="#catalog" className="text-sm font-black uppercase tracking-widest text-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                Ver Categorías
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border/50">
              <div className="flex -space-x-3">
                {[
                  "https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/215219828_1432743570441044_8231740780239798850_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHUjkhK9lKxNFsLYbgF7ucO-_TuzhiQfPD79O7OGJB88PMsb3pFe7LhMYcOnmfkNnVDUu_CX3kCO1bT7uxOgGp1&_nc_ohc=trcVMahDk5QQ7kNvwFFb5Qg&_nc_oc=Adp5wI0KavoJiIixoLqD9IT22ggjLtpQvWqwdqoXMqSVilsq-w221WGIWEXbwB1btEU&_nc_zt=23&_nc_ht=scontent.flim17-1.fna&_nc_gid=TNdilwrRmJB3EgMeevkpag&_nc_ss=7a3a8&oh=00_Afxwzpl3mDA4m3oqtliEW9XjuapEc04EYUc5slfN2d2NdQ&oe=69D1F246",
                  "https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/544859869_2692243511107043_7240488606651763929_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEeXYKONgGHEPiBH0vD_35gkODlqGKt-omQ4OWoYq36idm6fy89aXeX9BghN07aYT6ZglJoRRvOm2OiletbN0fY&_nc_ohc=A7jCR3RZAVMQ7kNvwEt8XWd&_nc_oc=AdoKg12lsb-TpPQplQWIk-4bqbD0Y5bLW9uwBLM1Au8pT_DfthQyCS7c-CbpnRaIixA&_nc_zt=23&_nc_ht=scontent.flim17-1.fna&_nc_gid=fIbS8PqACJFft574smgKpA&_nc_ss=7a3a8&oh=00_AfwUwHf8hZqsQF-Oa8HN9MZ5EmBCqMn46mdP0X3W1yBbew&oe=69D1DF69",
                  "https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-1/275065404_651974039420583_2591071886078382610_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF5RVEnVNwc_2ym4ldT8Zc-l_5jhtQsy0iX_mOG1CzLSF-GwT_fhvPJL9ocsabIkToGAb9OOCZ1up9RNQN9GKqX&_nc_ohc=3dwZZgAfE5UQ7kNvwEejbT_&_nc_oc=AdqXA8cr4wCMZZFEfDvWW2D9K0cQrc7EWTI5hLgrVM-joeK88XG5OH-k8G7WNtKVG_I&_nc_zt=24&_nc_ht=scontent.flim17-1.fna&_nc_gid=T9HYRZ_qSixwjEeeofZISA&_nc_ss=7a3a8&oh=00_Afw2HneumXDwqRmGIxd3cSuEvbr5_ZfBpUW67OKxkIlCiQ&oe=69D1D54B"
                ].map((url, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={url}
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest leading-tight">
                Únete a miles de<br />K-Lovers en todo el mundo
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_0_80px_-20px_rgba(var(--accent-rgb),0.3)] bg-muted border border-border/50">
              <Image
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop"
                alt="Korean Streetwear"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              />

              {/* Product Popup */}
              <div className="absolute top-10 right-10 animate-in fade-in slide-in-from-right duration-1000 delay-500">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-white max-w-[220px]">
                  <p className="text-[10px] text-accent font-black uppercase tracking-widest mb-3">Best Seller</p>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 relative rounded-2xl overflow-hidden shrink-0 shadow-lg">
                      <Image src={featuredProduct.image} alt={featuredProduct.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xs font-black text-foreground uppercase leading-tight mb-1">{featuredProduct.name}</h3>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-accent font-black text-sm">${featuredProduct.price.toFixed(2)}</span>
                        <button
                          onClick={() => addToCart(featuredProduct)}
                          className="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

