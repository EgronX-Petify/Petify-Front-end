import React, { createContext, useState } from "react";

const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Dog Food - Chicken Flavor",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 250,
      category: "Food",
      brand: "Royal Canin",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Cat Dry Food - Salmon Recipe",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 180,
      category: "Food",
      brand: "Whiskas",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Small Animal Hay Pack",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 120,
      category: "Food",
      brand: "Kaytee",
      rating: 4.0,
    },
    {
      id: 4,
      name: "Interactive Dog Toy Ball",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 90,
      category: "Toys",
      brand: "KONG",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Cat Teaser Feather Wand",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 75,
      category: "Toys",
      brand: "Petmate",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Pet Grooming Brush",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 150,
      category: "Grooming",
      brand: "FURminator",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Dog Nail Clipper",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 100,
      category: "Grooming",
      brand: "Safari",
      rating: 4.1,
    },
    {
      id: 8,
      name: "Flea & Tick Shampoo",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 200,
      category: "Health",
      brand: "Adams",
      rating: 4.4,
    },
    {
      id: 9,
      name: "Pet Vitamin Supplement",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 160,
      category: "Health",
      brand: "Nutri-Vet",
      rating: 4.6,
    },
    {
      id: 10,
      name: "Soft Dog Bed - Medium",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 400,
      category: "Bedding",
      brand: "MidWest",
      rating: 4.9,
    },
    {
      id: 11,
      name: "Cat Scratching Post",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 350,
      category: "Bedding",
      brand: "Frisco",
      rating: 4.5,
    },
    {
      id: 12,
      name: "Pet Travel Carrier",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 500,
      category: "Accessories",
      brand: "AmazonBasics",
      rating: 4.7,
    },
    {
      id: 13,
      name: "Dog Leash - Nylon 5ft",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 110,
      category: "Accessories",
      brand: "Blueberry Pet",
      rating: 4.2,
    },
    {
      id: 14,
      name: "Cat Litter Box - Large",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 300,
      category: "Accessories",
      brand: "PetSafe",
      rating: 4.6,
    },
    {
      id: 15,
      name: "Bird Cage Starter Kit",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 700,
      category: "Accessories",
      brand: "Prevue",
      rating: 4.3,
    },
    {
      id: 16,
      name: "Aquarium Starter Kit - 20L",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 950,
      category: "Accessories",
      brand: "Tetra",
      rating: 4.5,
    },
    {
      id: 17,
      name: "Dog Harness - Adjustable",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 180,
      category: "Accessories",
      brand: "Ruffwear",
      rating: 4.4,
    },
    {
      id: 18,
      name: "Cat Collar with Bell",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 60,
      category: "Accessories",
      brand: "PetSafe",
      rating: 4.1,
    },
    {
      id: 19,
      name: "Dog Chew Bone - Pack of 2",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 95,
      category: "Toys",
      brand: "Nylabone",
      rating: 4.0,
    },
    {
      id: 20,
      name: "Rabbit Hutch - Wooden",
      photos: [
        "/shop-media/pexels-rdne-7310213.jpg",
        "/shop-media/pexels-rdne-7310213.jpg",
      ],
      price: 1200,
      category: "Bedding",
      brand: "Aivituvin",
      rating: 4.8,
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, selectedProduct, setSelectedProduct, cartItems, setCartItems, cartCount }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
