export interface Product {
  id: string;

  name: string;

  slug: string;

  description: string;

  price: number;

  stock: number;

  image: string;

  featured: boolean;

  available: boolean;

  categoryId: string;

  category: {
    id: string;
    name: string;
    slug: string;
  };
}