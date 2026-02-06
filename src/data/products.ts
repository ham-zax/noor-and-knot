export type ProductCategory = "Everyday Pouches" | "Eid Gifts" | "Custom Orders";

export type Product = {
  id: string;
  name: string;
  description: string;
  fromPrice?: string;
  category: ProductCategory;
  image: string;
  featured?: boolean;
};

export const categories: ProductCategory[] = [
  "Everyday Pouches",
  "Eid Gifts",
  "Custom Orders",
];

export const products: Product[] = [
  {
    id: "drawstring-pouch",
    name: "Drawstring Pouch",
    description: "Elegant crochet pouch for daily essentials and gifting.",
    fromPrice: "From 65 AED",
    category: "Everyday Pouches",
    image: "/images/products/product-1.jpeg",
    featured: true,
  },
  {
    id: "phone-pouch",
    name: "Phone Pouch",
    description: "Soft structured fit with secure closure and clean profile.",
    fromPrice: "From 75 AED",
    category: "Everyday Pouches",
    image: "/images/products/product-2.jpeg",
  },
  {
    id: "mini-clutch",
    name: "Mini Clutch / Wallet",
    description: "Compact crochet clutch for cards, cash, and modest glam.",
    fromPrice: "From 60 AED",
    category: "Eid Gifts",
    image: "/images/products/product-3.jpeg",
  },
  {
    id: "eid-gift-set",
    name: "Eid Gift Pouch",
    description: "Gift-ready texture and tones for thoughtful festive giving.",
    fromPrice: "From 80 AED",
    category: "Eid Gifts",
    image: "/images/products/product-4.jpeg",
  },
  {
    id: "custom-order",
    name: "Custom Color Order",
    description: "Made-to-order palette for your preferred mood and style.",
    category: "Custom Orders",
    image: "/images/products/product-5.jpeg",
  },
];

export const miniGalleryImages = [
  "/images/products/product-1.jpeg",
  "/images/products/product-2.jpeg",
  "/images/products/product-4.jpeg",
  "/images/products/product-6.jpeg",
];
