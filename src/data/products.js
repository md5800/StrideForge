// Realistic product catalog for StrideForge — images sourced from Unsplash.
// All images render through <ImageWithFallback>, which swaps to a local
// placeholder if the remote image fails to load.

const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const categories = [
  {
    id: "running",
    name: "Running",
    image: img("photo-1595950653106-6c9ebd614d3a"),
  },
  {
    id: "casual",
    name: "Casual",
    image: img("photo-1491553895911-0055eca6402d"),
  },
  {
    id: "basketball",
    name: "Basketball",
    image: img("photo-1606107557195-0e29a4b5b4aa"),
  },
  {
    id: "training",
    name: "Training",
    image: img("photo-1627847305741-8839cdc0b819"),
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    image: img("photo-1460353581641-37baddab0fa2"),
  },
  {
    id: "kids",
    name: "Kids",
    image: img("photo-1766129486324-2d8894484750"),
  },
];

const p = (overrides) => ({
  brand: "StrideForge",
  colors: ["#111111", "#ffffff", "#c0392b"],
  sizes: [6, 7, 8, 9, 10, 11, 12],
  rating: 4.5,
  reviews: 24,
  stock: 18,
  features: [
    "Breathable engineered mesh upper",
    "Responsive cushioned midsole",
    "Durable rubber outsole with multi-surface traction",
    "Reinforced heel counter for lockdown support",
  ],
  ...overrides,
});

