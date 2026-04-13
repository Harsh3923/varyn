// Hotspot X/Y = percentage of viewport (fine-tune after placing room.jpg)
// Photo landmarks for reference:
//   Wardrobe hooks (left side) ........... x:15-20%, y:30-48%
//   Desk + chair area ................... x:32-58%, y:38-55%
//   Laundry basket (bottom-left) ........ x:7-14%,  y:82-92%
//   Bed (center-right) .................. x:52-90%, y:50-90%
//   Sneakers on rug ..................... x:18-25%, y:76-84%

export const products = [
  {
    id: 'vrn-sneaker-001',
    name: 'Varyn Low',
    price: 110,
    category: 'Footwear',
    description:
      'Clean low-top silhouette. Vulcanized rubber sole. Breathable canvas upper. Minimal branding.',
    colors: ['White', 'Black', 'Cream'],
    colorHex: ['#f5f2ec', '#1a1a1a', '#e8e0cc'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    // White sneakers on the rug
    hotspotX: 19,
    hotspotY: 78,
  },
  {
    id: 'vrn-pillow-001',
    name: 'Varyn Cover',
    price: 35,
    category: 'Home',
    description:
      'Soft woven cotton cover. 18"×18" insert included. "Good Days Ahead" embroidered in tonal thread.',
    colors: ['Ash', 'Navy', 'Cream'],
    colorHex: ['#b0aba4', '#1e3a5f', '#f0ebe2'],
    sizes: ['One Size'],
    // "Good Days Ahead" pillow on the bed
    hotspotX: 63,
    hotspotY: 63,
  },
  {
    id: 'vrn-towel-001',
    name: 'Varyn Towel',
    price: 42,
    category: 'Accessories',
    description:
      'Premium Turkish cotton. Oversized 35"×70". Quick-dry weave. Subtle woven logo at corner.',
    colors: ['Navy', 'Ash', 'Black'],
    colorHex: ['#1e3a5f', '#b0aba4', '#1a1a1a'],
    sizes: ['One Size'],
    // Blue towel hanging on wardrobe door hook
    hotspotX: 19,
    hotspotY: 41,
  },
]
