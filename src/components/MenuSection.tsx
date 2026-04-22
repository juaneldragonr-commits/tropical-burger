'use client';
import BurgerCard from './BurgerCard';

// Datos de ejemplo para el menú
const burgers = [
  {
    name: 'Tropical Classic',
    description: 'Carne de res, queso, piña asada y salsa especial.',
    price: '$15.000',
  },
  {
    name: 'Island BBQ',
    description: 'Tocino crujiente, salsa BBQ ahumada y cebolla caramelizada.',
    price: '$18.000',
  },
  {
    name: 'Veggie Paradise',
    description: 'Hamburguesa de lentejas con aguacate fresco y rúcula.',
    price: '$16.000',
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-burger-brown text-center mb-12">
        Nuestro Menú
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