export const products = [
  p({
    id: "sf-001",
    name: "Velocity Pro Runner",
    category: "running",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.7,
    reviews: 312,
    isFeatured: true,
    isNew: true,
    description:
      "Engineered for speed, the Velocity Pro Runner pairs a featherlight knit upper with responsive foam cushioning so every stride feels effortless — from tempo runs to race day.",
    images: [
      img("photo-1595950653106-6c9ebd614d3a"),
      img("photo-1542291026-7eec264c27ff"),
      img("photo-1600185365483-26d7a4cc7519"),
    ],
  }),
  p({
    id: "sf-002",
    name: "Cloudstrike Trainer",
    category: "training",
    price: 109.99,
    rating: 4.4,
    reviews: 156,
    isFeatured: true,
    description:
      "A stable, flat-bottomed platform built for lifting days and HIIT circuits alike. The Cloudstrike Trainer keeps you grounded when it matters and light on your feet everywhere else.",
    images: [
      img("photo-1627847305741-8839cdc0b819"),
      img("photo-1552346154-21d32810aba3"),
      img("photo-1465479423260-c4afc24172c6"),
    ],
  }),
  p({
    id: "sf-003",
    name: "Skyline Court Mid",
    category: "basketball",
    price: 149.99,
    oldPrice: 179.99,
    rating: 4.8,
    reviews: 421,
    isFeatured: true,
    isNew: true,
    description:
      "Explosive cushioning and a locked-in midtop collar give the Skyline Court Mid the responsiveness you need for quick cuts and the support you need to land safely.",
    images: [
      img("photo-1606107557195-0e29a4b5b4aa"),
      img("photo-1519865885898-a54a6f2c7eea"),
      img("photo-1595341888016-a392ef81b7de"),
    ],
  }),
  p({
    id: "sf-004",
    name: "Heritage Canvas Low",
    category: "casual",
    price: 79.99,
    rating: 4.3,
    reviews: 98,
    isFeatured: true,
    description:
      "A timeless low-top silhouette in brushed canvas with a cushioned footbed for all-day comfort. Pairs with everything from denim to chinos.",
    images: [
      img("photo-1491553895911-0055eca6402d"),
      img("photo-1525966222134-fcfa99b8ae77"),
      img("photo-1512374382149-233c42b6a83b"),
    ],
  }),
  p({
    id: "sf-005",
    name: "Metro Street Sneaker",
    category: "lifestyle",
    price: 94.99,
    rating: 4.5,
    reviews: 187,
    isFeatured: true,
    description:
      "Clean lines, a chunky retro sole, and premium leather accents make the Metro Street Sneaker a street-style staple that never tries too hard.",
    images: [
      img("photo-1460353581641-37baddab0fa2"),
      img("photo-1543163521-1bf539c55dd2"),
      img("photo-1571019613454-1cb2f99b2d8b"),
    ],
  }),
  p({
    id: "sf-006",
    name: "Junior Bolt Runner",
    category: "kids",
    price: 54.99,
    sizes: [1, 2, 3, 4, 5, 6],
    rating: 4.6,
    reviews: 73,
    isFeatured: true,
    description:
      "Built for playground sprints, the Junior Bolt Runner has a secure hook-and-loop closure and extra-durable toe cap so it can keep up with any kid.",
    images: [
      img("photo-1766129486324-2d8894484750"),
      img("photo-1624958797025-b119e2fa2b53"),
      img("photo-1605523741177-cd660595c2cf"),
    ],
  }),
  p({
    id: "sf-007",
    name: "Aero Mesh Racer",
    category: "running",
    price: 139.99,
    rating: 4.6,
    reviews: 204,
    isNew: true,
    description:
      "Ultra-breathable racing mesh wraps a carbon-infused plate for explosive toe-off on race day. Light enough to forget you're wearing them.",
    images: [
      img("photo-1587563871167-1ee9c731aefb"),
      img("photo-1533681904393-9ab6eee7e408"),
      img("photo-1595950653106-6c9ebd614d3a"),
    ],
  }),
  p({
    id: "sf-008",
    name: "Foundation Flat Trainer",
    category: "training",
    price: 99.99,
    oldPrice: 119.99,
    rating: 4.2,
    reviews: 88,
    description:
      "A wide, stable base built specifically for barbell work, with a low-profile heel and breathable upper for everything in between sets.",
    images: [
      img("photo-1552346154-21d32810aba3"),
      img("photo-1520256862855-398228c41684"),
      img("photo-1627847305741-8839cdc0b819"),
    ],
  }),
  p({
    id: "sf-009",
    name: "Apex Hoops High",
    category: "basketball",
    price: 169.99,
    rating: 4.9,
    reviews: 512,
    isFeatured: true,
    description:
      "The Apex Hoops High delivers pro-level ankle support and a dual-density cushioning system tuned for players who leave everything on the court.",
    images: [
      img("photo-1595341888016-a392ef81b7de"),
      img("photo-1519865885898-a54a6f2c7eea"),
      img("photo-1606107557195-0e29a4b5b4aa"),
    ],
  }),
  p({
    id: "sf-010",
    name: "Weekend Slip-On",
    category: "casual",
    price: 64.99,
    rating: 4.1,
    reviews: 65,
    description:
      "No laces, no fuss. The Weekend Slip-On uses a stretch knit collar for an easy in-and-out fit and a molded footbed for lazy Sunday comfort.",
    images: [
      img("photo-1525966222134-fcfa99b8ae77"),
      img("photo-1491553895911-0055eca6402d"),
      img("photo-1543163521-1bf539c55dd2"),
    ],
  }),
  p({
    id: "sf-011",
    name: "Retro Classic 88",
    category: "lifestyle",
    price: 89.99,
    oldPrice: 109.99,
    rating: 4.4,
    reviews: 143,
    description:
      "A faithful nod to '80s court style, rebuilt with modern comfort foam and premium suede overlays.",
    images: [
      img("photo-1512374382149-233c42b6a83b"),
      img("photo-1571019613454-1cb2f99b2d8b"),
      img("photo-1460353581641-37baddab0fa2"),
    ],
  }),
  p({
    id: "sf-012",
    name: "Junior Court Flex",
    category: "kids",
    price: 49.99,
    sizes: [1, 2, 3, 4, 5, 6],
    rating: 4.3,
    reviews: 41,
    description:
      "Flexible outsole grooves move with growing feet while a reinforced toe box handles everyday playground abuse.",
    images: [
      img("photo-1624958797025-b119e2fa2b53"),
      img("photo-1605523741177-cd660595c2cf"),
      img("photo-1766129486324-2d8894484750"),
    ],
  }),
  p({
    id: "sf-013",
    name: "Trailblaze GTX",
    category: "running",
    price: 154.99,
    rating: 4.7,
    reviews: 176,
    isNew: true,
    description:
      "Weatherproof membrane and an aggressive lugged outsole make the Trailblaze GTX the go-to for wet trails and unpredictable weather.",
    images: [
      img("photo-1600185365483-26d7a4cc7519"),
      img("photo-1542291026-7eec264c27ff"),
      img("photo-1587563871167-1ee9c731aefb"),
    ],
  }),
  p({
    id: "sf-014",
    name: "Circuit Cross Trainer",
    category: "training",
    price: 114.99,
    rating: 4.3,
    reviews: 92,
    description:
      "Multi-directional traction and a snug, supportive fit make the Circuit Cross Trainer equally at home on the rower or the box jump.",
    images: [
      img("photo-1465479423260-c4afc24172c6"),
      img("photo-1520256862855-398228c41684"),
      img("photo-1552346154-21d32810aba3"),
    ],
  }),
  p({
    id: "sf-015",
    name: "Baseline Low Top",
    category: "basketball",
    price: 134.99,
    rating: 4.5,
    reviews: 118,
    description:
      "A low-cut cut for guards who need to move — quick lateral support without sacrificing an ounce of speed.",
    images: [
      img("photo-1519865885898-a54a6f2c7eea"),
      img("photo-1595341888016-a392ef81b7de"),
      img("photo-1606107557195-0e29a4b5b4aa"),
    ],
  }),
  p({
    id: "sf-016",
    name: "Suede Original Low",
    category: "casual",
    price: 74.99,
    rating: 4.2,
    reviews: 77,
    description:
      "Soft suede panels and a gum rubber sole give the Suede Original Low its unmistakable, laid-back character.",
    images: [
      img("photo-1543163521-1bf539c55dd2"),
      img("photo-1512374382149-233c42b6a83b"),
      img("photo-1525966222134-fcfa99b8ae77"),
    ],
  }),
  p({
    id: "sf-017",
    name: "Nightwalk Boot Sneaker",
    category: "lifestyle",
    price: 119.99,
    oldPrice: 139.99,
    rating: 4.6,
    reviews: 134,
    description:
      "Part sneaker, part boot — the Nightwalk crosses a rugged silhouette with sneaker-level comfort for the city after dark.",
    images: [
      img("photo-1571019613454-1cb2f99b2d8b"),
      img("photo-1460353581641-37baddab0fa2"),
      img("photo-1608231387042-66d1773070a5"),
    ],
  }),
  p({
    id: "sf-018",
    name: "Junior Sprint Light",
    category: "kids",
    price: 47.99,
    sizes: [1, 2, 3, 4, 5, 6],
    rating: 4.4,
    reviews: 58,
    description:
      "Ultra-light and machine washable, the Junior Sprint Light is made for kids who are hard on shoes and their parents' patience.",
    images: [
      img("photo-1605523741177-cd660595c2cf"),
      img("photo-1766129486324-2d8894484750"),
      img("photo-1624958797025-b119e2fa2b53"),
    ],
  }),
  p({
    id: "sf-019",
    name: "Momentum Foam Runner",
    category: "running",
    price: 124.99,
    rating: 4.5,
    reviews: 231,
    isFeatured: true,
    description:
      "A plush, full-length foam stack absorbs impact mile after mile, so easy runs stay easy and long runs feel shorter.",
    images: [
      img("photo-1542291026-7eec264c27ff"),
      img("photo-1600185365483-26d7a4cc7519"),
      img("photo-1595950653106-6c9ebd614d3a"),
    ],
  }),
  p({
    id: "sf-020",
    name: "Ironclad Gym Trainer",
    category: "training",
    price: 104.99,
    rating: 4.1,
    reviews: 64,
    description:
      "A no-nonsense trainer with a reinforced heel clip and rope-climbing sidewall protection for whatever the WOD throws at you.",
    images: [
      img("photo-1520256862855-398228c41684"),
      img("photo-1465479423260-c4afc24172c6"),
      img("photo-1627847305741-8839cdc0b819"),
    ],
  }),
  p({
    id: "sf-021",
    name: "Rimshot Elite High",
    category: "basketball",
    price: 179.99,
    oldPrice: 199.99,
    rating: 4.8,
    reviews: 289,
    isNew: true,
    description:
      "Our most cushioned hoops shoe yet, tuned with a dual-air pocket heel for players who play above the rim.",
    images: [
      img("photo-1595341888016-a392ef81b7de"),
      img("photo-1606107557195-0e29a4b5b4aa"),
      img("photo-1519865885898-a54a6f2c7eea"),
    ],
  }),
  p({
    id: "sf-022",
    name: "Boardwalk Canvas Slip",
    category: "casual",
    price: 59.99,
    rating: 4.0,
    reviews: 52,
    description:
      "A breathable canvas slip-on with a rope-stitched sole — beach-day comfort that holds up on city sidewalks too.",
    images: [
      img("photo-1525966222134-fcfa99b8ae77"),
      img("photo-1543163521-1bf539c55dd2"),
      img("photo-1491553895911-0055eca6402d"),
    ],
  }),
  p({
    id: "sf-023",
    name: "Vantage Point Sneaker",
    category: "lifestyle",
    price: 99.99,
    rating: 4.3,
    reviews: 96,
    description:
      "A minimalist upper with tonal stitching and a sculpted midsole that looks as good with tailoring as it does with denim.",
    images: [
      img("photo-1608231387042-66d1773070a5"),
      img("photo-1460353581641-37baddab0fa2"),
      img("photo-1571019613454-1cb2f99b2d8b"),
    ],
  }),
  p({
    id: "sf-024",
    name: "Junior Court Champ",
    category: "kids",
    price: 52.99,
    sizes: [1, 2, 3, 4, 5, 6],
    rating: 4.5,
    reviews: 47,
    description:
      "A scaled-down hoops silhouette with a durable rubber cupsole built for the driveway league.",
    images: [
      img("photo-1766129486324-2d8894484750"),
      img("photo-1605523741177-cd660595c2cf"),
      img("photo-1624958797025-b119e2fa2b53"),
    ],
  }),
];

export const getProductById = (id) => products.find((prod) => prod.id === id);

export const getRelatedProducts = (product, limit = 4) =>
  products
    .filter((p2) => p2.category === product.category && p2.id !== product.id)
    .slice(0, limit);
