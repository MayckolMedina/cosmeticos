import React from 'react';
import { Header } from '@/components/header';
import { ProductCatalog } from '@/components/product-catalog';
import { Footer } from '@/components/footer';

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-10">
        <ProductCatalog showFilters={true} title="Catálogo Completo K-shop" />
      </div>
      <Footer />
    </main>
  );
}
