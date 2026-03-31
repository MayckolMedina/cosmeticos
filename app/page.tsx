import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ProductCatalog } from '@/components/product-catalog';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 mb-2">Edición Limitada</p>
          <h2 className="text-2xl font-black uppercase tracking-tighter">Selección Destacada</h2>
        </div>
      </div>
      <ProductCatalog limit={4} showFilters={false} title="" />
      <Footer />
    </main>
  );
}
