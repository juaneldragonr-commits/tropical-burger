import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-burger-brown text-cream-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Tropical Burger</h3>
          <p className="text-sm opacity-80">
            Sabor auténtico, ingredientes frescos y una experiencia inolvidable.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Horarios</h3>
          <p className="text-sm opacity-80">Lun - Vie: 11:00 AM - 10:00 PM</p>
          <p className="text-sm opacity-80">Sáb - Dom: 12:00 PM - 11:00 PM</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p className="text-sm opacity-80">Bogotá, Colombia</p>
          <p className="text-sm opacity-80">hola@tropicalburger.com</p>
        </div>
      </div>
      <div className="text-center mt-10 pt-6 border-t border-cream-white/20 text-xs opacity-60">
        © 2026 Tropical Burger. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;