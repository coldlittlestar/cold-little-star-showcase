export type Platform = "eBay" | "Depop" | "Mercari" | "Vinted" | "Poshmark";

export type Product = {
  id: string;
  title: string;
  size: string;
  fit: string;
  price: number;
  category: "Retro Tops" | "Outerwear" | "Y2K Style" | "Nostalgic Finds";
  badge: "Chilly Find" | "Grail";
  image: string;
  platform: Platform;
  url: string;
  blurb: string;
};

export const CATEGORIES = [
  "All Items",
  "Retro Tops",
  "Outerwear",
  "Y2K Style",
  "Nostalgic Finds",
] as const;

export const PLATFORMS: { name: Platform; url: string; color: string }[] = [
  { name: "eBay", url: "https://www.ebay.com", color: "var(--color-star)" },
  { name: "Depop", url: "https://www.depop.com", color: "var(--color-coral)" },
  { name: "Mercari", url: "https://www.mercari.com", color: "var(--color-mint)" },
  { name: "Vinted", url: "https://www.vinted.com", color: "var(--color-grape)" },
  { name: "Poshmark", url: "https://poshmark.com", color: "var(--color-coral)" },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Sun-Faded Varsity Crewneck",
    size: "Size M",
    fit: "Boxy 90s Fit",
    price: 48,
    category: "Retro Tops",
    badge: "Chilly Find",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80&auto=format&fit=crop",
    platform: "Depop",
    url: "https://www.depop.com",
    blurb: "Heavyweight cotton crew with chain-stitched athletic patch. Honest fade across the shoulders.",
  },
  {
    id: "2",
    title: "Quilted Liner Chore Jacket",
    size: "Size L",
    fit: "Oversized Drop-Shoulder",
    price: 124,
    category: "Outerwear",
    badge: "Grail",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80&auto=format&fit=crop",
    platform: "eBay",
    url: "https://www.ebay.com",
    blurb: "Workwear-weight twill with quilted satin lining. The collar stand is *chef's kiss*.",
  },
  {
    id: "3",
    title: "Butterfly Mesh Baby Tee",
    size: "Size XS",
    fit: "Cropped Y2K",
    price: 32,
    category: "Y2K Style",
    badge: "Chilly Find",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80&auto=format&fit=crop",
    platform: "Depop",
    url: "https://www.depop.com",
    blurb: "Iridescent butterfly print on stretchy mesh. Pure 2003 mall energy.",
  },
  {
    id: "4",
    title: "Holographic Trucker Cap",
    size: "One Size",
    fit: "Adjustable Snapback",
    price: 28,
    category: "Nostalgic Finds",
    badge: "Chilly Find",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80&auto=format&fit=crop",
    platform: "Mercari",
    url: "https://www.mercari.com",
    blurb: "Foil mesh that shifts pink-to-cyan in sunlight. Lightly worn brim.",
  },
  {
    id: "5",
    title: "Chunky Trail Runners '99",
    size: "Size 8.5",
    fit: "True-to-Size",
    price: 96,
    category: "Nostalgic Finds",
    badge: "Grail",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    platform: "eBay",
    url: "https://www.ebay.com",
    blurb: "OG chunky silhouette with reflective hits. Outsoles still grippy.",
  },
  {
    id: "6",
    title: "Cropped Reflective Windbreaker",
    size: "Size S",
    fit: "Slim Crop",
    price: 72,
    category: "Outerwear",
    badge: "Chilly Find",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&auto=format&fit=crop",
    platform: "Vinted",
    url: "https://www.vinted.com",
    blurb: "3M piping that lights up under flash. Hidden hood, zip pockets.",
  },
  {
    id: "7",
    title: "Tie-Dye Ringer Tee",
    size: "Size M",
    fit: "Slim Vintage",
    price: 36,
    category: "Retro Tops",
    badge: "Chilly Find",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80&auto=format&fit=crop",
    platform: "Poshmark",
    url: "https://poshmark.com",
    blurb: "Single-stitch ringer in tangerine swirl. Buttery hand-feel.",
  },
  {
    id: "8",
    title: "Beaded Star Crossbody",
    size: "Mini",
    fit: "Adjustable Strap",
    price: 54,
    category: "Y2K Style",
    badge: "Grail",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80&auto=format&fit=crop",
    platform: "Depop",
    url: "https://www.depop.com",
    blurb: "Hand-beaded shooting star motif. Magnetic closure, satin lined.",
  },
];
