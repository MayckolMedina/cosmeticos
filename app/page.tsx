import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { FeaturedCollections } from '@/components/featured-collections';
import { ProductCatalog } from '@/components/product-catalog';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedCollections />
      <ProductCatalog />
    </main>
  );
}
