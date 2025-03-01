import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  
  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'soups_salads', name: 'Soups & Salads' },
    { id: 'sandwiches', name: 'Sandwiches' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
  ];
  
  const menuItems = {
    starters: [
      {
        name: 'Wings (4)',
        description: 'A generous portion of hot or mild.',
        price: '$5.99',
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Wings (8)',
        description: 'Double the portion of your favorite hot or mild wings.',
        price: '$9.99',
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Homemade Garlic Bread',
        description: 'Freshly baked and topped with garlic butter.',
        price: '$1.99',
        image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24427f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Basket of Brew City Fries',
        description: 'Beer battered fries made fresh on order.',
        price: '$4.49',
        image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Toasted Cheese Bread',
        description: 'Our homemade bread topped with melted cheese.',
        price: '$3.89',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Chicken Tender Basket',
        description: 'Four signature chicken tenders served with french fries and your choice of Honey Mustard or BBQ sauce. Try them Buffalo style for $1 more!',
        price: '$7.99',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Pizza Bread',
        description: 'Add pizza toppings for just 50¢ each!',
        price: '$3.99',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
    ],
    soups_salads: [
      {
        name: 'Soup Du Jour',
        description: 'We offer two delicious soups that change daily! Call and ask for today\'s specials.',
        price: '$3.99',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Grilled or Fried Chicken Salad',
        description: 'A healthy salad with all the good stuff, topped with marinated grilled, or hearty fried chicken, and served with homemade garlic bread.',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Our Hearty Meaty Chili',
        description: 'Seasonal.',
        price: '$4.49',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Tossed Salad',
        description: 'Fresh greens with your choice of dressing.',
        price: '$2.99',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Garden Salad',
        description: 'Our largest salad with all the veggies and cheese.',
        price: '$6.49',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
    ],
    sandwiches: [
      {
        name: 'Chicken Salad',
        description: 'Pulled chicken, diced celery, spices. Served with chips and a dill spear.',
        price: '$6.99',
        image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Albacore Tuna Apple',
        description: 'Made with chopped apple, celery seed, tuna, salt and pepper. Served with chips and a dill spear.',
        price: '$6.99',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'The Vegetarian Sub',
        description: 'Fresh green peppers, mushrooms, onions, green and black olives topped with Provolone cheese, lettuce, tomatoes and our herb vinaigrette dressing.',
        price: '$6.99',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'The Italian Sub',
        description: 'Salami, capicola, Provolone, onions, banana peppers, lettuce, tomato and Italian dressing.',
        price: '$8.29',
        image: 'https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'The Meatball Sub',
        description: 'Made with our rich tomato sauce, Provolone and yummy meatballs.',
        price: '$8.29',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'The Stromboli Sub',
        description: 'A chopped steak patty with tomato sauce and Provolone cheese.',
        price: '$8.29',
        image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'The Ham-N-Cheese Sub',
        description: 'Ham, Provolone, lettuce, tomato and onions.',
        price: '$7.99',
        image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'The Pizza Sub',
        description: 'Choose three toppings from the pizza section.',
        price: '$7.99',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Portabella Sandwich',
        description: 'Portabella cap grilled and seasoned to perfection with Provolone, lettuce and tomato.',
        price: '$6.49',
        image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Grilled Veggie Burger',
        description: 'Vegetarian burger grilled and topped with lettuce and tomato. Add cheese for 50¢!',
        price: '$8.49',
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'The Chicken Philly',
        description: 'Chicken breast with sauteed onions, green peppers, and Provolone cheese.',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'The Philly Steak Sub',
        description: 'Choice sirloin with sauteed onions, peppers and Provolone cheese.',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1511344407683-b1172dce025f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Papa Burger',
        description: '1/3lb of Certified Angus Beef specially seasoned with lettuce, tomato and onion served on Papaleno bread. Add bacon for $1 and cheese for 50¢.',
        price: '$6.49',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Grilled Chicken Sandwich',
        description: 'Chicken breast grilled and seasoned to perfection, topped with lettuce and tomato.',
        price: '$6.99',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
    ],
    pizza: [
      {
        name: 'The Mountaineer',
        description: 'A mountain of toppings include pepperoni, Italian sausage, beef, black and green olives, mushrooms, onions, green and banana peppers.',
        price: 'From $14.99',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
        sizes: [
          { size: '10"', price: '$14.99' },
          { size: '14"', price: '$16.99' },
          { size: '16"', price: '$19.99' },
        ]
      },
      {
        name: 'The Vegetarian',
        description: 'A vegetarian\'s delight topped with green and black olives, mushrooms, onions and green peppers.',
        price: 'From $13.99',
        image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
        sizes: [
          { size: '10"', price: '$13.99' },
          { size: '14"', price: '$15.99' },
          { size: '16"', price: '$18.99' },
        ]
      },
      {
        name: 'The BBQ',
        description: 'Sweet tangy BBQ sauce, grilled chicken, onions, mushrooms and green peppers.',
        price: 'From $13.99',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
        sizes: [
          { size: '10"', price: '$13.99' },
          { size: '14"', price: '$16.99' },
          { size: '16"', price: '$19.99' },
        ]
      },
      {
        name: 'Meats-N-Meats',
        description: 'This pizza is loaded with pepperoni, Italian sausage, beef, ham and bacon.',
        price: 'From $13.99',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
        sizes: [
          { size: '10"', price: '$13.99' },
          { size: '14"', price: '$16.99' },
          { size: '16"', price: '$19.99' },
        ]
      },
      {
        name: 'Chicken, Bacon & Ranch Pizza',
        description: 'Grilled chicken, crisp bacon, ranch dressing, and onions.',
        price: 'From $14.99',
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
        sizes: [
          { size: '10"', price: '$14.99' },
          { size: '14"', price: '$16.99' },
          { size: '16"', price: '$19.99' },
        ]
      },
      {
        name: 'The Big Slice',
        description: 'A slice of pizza with up to five toppings of your choice.',
        price: 'From $6.99',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
        sizes: [
          { size: '2 Toppings', price: '$6.99' },
          { size: '3-5 Toppings', price: '$7.99' },
        ]
      },
      {
        name: '12" Cauliflower Gluten Free',
        description: 'Our gluten-free option with cauliflower crust. Available in various styles.',
        price: 'From $10.99',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
        sizes: [
          { size: 'Cheese Only', price: '$10.99' },
          { size: 'Mountaineer', price: '$16.99' },
          { size: 'Meats-N-Meats', price: '$15.99' },
          { size: 'BBQ', price: '$16.99' },
          { size: 'Chicken, Bacon & Ranch', price: '$16.99' },
          { size: 'Vegetarian', price: '$15.99' },
        ]
      },
      {
        name: 'Cheese Only',
        description: 'The base for all of our \'Make Your Own\' style pizzas.',
        price: 'From $8.99',
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
        sizes: [
          { size: '10"', price: '$8.99' },
          { size: '14"', price: '$10.99' },
          { size: '16"', price: '$12.99' },
        ]
      },
    ],
    pasta: [
      {
        name: 'Spaghetti with Marinara Sauce',
        description: 'Spaghetti with a rich Italian marinara sauce.',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Spaghetti with Our Own Meat Sauce',
        description: 'Spaghetti with our own authentic Italian meat sauce.',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Mama\'s Meat Lasagna',
        description: 'Not Papa\'s but Mama\'s own meat lasagna recipe. Please allow additional time.',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Spaghetti with Meatballs',
        description: 'Spaghetti with Italian meatballs.',
        price: '$9.49',
        image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Fettuccine Alfredo',
        description: 'Our imported fettuccine noodles and rich creamy Alfredo sauce.',
        price: '$8.99',
        image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Grilled Chicken Alfredo',
        description: 'Grilled chicken strips tossed with our imported fettuccine and Alfredo sauce.',
        price: '$10.49',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023882c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Grilled Shrimp Alfredo',
        description: 'Jumbo shrimp grilled in garlic butter with our imported fettuccine and Alfredo sauce.',
        price: '$11.49',
        image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Grilled Chicken and Veggie Pasta',
        description: 'Spaghetti, chicken strips, olives, peppers, onions and mushrooms tossed with a light garlic butter sauce and olive oil. Substitute shrimp for 11.49!',
        price: '$10.99',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Ravioli Florentine',
        description: 'Ravioli stuffed with cheese, herbs and spices, served with marinara sauce.',
        price: '$9.49',
        image: 'https://images.unsplash.com/photo-1587740908075-9e245715d5e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Beef Ravioli',
        description: 'Ravioli stuffed with premium beef and spices, served in meat sauce and smothered in our special cheese.',
        price: '$9.49',
        image: 'https://images.unsplash.com/photo-1587740908075-9e245715d5e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Manicotti',
        description: 'A blend of Italian cheeses stuffed inside a pasta roll and baked in a rich tomato sauce with plenty of our special blend mozzarella cheese.',
        price: '$9.49',
        image: 'https://images.unsplash.com/photo-1633436375153-d7045cb93e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Chicken Parmesan',
        description: 'Our old family recipe.',
        price: '$11.49',
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Oven-Baked Spaghetti',
        description: 'Our spaghetti with your choice of meat sauce or marinara sauce smothered with our special blend of mozzarella cheese baked in our pizza often. With meatballs - 10.99!',
        price: '$9.99',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
    ],
    desserts: [
      {
        name: 'Cheesecake',
        description: 'Creamy New York style cheesecake.',
        price: '$5.99',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'Cake',
        description: 'Ask about our cake selection.',
        price: '$6.49',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
        price: '$2.99',
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: true,
      },
      {
        name: 'The Big Cookie',
        description: 'A large, freshly baked cookie.',
        price: '$1.59',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
    ],
    beverages: [
      {
        name: 'Coke Products',
        description: 'Various Coca-Cola beverages available.',
        price: '$2.49',
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Iced Tea',
        description: 'Freshly brewed iced tea.',
        price: '$2.49',
        image: 'https://images.unsplash.com/photo-1556679343-c1c1c5914a40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Hot Tea',
        description: 'Assorted tea flavors available.',
        price: '$2.29',
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Coffee',
        description: 'Regular or decaf.',
        price: '$2.29',
        image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
      {
        name: 'Beer & Wine',
        description: 'Ask about our selection!',
        price: 'Varies',
        image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        popular: false,
      },
    ],
  };
  
  return (
    <div className="bg-red-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our authentic Italian dishes made with love and the finest ingredients
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-red-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </div>
      
      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex overflow-x-auto pb-4 hide-scrollbar space-x-2 md:space-x-4 md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-red-800 hover:bg-red-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-red-800">{item.name}</h3>
                    <span className="text-lg font-bold text-red-700">{item.price}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  
                  {/* Show sizes for pizza items if available */}
                  {item.sizes && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-gray-700">Available sizes:</p>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {item.sizes.map((size, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {size.size}: {size.price}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  {item.popular && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Popular
                    </span>
                  )}
                  <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded text-sm transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pizza Toppings Section */}
      {activeCategory === 'pizza' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif font-bold text-red-800 mb-4">Make Your Own Pizza</h2>
            <p className="text-gray-700 mb-6">
              Choose your size, then add your favorite toppings! We also offer half-and-half style pizzas.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-red-800 mb-2">Available Toppings</h3>
              <p className="text-gray-700 mb-2">
                Pepperoni, Italian Sausage, Beef, Ham, Artichokes, Bacon, Chicken, Jalapenos, Banana Peppers, 
                Sun-dried Tomatoes, Green Olives, Black Olives, Green Peppers, Pineapple, Onions, Mushrooms, 
                Anchovies, and Extra Cheese.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="border border-red-200 rounded-lg p-4 text-center">
                  <span className="block text-lg font-medium text-red-800 mb-2">10" Pizza</span>
                  <p className="text-sm text-gray-600">
                    Toppings: $1.49 each
                  </p>
                </div>
                <div className="border border-red-200 rounded-lg p-4 text-center">
                  <span className="block text-lg font-medium text-red-800 mb-2">14" Pizza</span>
                  <p className="text-sm text-gray-600">
                    Toppings: $1.99 each
                  </p>
                </div>
                <div className="border border-red-200 rounded-lg p-4 text-center">
                  <span className="block text-lg font-medium text-red-800 mb-2">16" Pizza</span>
                  <p className="text-sm text-gray-600">
                    Toppings: $2.39 each
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Special Dietary Options - Simplified */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-serif font-bold text-red-800 mb-4">Special Dietary Options</h2>
          <p className="text-gray-700">
            We're happy to accommodate special dietary needs. Please inform your server about any allergies or dietary restrictions.
          </p>
        </div>
      </div>
      
      {/* Family Style Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-800 text-white rounded-lg shadow-md p-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Add Brew City Fries</h2>
              <p className="text-gray-200 mb-4">
                Add our delicious beer-battered Brew City fries to any sandwich for just $2.49!
              </p>
              <p className="text-gray-200 mb-4">
                All sandwiches are served with chips and a kosher dill pickle.
              </p>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-red-900 px-6 py-2 rounded font-medium transition-colors">
                Order Now
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Brew City Fries" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;