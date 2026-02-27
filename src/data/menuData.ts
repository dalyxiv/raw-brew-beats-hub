export interface MenuItem {
  name: string;
  price: number | string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Hot Coffee",
    items: [
      { name: "Espresso", price: 70 },
      { name: "Espresso Macchiato", price: 75 },
      { name: "Americano", price: 80 },
      { name: "Cortado", price: 95 },
      { name: "Espresso Affogato", price: 110 },
      { name: "Flat White", price: 95 },
      { name: "Cappuccino", price: 105 },
      { name: "Latte", price: 105 },
      { name: "Spanish Latte", price: 130 },
      { name: "Kinder Latte", price: 130 },
      { name: "Lotus Latte", price: 130 },
      { name: "Pistachio Latte", price: 150 },
      { name: "Mocha / White Mocha", price: 140 },
      { name: "Caramel Macchiato", price: 140 },
      { name: "Salted Caramel Latte", price: 135 },
      { name: "Tiramisu Latte", price: 195 },
    ],
  },
  {
    title: "Ice Coffee",
    items: [
      { name: "Ice Americano", price: 80 },
      { name: "Ice Latte", price: 105 },
      { name: "Ice Spanish Latte", price: 130 },
      { name: "Ice Pistachio Latte", price: 150 },
      { name: "Ice Caramel Latte", price: 135 },
      { name: "Ice Mocha", price: 140 },
      { name: "Ice White Mocha", price: 140 },
      { name: "Ice Caramel Macchiato", price: 135 },
      { name: "Ice Salted Caramel", price: 135 },
    ],
  },
  {
    title: "Pourover Coffee",
    items: [{ name: "V60 / Frenchpress", price: 160 }],
  },
  {
    title: "Matcha",
    items: [
      { name: "Hot Matcha", price: 140 },
      { name: "Hot Spanish Matcha", price: 150 },
      { name: "Hot White Matcha", price: 150 },
      { name: "Hot Salted Matcha", price: 150 },
      { name: "Ice Matcha", price: 140 },
      { name: "Ice White Matcha", price: 150 },
      { name: "Ice Spanish Matcha", price: 150 },
      { name: "Matcha Frappe", price: 150 },
      { name: "Spanish Matcha Frappe", price: 160 },
      { name: "White Matcha Frappe", price: 160 },
      { name: "Salted Matcha Frappe", price: 160 },
    ],
  },
  {
    title: "Coffee Frappe",
    items: [
      { name: "Latte", price: 115 },
      { name: "Spanish Latte", price: 135 },
      { name: "Mocha", price: 145 },
      { name: "White Mocha", price: 145 },
      { name: "Caramel Frappe", price: 135 },
      { name: "Pistachio Frappe", price: 160 },
      { name: "Salted Caramel", price: 140 },
      { name: "Lotus Frappe", price: 140 },
      { name: "Kinder Frappe", price: 140 },
    ],
  },
  {
    title: "Winter Fuel Station",
    items: [
      { name: "French Hot Chocolate (Belgian)", price: 155 },
      { name: "Orange Mocha Latte", price: 159 },
      { name: "Peppermint Mocha", price: 158 },
      { name: "Salted Caramel Mocha", price: 169 },
      { name: "Carrot Cake Latte", price: 161 },
      { name: "Sweet Corn Latte", price: 155 },
      { name: "Sweet Potato Latte", price: 165 },
      { name: "Magdool Latte", price: 153 },
    ],
  },
  {
    title: "Mojito",
    items: [
      { name: "Passion Fruit / Cherry / Blue", price: 140 },
      { name: "Pineapple / Blueberry", price: 140 },
    ],
  },
  {
    title: "Ice Tea",
    items: [{ name: "Peach / MixBerries / Lemon", price: 130 }],
  },
  {
    title: "Redbull Mocktail",
    items: [{ name: "Espresso / Passion Fruit / Blueberry", price: 185 }],
  },
  {
    title: "Hot Drinks",
    items: [
      { name: "Tea / Herbal Drinks", price: 60 },
      { name: "Karak Tea", price: 115 },
      { name: "Hot Chocolate", price: 125 },
    ],
  },
  {
    title: "Extra",
    items: [
      { name: "Extra Flavor", price: 30 },
      { name: "Extra Milk", price: 30 },
      { name: "Extra Condensed Milk", price: 40 },
      { name: "Matcha Shot", price: 70 },
      { name: "Almond Milk", price: 55 },
      { name: "Coconut Milk", price: 55 },
      { name: "Oat Milk", price: 55 },
      { name: "Espresso Shot", price: 35 },
    ],
  },
  {
    title: "Bottled & Canned",
    items: [
      { name: "Water", price: 20 },
      { name: "Sparkling Water", price: 55 },
      { name: "Redbull", price: 110 },
      { name: "V-Cola", price: 60 },
    ],
  },
  {
    title: "Bakery",
    items: [
      { name: "Plain Croissant", price: 80 },
      { name: "Pain Suisse", price: 120 },
      { name: "Zaater Croissant", price: 99 },
      { name: "Cheese Croissant", price: 99 },
      { name: "Almond Croissant", price: 140 },
      { name: "Chocolate Croissant", price: 119 },
      { name: "Pistachio Croissant", price: 135 },
      { name: "Danish Croissant", price: 120 },
      { name: "Danish Nutella", price: 120 },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Roast Beef Sandwich", price: 200 },
      { name: "Tuna Sandwich", price: 165 },
      { name: "Halloumi Sandwich", price: 162 },
      { name: "Turkey & Cheese Sandwich", price: 160 },
      { name: "Spicy Chicken Sandwich", price: 160 },
    ],
  },
  {
    title: "Salad",
    items: [
      { name: "Chicken Caesar Salad", price: 175 },
      { name: "Pasta Chicken Salad", price: 175 },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Blueberry Cheesecake", price: 130 },
      { name: "Tiramisu", price: 139 },
      { name: "Chocolate Fudge Cake", price: 130 },
      { name: "Honey Cake", price: 130 },
      { name: "Carrot Cake", price: 150 },
      { name: "Brownies Mini", price: 97 },
    ],
  },
  {
    title: "Cookies",
    items: [
      { name: "Original Cookies", price: 90 },
      { name: "Triple Chocolate Cookies", price: 90 },
      { name: "Red Velvet Cookies", price: 90 },
      { name: "Dubai Cookies", price: 100 },
      { name: "Pecan Salted Caramel", price: 100 },
      { name: "Coffee Cookies", price: 100 },
      { name: "Pistachio Cookies", price: 100 },
      { name: "Oats Cookies", price: 100 },
      { name: "Morgan Kinder Cookies", price: 100 },
    ],
  },
];
