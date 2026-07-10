import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "بابونج طبيعي",
    description: "بابونج عالي الجودة مناسب للمشروبات العشبية.",
    price: 850,
    category: "الأعشاب",
    image: "/products/chamomile.jpg",
    stock: 20,
    featured: true,
  },
  {
    id: 2,
    name: "زيت الزيتون البكر",
    description: "زيت زيتون طبيعي معصور على البارد.",
    price: 1800,
    category: "الزيوت",
    image: "/products/olive-oil.jpg",
    stock: 15,
    featured: true,
  },
  {
    id: 3,
    name: "عسل طبيعي",
    description: "عسل نقي من المناحل المحلية.",
    price: 2500,
    category: "العسل",
    image: "/products/honey.jpg",
    stock: 10,
    featured: false,
  },
];