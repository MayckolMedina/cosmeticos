'use client';

import Image from 'next/image';
import Link from 'next/link';

export function FeaturedCollections() {
  const collections = [
    {
      id: 1,
      title: 'Glass Skin Secret',
      image: 'https://images.unsplash.com/photo-1615397323136-d2495dce4509?q=80&w=800&auto=format&fit=crop',
      link: '#catalog',
    },
    {
      id: 2,
      title: 'K-Pop Lips',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
      link: '#catalog',
    },
    {
      id: 3,
      title: 'Idol Eye Looks',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
      link: '#catalog',
    },
  ];

  return (
    <section className="w-full bg-background py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-[-10%] w-[40%] h-full bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Colecciones Estrellas</h2>
            <p className="text-foreground/60 mt-2 font-medium">Recrea los looks de tus idols favoritos.</p>
          </div>
          <Link href="#catalog" className="text-accent font-bold hover:underline underline-offset-4 text-sm md:text-base px-4 py-2 rounded-full hover:bg-accent/10 transition">
            Ver todo el catálogo →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.link}
              className="group relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent-foreground/80 text-xs font-bold uppercase tracking-widest mb-2 block">Tendencia</span>
                  <h3 className="text-white text-2xl lg:text-3xl font-extrabold">{collection.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
