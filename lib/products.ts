export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'Fanshop' | 'Moda' | 'Alimentos' | 'Belleza';
  isNew?: boolean;
  onSale?: boolean;
}

export const PRODUCTS: Product[] = [
  // Fanshop (Blackpink / BTS / Others)
  {
    id: 101,
    name: 'Set de Stickers Blackpink Pink Venom',
    category: 'Fanshop',
    price: 12.0,
    image: 'https://i.pinimg.com/736x/46/62/61/4662614cfdb021fb5e088e65fb453ca7.jpg',
    isNew: true,
  },
  {
    id: 102,
    name: 'BTS Proof Photocard Pack (Limited)',
    category: 'Fanshop',
    price: 15.0,
    image: 'https://images.meesho.com/images/products/241304461/oispq_512.webp?width=512',
    isNew: false,
  },
  {
    id: 103,
    name: 'Llavero Coleccionable Suga D-Day',
    category: 'Fanshop',
    price: 8.5,
    image: 'https://fbi.cults3d.com/uploaders/44677937/illustration-file/ed38460a-0542-4817-b989-72b86c461f86/D-day.jpg',
    isNew: false,
  },
  {
    id: 104,
    name: 'Photobook Blackpink Born Pink',
    category: 'Fanshop',
    price: 35.0,
    image: 'https://nekomatashop.com/cdn/shop/files/photobook-39.jpg?v=1716411530',
    isNew: true,
  },

  // Moda
  {
    id: 201,
    name: 'Hoodie Oversize Seoul Streetwear',
    category: 'Moda',
    price: 49.0,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 202,
    name: 'Gorra Minimalista K-Collective Black',
    category: 'Moda',
    price: 25.0,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    isNew: false,
  },
  {
    id: 203,
    name: 'Chaqueta Varsity Seoul Academy',
    category: 'Moda',
    price: 75.0,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 204,
    name: 'Conjunto de Calcetines Pastel Socks',
    category: 'Moda',
    price: 18.0,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=800&auto=format&fit=crop',
    isNew: false,
  },

  // Alimentos
  {
    id: 301,
    name: 'Ramen Hot Chicken Extra Spicy',
    category: 'Alimentos',
    price: 4.5,
    image: 'https://http2.mlstatic.com/D_NQ_NP_887411-MLU78388832969_082024-O.webp',
    onSale: true,
  },
  {
    id: 302,
    name: 'Leche de Plátano Tradicional (Set)',
    category: 'Alimentos',
    price: 12.0,
    image: 'https://www.amsdairy.com/assets/images/products/yakult-original.jpg',
    isNew: true,
  },
  {
    id: 303,
    name: 'Soju Clásico',
    category: 'Alimentos',
    price: 6.0,
    image: 'https://assimarket.pe/cdn/shop/files/42.jpg?v=1693341320',
    onSale: false,
  },
  {
    id: 304,
    name: 'Set de Snacks Coreanos Mix Pack',
    category: 'Alimentos',
    price: 22.0,
    image: 'https://m.media-amazon.com/images/I/91snupd+HLL.jpg',
    isNew: true,
  },

  // Belleza
  {
    id: 401,
    name: 'Advanced Snail Mucin Essence',
    category: 'Belleza',
    price: 28.0,
    image: 'https://media.falabella.com/falabellaPE/152387118_01/w=1500,h=1500,fit=cover',
    isNew: true,
  },
  {
    id: 402,
    name: 'Cushion Foundation Glow Pro',
    category: 'Belleza',
    price: 32.0,
    image: 'https://image-cdn.ubuy.com/espoir-pro-tailor-be-glow-cushion-new/400_400_100/681d8a4800a6754eb507c191.jpg',
    isNew: false,
  },
  {
    id: 403,
    name: 'Lip Glow Oil Color Boost',
    category: 'Belleza',
    price: 14.5,
    image: 'https://http2.mlstatic.com/D_Q_NP_945242-MLA87755799650_072025-O.webp',
    onSale: true,
  },
  {
    id: 404,
    name: 'Rice Toner Brightening Formula',
    category: 'Belleza',
    price: 24.0,
    image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/skf/skf67657/l/19.jpg',
    isNew: false,
  },
];
