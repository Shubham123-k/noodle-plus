export const links = {
  map: 'https://www.google.com/maps/place/Noodle+Plus/@18.5653237,73.7987383,17z/data=!3m1!5s0x3bc2bf2bcbd3761b:0x94fdb921956c014b!4m15!1m8!3m7!1s0x3bc2bfe2a5d79f4f:0x180e12a65a178a9a!2sNoodle+Plus!8m2!3d18.5653237!4d73.8013186!10e9!16s%2Fg%2F11rqkyhk0s!3m5!1s0x3bc2bfe2a5d79f4f:0x180e12a65a178a9a!8m2!3d18.5653237!4d73.8013186!16s%2Fg%2F11rqkyhk0s?entry=ttu',
  zomato: 'https://www.zomato.com/pune/noodle-plus-aundh',
  swiggy: 'https://www.swiggy.com/city/pune/noodle-plus-aundh-rest363502',
  district: 'https://www.district.in/dining/pune/noodle-plus-aundh',
  instagram: 'https://www.instagram.com/noodlepluspune/?hl=en',
  phone: 'tel:09371665351',
};

export const restaurant = {
  name: 'Noodle Plus',
  subtitle: 'Pan Asian Cuisine',
  rating: '4.6',
  reviews: '350+',
  priceRange: '₹200–400 per person',
  phone: '093716 65351',
  address: 'Shop No. C9, Sai Heritage, Aundh–Baner Link Road, Shambhu Vihar Society, Baner, Pune, Maharashtra 411045',
  hours: 'Open daily · Closes 11:30 PM',
};

export const gallery = [
  { src: '/images/popular/popular-02.jpg', alt: 'Noodle bowl', label: 'Wok-fresh noodles' },
  { src: '/images/popular/popular-06.jpg', alt: 'Steamed dumplings', label: 'Steamed dumplings' },
  { src: '/images/popular/popular-08.jpg', alt: 'Manchurian', label: 'Saucy favourites' },
  { src: '/images/popular/popular-11.jpg', alt: 'Chicken wings', label: 'Sizzling plates' },
  { src: '/images/normal/normal-03.jpg', alt: 'Noodle Plus dining room', label: 'Our Baner space' },
  { src: '/images/normal/normal-04.jpg', alt: 'Rice and curry', label: 'Pan-Asian comfort' },
];

