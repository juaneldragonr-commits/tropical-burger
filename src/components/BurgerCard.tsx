'use client';

interface BurgerProps {
  name: string;
  description: string;
  price: string;
}

const BurgerCard = ({ name, description, price }: BurgerProps) => {
  
  const handleOrder = () => {
    alert(`¡Has añadido ${name} a tu pedido! 🍔`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-burger-brown/10 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-burger-brown mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-tropical-orange">{price}</span>
        <button 
          onClick={handleOrder}
          className="bg-burger-brown text-white px-4 py-2 rounded-full text-sm hover:bg-burger-brown/90 transition-colors"
        >
          Pedir
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;