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
      photos: [
        "public/pexels-tima-miroshnichenko-6131529.jpg",
        "public/pexels-pixabay-220938.jpg",
      ],
      stock: 12,
      note: "Suitable for puppies over 3 months old.",
    },
    {
      id: 2,
      name: "Cat Food",
      price: 200,
      discount: 0, // no discount
      description: "Nutritious dry food for adult cats.",
      photos: ["public/pexels-pixabay-220938.jpg"],
      stock: 8,
      note: "Store in a cool and dry place.",
    },
    {
      id: 3,
      name: "Pet Toys",
      price: 75,
      discount: 15, // 15% discount
      description: "Durable chew toys for dogs and cats.",
      photos: ["public/pexels-pixabay-220938.jpg"],
      stock: 20,
      note: "Available in multiple colors.",
    },
    {
      id: 4,
      name: "Bird Cage",
      price: 600,
      discount: 50, // flat discount
      description: "Spacious cage suitable for small to medium birds.",
      photos: ["public/pexels-pixabay-220938.jpg"],
      stock: 5,
      note: "Comes with perches and a feeding tray.",
    },
    {
      id: 5,
      name: "Rabbit Hay",
      price: 90,
      discount: 5,
      description: "Premium quality hay for rabbits and guinea pigs.",
      photos: ["public/pexels-pixabay-220938.jpg"],
      stock: 15,
      note: "100% natural and fresh.",
    },
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      client: "Losy Andresown",
      service: "Grooming",
      date: "2025-10-12",
      time: "10:00 AM",
      done: false,
    },
    {
      id: 2,
      client: "Sarah Ali",
      service: "Vet Check",
      date: "2025-11-12",
      time: "2:00 PM",
      done: false,
    },
    {
      id: 3,
      client: "John Doe",
      service: "Grooming",
      date: "2025-10-30",
      time: "10:00 AM",
      done: true,
    },
    {
      id: 4,
      client: "Lisy Weasly",
      service: "Vet Check",
      date: "2025-10-12",
      time: "2:00 PM",
      done: false,
    },
  ]);

  const [serviceProvider, setServiceProvider] = useState({
    username: "PetCarePro",
    rate: 4.5,
    description:
      "Experienced vet and groomer with 10+ years of helping pets stay healthy and happy.",
    photo:
      "https://boise.fetchpetcare.com/wp-content/uploads/sites/8/2024/07/pet2.jpg",
    address: "123 Main St, Cairo, Egypt",
    phone: "+20123456789",
    email: "petcarepro@example.com",
  });

  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

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
        appointments,
        setAppointments,
        selectedAppointment,
        setSelectedAppointment,
        serviceProvider,
        setServiceProvider,
      }}
    >
      {children}
    </SPContext.Provider>
  );
};

export default SPProvider;
export { SPContext };