export const menuSections = [
  {
    category: 'Dumplings',
    image: '/images/menu/menu-01.jpg',
    items: [
      ['Vegetable Dumpling', 'Freshly cut cabbage, carrot, and mushroom filled in flour dough', 171, 'veg'],
      ['Spicy Green Vegetable Dumpling', 'Exotic green vegetables spiced to your taste', 185, 'veg'],
      ['Cottage Cheese Ginger Dumpling', 'Dumpling stuffed with paneer, ginger, green chilli and fried onion', 205, 'veg'],
      ['Special Veg Dumpling', 'Special dumpling stuffed with vermicelli noodles and exotic vegetables', 205, 'veg'],
      ['Chicken Dumpling', 'Classic chicken dumpling', 205, 'nonveg'],
      ['Burnt Garlic Basil Chicken Dumpling', 'Minced chicken, basil dumpling with chilli sauce', 205, 'nonveg'],
      ['Special Chicken Dumpling', 'Shredded chicken tossed with oyster sauce and curry powder, stuffed in fresh dough', 229, 'nonveg'],
    ],
  },
  {
    category: 'Rice',
    image: '/images/menu/menu-02.jpg',
    items: [
      ['Fried Rice', 'Fried rice tossed with vegetables', 320, 'veg', [355, 425]],
      ['Schezwan Fried Rice', 'Fried rice tossed in Chinese Szechuan pepper and garlic', 320, 'veg', [355, 425]],
      ['Burnt Garlic Rice', 'Wok tossed rice in vegetable, topped with spring onion', 320, 'veg', [355, 425]],
      ['Combination Rice', 'Classic taste of combination of rice and noodles', 320, 'veg', [355, 425]],
      ['Chilly Garlic Fried Rice', 'Wok tossed with chilli flakes and burnt garlic', 345, 'veg', [369, 449]],
      ['Butter Funchan Rice', 'Butter flavour rice with cube manchurian', 345, 'veg', [369, 449]],
      ['Nasi Goreng', 'Indonesian style stir fried rice flavoured with spicy sambal and sweet soy', 369, 'veg', [389, 459]],
      ['Triple Schezwan Rice', 'Classic schezwan rice served with Manchurian gravy', 369, 'veg', [389, 459]],
    ],
    variants: 'Veg · Egg · Chicken',
  },
  {
    category: 'Veg Appetizers',
    image: '/images/menu/menu-03.jpg',
    items: [
      ['Manchurian Dry', 'Vegetable balls in a spicy, sweet, and tangy sauce', 289, 'veg'],
      ['Shanghai Potato', 'Deep fry potato cubes in a tangy sweet chilli sauce', 289, 'veg'],
      ['Spring Roll', 'Deep fried rolls stuffed with vegetable', 309, 'veg'],
      ['Stir Fry Vegetable', 'Broccoli, baby corn, zucchini tossed in oyster sauce', 309, 'veg'],
      ['Veg Crispy', 'Asian vegetables tossed in sauces', 309, 'veg'],
      ['Crispy Corn', 'Corn kernels fried and later seasoned with ground spices & herbs', 401, 'veg'],
      ['Paneer/Mushroom Chilly', 'Paneer tossed in chilly soy with bell pepper and onion', 345, 'veg'],
      ['Crunchy Paneer', 'Crispy fried paneer served with special sauce', 345, 'veg'],
      ['Muster Chilly Paneer', 'Spring roll stuffed with cheese, baby corn and carrot', 345, 'veg'],
    ],
  },
  {
    category: 'Non-Veg Appetizers',
    image: '/images/menu/menu-04.jpg',
    items: [
      ['Butter Garlic Chicken', 'Butter fried slices of chicken tossed with garlic', 345, 'nonveg'],
      ['Chicken Chilly', 'Chicken portion cooked with 65 different spices', 345, 'nonveg'],
      ['Crunchy Chicken', 'Crispy fried chicken served with special sauce', 345, 'nonveg'],
      ['Chicken Lollipop', 'Chicken wing fried till crispy and juicy', 369, 'nonveg'],
      ['Peri Peri Chicken', 'Chicken slices tossed with peri peri sauce', 369, 'nonveg'],
      ['Korean BBQ Wing', 'Marinated aromatic wings with roasted sesame seed', 369, 'nonveg'],
      ['Masala Lollipop', 'Crispy chicken wings tossed with sauces', 401, 'nonveg'],
      ['Spicy Wings', 'Diced chicken thigh tossed in spicy sriracha sauce and wild pepper', 369, 'nonveg'],
      ['Kung Pao Chicken', 'Fried cube chicken tossed with kung pao sauce and roasted peanuts', 369, 'nonveg'],
      ['Drunken Red Chicken', 'Delicious tender meat cooked in Oyster Sauce, sprinkled with Chinese Wine', 369, 'nonveg'],
    ],
  },
  {
    category: 'Noodles',
    image: '/images/menu/menu-05.jpg',
    items: [
      ['Hakka Noodles', 'Classic stir-fried delicacy made with fresh flour noodles', 286, 'veg', [309, 343]],
      ['Burnt Garlic Noodles', 'Fresh flour noodles tossed in Garlic and Butter', 299, 'veg', [320, 355]],
      ['Schezwan Noodles', 'Fresh noodles tossed in Schezwan sauce with veggies', 299, 'veg', [320, 355]],
      ['Spicy Butter Garlic Noodles', 'Fresh noodles tossed in butter and topped with fried garlic', 333, 'veg', [355, 415]],
      ['Peri Peri Noodles', 'Mildly spicy noodles with Peri Peri seasoning', 333, 'veg', [355, 415]],
      ['Singapore Noodles', 'Flat noodles tossed in chilli paste, topped with spring onion', 333, 'veg', [355, 415]],
      ['Asian Chow Mein Noodles', 'Soya based fresh noodles tossed with veggies', 333, 'veg', [355, 415]],
      ['Spicy Sesame Noodles', 'Chef special noodles flavoured, roasted in sesame oil', 355, 'veg', [389, 449]],
      ['Chinese Dragon Noodles', 'Noodles tossed in special sauces and topped with chilli', 355, 'veg', [389, 449]],
      ['Lemon Chilli Basil Noodles', 'Thai basil flavour noodles', 355, 'veg', [389, 449]],
      ['Indian Kheema Noodles', 'Vegetable kheema with noodles', 355, 'veg', [449]],
    ],
    variants: 'Veg · Egg · Chicken',
  },
  {
    category: 'Sassy Sauces (Mains)',
    image: '/images/menu/menu-06.jpg',
    items: [
      ['Manchurian Sauce', 'Classic manchurian gravy', 287, 'veg', [345]],
      ['Peri Peri Sauce', 'Spicy peri peri sauce with veggies', 309, 'veg', [355]],
      ['Schezwan Sauce', 'Schezwan curry with veggies', 309, 'veg', [355]],
      ['Butter Garlic Sauce', 'Non spicy butter garlic combination sauce', 320, 'veg', [401]],
      ['Black Pepper Sauce', 'Soya base medium spicy black pepper sauce', 320, 'veg', [401]],
      ['Chilly Sauce', 'Classic paneer / mushroom gravy', 345, 'veg', [435]],
    ],
    variants: 'Veg · Chicken',
  },
  {
    category: 'Soups',
    image: '/images/menu/menu-07.jpg',
    items: [
      ['Hot & Sour Soup', 'Home style soup with vegetable', 185, 'veg', [205]],
      ['Manchow Soup', 'Classic Manchow soup in Light Soy', 185, 'veg', [205]],
      ['Clear Soup', 'Vegetable broth soup', 185, 'veg', [205]],
      ['Tomato Soup', 'Sweet and sour classic Tomato soup', 205, 'veg', [229]],
      ['Lemon Coriander Soup', 'Lemon and Coriander broth soup', 205, 'veg', [229]],
      ['Tom Kha Soup', 'Spicy sour coconut milk soup with Ginger and lemon grass', 229, 'veg', [250]],
      ['Talumian Soup', 'Light spicy soy noodles soup with vegetable', 229, 'veg', [250]],
    ],
    variants: 'Veg · Chicken',
  },
];

export const beverages = [
  ['Chocolate Wantons', 'Mini chocolate stuffed fried wantons with salted caramel sauce', 115, 'dessert'],
  ['Classic Ice Tea', 'A refreshing classic iced tea', 79, 'bev'],
  ['Lemon Ice Tea', 'Bright lemon iced tea', 99, 'bev'],
  ['Peach Ice Tea', 'Fruity peach iced tea', 119, 'bev'],
  ['Soft Drinks', 'Assorted soft drinks', null, 'bev'],
];

export const happyHours = [
  { title: 'Noodle / Rice + 2 pc semi gravy starter', prices: [179, 199, 229] },
  { title: 'Noodle / rice + 2 pc semi gravy starter + 1 pc momo', prices: [199, 229, 249] },
  { title: 'Noodle / rice + 2 pc semi gravy starter + 1 pc momo + cold drink', prices: [229, 249, 279] },
];
