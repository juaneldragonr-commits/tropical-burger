# Tropical Burger 🍔

Tropical Burger es una aplicación web interactiva diseñada para la experiencia de pedido de hamburguesas gourmet con temática tropical. Este proyecto destaca por su enfoque en la experiencia de usuario (UX), un sistema de carrito persistente y una interfaz moderna y responsiva.

## 🚀 Características Principales

* **Menú Dinámico:** Visualización clara de productos con navegación fluida mediante scroll suave.
* **Carrito de Compras Persistente:** Gestión de estado global con `Context API` y almacenamiento local (`localStorage`) para que los pedidos no se pierdan al recargar.
* **Validación de Formularios:** Sistema de validación en tiempo real para el proceso de checkout (nombre y dirección).
* **Diseño Responsivo:** Interfaz construida con **Tailwind CSS**, optimizada para móviles y escritorio.
* **UX Inteligente:** Botón de "Ordenar" con comportamiento adaptativo: navega al menú si el carrito está vacío o abre el resumen del pedido si ya hay productos seleccionados.

## 🛠 Tecnologías Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Lenguaje:** TypeScript / JavaScript
* **Estilos:** Tailwind CSS
* **Estado:** React Context API
* **Despliegue:** Vercel

## 📦 Getting Started

Primero, clona este repositorio e instala las dependencias:

```bash
npm install
# o
yarn install