export type ProductCategory = "Everyday Pouches" | "Eid Gifts" | "Custom Orders";

export type Product = {
  id: string;
  name: string;
  description: string;
  attribute: string;
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
    attribute: "Pearl detail • Drawstring",
    fromPrice: "From INR 1,500",
    category: "Everyday Pouches",
    image: "/images/products/crochet-7.jpeg",
    featured: true,
  },
  {
    id: "phone-pouch",
    name: "Phone Pouch",
    description: "Soft structured fit with secure closure and clean profile.",
    attribute: "Secure strap • Everyday carry",
    fromPrice: "From INR 1,700",
    category: "Everyday Pouches",
    image: "/images/products/legacy-1.jpeg",
  },
  {
    id: "mini-clutch",
    name: "Mini Clutch / Wallet",
    description: "Compact crochet clutch for cards, cash, and modest glam.",
    attribute: "Compact fit • Hand-finished",
    fromPrice: "From INR 1,350",
    category: "Eid Gifts",
    image: "/images/products/crochet-6.jpeg",
  },
  {
    id: "eid-gift-set",
    name: "Eid Gift Pouch",
    description: "Gift-ready texture and tones for thoughtful festive giving.",
    attribute: "Gift-ready • Festive palette",
    fromPrice: "From INR 1,800",
    category: "Eid Gifts",
    image: "/images/products/crochet-5.jpeg",
  },
  {
    id: "custom-order",
    name: "Custom Color Order",
    description: "Made-to-order palette for your preferred mood and style.",
    attribute: "Color-custom • Made to order",
    category: "Custom Orders",
    image: "/images/products/legacy-2.jpeg",
  },
];

export type GalleryMedia = {
  type: "image" | "video";
  src: string;
};

export const miniGalleryMedia: GalleryMedia[] = [
  { type: "image", src: "/images/products/crochet-7.jpeg" },
  { type: "video", src: "/videos/products/video-1.mp4" },
  { type: "image", src: "/images/products/legacy-1.jpeg" },
  { type: "video", src: "/videos/products/video-2.mp4" },
];
