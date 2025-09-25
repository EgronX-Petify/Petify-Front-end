import React, { createContext, useState } from "react";

const SPContext = createContext();
const SPProvider = ({ children }) => {
  const [services, setServices] = useState([
    {
      id: 1,
      photo: "https://example.com/grooming.jpg",
      name: "Grooming",
      price: 250,
      rate: 4.5,
      description:
        "Full-service grooming including bath, haircut, and nail trim.",
      notes: "Available for small and medium pets only.",
    },
    {
      id: 2,
      photo: "https://example.com/vet.jpg",
      name: "Vet Consultation",
      price: 500,
      rate: 4.8,
      description: "Professional veterinary consultation for pets of all ages.",
      notes: "Includes basic checkup, no lab tests.",
    },
    {
      id: 3,
      photo: "https://example.com/training.jpg",
      name: "Training",
      price: 300,
      rate: 4.2,
      description: "Behavioral and obedience training sessions.",
      notes: "Requires multiple sessions for best results.",
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dog Shampoo",
      price: 120,
      discount: 10, // 10% discount
      description: "Gentle dog shampoo for healthy and shiny coat.",
      photos: ["https://example.com/dog-shampoo.jpg","https://example.com/dog-shampoo.jpg"],
      stock: 12,
      note: "Suitable for puppies over 3 months old.",
    },
    {
      id: 2,
      name: "Cat Food",
      price: 200,
      discount: 0, // no discount
      description: "Nutritious dry food for adult cats.",
      photo: "https://example.com/cat-food.jpg",
      stock: 8,
      note: "Store in a cool and dry place.",
    },
    {
      id: 3,
      name: "Pet Toys",
      price: 75,
      discount: 15, // 15% discount
      description: "Durable chew toys for dogs and cats.",
      photo: "https://example.com/pet-toys.jpg",
      stock: 20,
      note: "Available in multiple colors.",
    },
    {
      id: 4,
      name: "Bird Cage",
      price: 600,
      discount: 50, // flat discount
      description: "Spacious cage suitable for small to medium birds.",
      photo: "https://example.com/bird-cage.jpg",
      stock: 5,
      note: "Comes with perches and a feeding tray.",
    },
    {
      id: 5,
      name: "Rabbit Hay",
      price: 90,
      discount: 5,
      description: "Premium quality hay for rabbits and guinea pigs.",
      photo: "https://example.com/rabbit-hay.jpg",
      stock: 15,
      note: "100% natural and fresh.",
    },
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <SPContext.Provider
      value={{
        services,
        setServices,
        selectedService,
        setSelectedService,
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </SPContext.Provider>
  );
};

export default SPProvider;
export { SPContext };
