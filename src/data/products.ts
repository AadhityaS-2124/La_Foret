export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  alt: string;
  category: 'outerwear' | 'trousers' | 'knitwear' | 'apparel' | 'accessories';
  materials: string;
  sizing: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "01",
    name: "Structural Blazer",
    price: 340,
    category: "outerwear",
    description: "Close-up architectural detail of a structural blazer in heavy black linen. The focus is on a single, perfectly executed lapel edge and the subtle texture of the sustainable fabric.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpRR5MSf6-XLJ--c6KlJyXPfa3287xxxCE7W6MmBUOB4G7fV-wwCTy4NkMacnsgl5xCsLKWPvqECO6o0uxE8aJp4lrKd-k-A52EMnsxTfDpXFNyCcoGIo18dU0EjiaUQ2z0i1yHwzqDsUo_LWkOMiePynOugq5pvdjnUIZAUmZZrJFaUD6QD7EJNduZlueaYeiNuf8u1p-0P7ghtciQiSkB0ziyd1CUUwRReakyETnzvq4tZanaF1EKHSnIH1AeTS8NZsuBVqfB0U",
    alt: "Close-up architectural detail of a structural blazer in heavy black linen. The focus is on a single, perfectly executed lapel edge and the subtle texture of the sustainable fabric. The lighting is harsh and directional, emphasizing the clean lines and absence of unnecessary ornamentation.",
    materials: "100% Belgian Organic Linen, treated with charcoal dye.",
    sizing: "Designed for a relaxed, architectural fit. Take your normal size. Model is 6'1\" and wearing size M.",
    details: [
      "Zero-waste pattern layout",
      "Single-button closure with organic horn detail",
      "Interior minimalist passport pocket",
      "Kyoto atelier hand-stitched detailing"
    ]
  },
  {
    id: "02",
    name: "Column Trouser",
    price: 280,
    category: "trousers",
    description: "Minimalist trousers displayed as a geometric form, folded precisely against a light cream concrete backdrop. The fabric is a soft, organic cotton-hemp blend in a muted stone color.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdss5TBTALm25B5dPIonxKrtPCuDpHp1F74KU_BmCNw1XGJf2tDkPbs5VP5a-zIct5XfGljHCdDrveufgfbOkM8VG90agtoHJ4GX0v2gYoACSucvM6C6VOXt4p_8AfebRNFbnw4G6tHU0oZusfoP5l2ISX8gVHso93u211Xvel4DVZOb4zGB6cjgQ8yqX9eGtS_NJD9wUWGptSrDKvBsHeBkdaNSlYyGGZHfL54lQb-2ehBQpFOZ09P0CSR0B2VPErjYb95MJ625w",
    alt: "Minimalist trousers displayed as a geometric form, folded precisely against a light cream concrete backdrop. The fabric is a soft, organic cotton-hemp blend in a muted stone color. Soft daylight diffuses the scene, maintaining the hard-edge minimalist aesthetic while highlighting the functional silhouette.",
    materials: "60% Organic Cotton, 40% Raw Hemp, earth-derived pigment wash.",
    sizing: "Straight structural cut. High-waisted profile. Fits true to size.",
    details: [
      "No-pleat flat front profile",
      "Concealed side seam pockets",
      "Adjustable internal waist tabs",
      "Zero plastic components"
    ]
  },
  {
    id: "03",
    name: "Sculptural Knit",
    price: 410,
    category: "knitwear",
    description: "An oversized sculptural knit sweater in ivory wool, captured from a side profile to emphasize its architectural drape. The sweater is set against a dark ebony wood background, creating high contrast.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxY-2a09E3NVufAzWPgGXao70cl7XzXNXn83RBmGZl7OdKH8svZd60gk4kCQk5qmN5Ih07R9uSywEbATegQGZG1dJE-aIfkpw9ZNBf4fczsief5G_ZnuNRGLEDnSswVlduESKf4kxlpiHby_2slZNPWBys-zyIjc48V6_xMaXvKYhtA_P8vZxW5B6gitLUxYt5l7ZLB4AoEUoZDKz-IIylcvBCbp5aeA6XOxylV4E4CBZXcB6cGTqOtH3HlFFBHO9RpPjCpACQRwA",
    alt: "An oversized sculptural knit sweater in ivory wool, captured from a side profile to emphasize its architectural drape. The sweater is set against a dark ebony wood background, creating high contrast. The mood is serene and expensive, focusing on the tactile quality of the knit and its geometric simplicity.",
    materials: "100% Traceable New Zealand Merino Wool.",
    sizing: "Oversized, cocoon silhouette. For a more tailored appearance, size down one size.",
    details: [
      "Heavyweight 5-gauge knit construction",
      "Ribbed mock collar detailing",
      "Extended sleeve silhouette",
      "Fully biodegradable packaging"
    ]
  },
  {
    id: "04",
    name: "Minimal Linen Shirt",
    price: 210,
    category: "apparel",
    description: "A tailored, ultra-clean button-up shirt in organic cream linen. The collar is flat and minimal, omitting all breast pockets to achieve a pure architectural chest line.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
    alt: "A tailored, ultra-clean button-up shirt in organic cream linen with a flat collar.",
    materials: "100% Organic Flax Linen.",
    sizing: "Regular fit. Tailored shoulder profile with relaxed waist draping.",
    details: [
      "Hidden button placket",
      "Band collar construction",
      "Mother of pearl minimalist buttons",
      "Pre-washed for architectural soft-crinkle texture"
    ]
  },
  {
    id: "05",
    name: "Atelier Slipper",
    price: 140,
    category: "accessories",
    description: "Indoor atelier slippers constructed from raw vegetable-tanned leather. The design wraps around the foot in a single diagonal seam, matching the geometry of traditional origami folding.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800",
    alt: "Indoor atelier slippers constructed from raw vegetable-tanned leather.",
    materials: "100% Organic Vegetable-Tanned Cowhide Leather.",
    sizing: "Flexible leather sizing. Moulds to the shape of the foot after 2 days of wear.",
    details: [
      "Single-seam folded geometry",
      "Breathable untreated leather lining",
      "Suede anti-slip sole",
      "Crafted by leather artisans in Kyoto"
    ]
  },
  {
    id: "06",
    name: "Studio Tote Bag",
    price: 190,
    category: "accessories",
    description: "A large architectural carryall bag in heavy organic cotton canvas and raw leather detailing. Built to house portfolios, blueprints, and journals with zero sag.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    alt: "A large architectural carryall bag in heavy organic cotton canvas and raw leather detailing.",
    materials: "24oz Organic Cotton Canvas, Full-Grain Bridle Leather straps.",
    sizing: "One size: 45cm x 35cm x 15cm. Handle drop is 22cm.",
    details: [
      "Structural reinforced base panel",
      "Internal padded sleeve for 16-inch laptops",
      "Dual hidden key ring clips",
      "Bespoke copper hardware rivets"
    ]
  }
];
