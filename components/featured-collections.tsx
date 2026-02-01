'use client';

import Image from 'next/image';
import Link from 'next/link';

export function FeaturedCollections() {
  const collections = [
    {
      id: 1,
      title: 'Luscious Lips',
      image: '/lips-collection.jpg',
      link: '#catalog',
    },
    {
      id: 2,
      title: 'Mesmerizing Eyes',
      image: '/eyes-collection.jpg',
      link: '#catalog',
    },
    {
      id: 3,
      title: 'Flawless Skin',
      image: '/skin-collection.jpg',
      link: '#catalog',
    },
  ];

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Productos destacados</h2>
            <p className="text-foreground/60 mt-2">Esenciales seleccionados para tu rutina diaria.</p>
          </div>
          <Link href="#catalog" className="text-accent font-semibold hover:underline text-sm md:text-base">
            Ver todas las categorías →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.link}
              className="group relative h-80 rounded-2xl overflow-hidden"
            >
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">{collection.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
