'use client';
import BurgerCard from './BurgerCard';

// Datos de ejemplo para el menú
const burgers = [
  {
    name: 'Tropical Classic',
    description: 'Beef, cheese, grilled pineapple and special sauce.',
    price: '$15 USD',
  },
  {
    name: 'Island BBQ',
    description: 'Crispy bacon, smoky BBQ sauce and caramelized onion.',
    price: '$18 USD',
  },
  {
    name: 'Veggie Paradise',
    description: 'Vegetarian burger with fresh avocado and arugula.',
    price: '$16 USD',
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-burger-brown text-center mb-12">
        Our Menu
      </h2>
      
      {/* GRID RESPONSIVO: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {burgers.map((burger, index) => (
          <BurgerCard key={index} {...burger} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;