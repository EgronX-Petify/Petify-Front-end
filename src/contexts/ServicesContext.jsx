import React, { createContext, useEffect, useState } from "react";
import * as servicesApi from "../APIs/servicesAPI";
import { confirmMessage } from "../utils/confirmMessage";
import { toastPromise } from "../utils/toastPromise";

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  /*[
    {
      id: 1,
      name: "Veterinary Visits",
      description: "Comprehensive check-ups and treatments for your pet.",
      image: "/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "300 - 800 EGP",
      duration: "30 - 60 minutes",
      availability: ["Daily except Friday"],
      rating: 5,
      category: "Healthcare",
    },
    {
      id: 2,
      name: "Grooming",
      description: "Full-service grooming including bath, haircut, and more.",
      image: "/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "200 - 600 EGP",
      duration: "45 - 90 minutes",
      availability: ["Saturday", "Sunday", "Monday", "Wednesday"],
      rating: 4,
      category: "Care & Hygiene",
    },
    {
      id: 3,
      name: "Training",
      description:
        "Professional pet training sessions to improve behavior, obedience, and social skills.",
      image: "/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "400 - 1000 EGP per session",
      duration: "60 minutes",
      availability: ["Sunday", "Tuesday", "Thursday"],
      rating: 3,
      category: "Behavior & Skills",
    },
    {
      id: 4,
      name: "Boarding",
      description:
        "Safe and comfortable boarding facilities where your pets are cared for while you’re away.",
      image: "/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "150 - 400 EGP per night",
      duration: "Overnight or multiple days",
      availability: ["All week"],
      rating: 5,
      category: "Accommodation",
    },
    // 🔥 Add more dummy services to test pagination
    {
      id: 5,
      name: "Daycare",
      description: "Daily care service for your pets.",
      image: "/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "100 - 250 EGP per day",
      duration: "8 hours",
      availability: ["All week"],
      rating: 4,
      category: "Accommodation",
    },
    {
      id: 6,
      name: "Dental Care",
      description: "Pet dental cleaning and check-up.",
      image: "/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "250 - 600 EGP",
      duration: "30 minutes",
      availability: ["Monday", "Thursday"],
      rating: 5,
      category: "Healthcare",
    },
  ] */
  const [services, setServices] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoadig] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const servicesCount = services?.length || 0;

  useEffect(() => {
    const fetchServices = async () => {
      setLoadig(true);
      try {
        const { data } = await servicesApi.getAllServices();
        setServices(data.filter((s) => s.category !== "VET"));
      } catch (error) {
        console.log("services error", error.response);
      } finally {
        setLoadig(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const fetchServicesCategories = async () => {
      setLoadig(true);
      try {
        const { data } = await servicesApi.getServicesCategory();
        setCategories(data.filter((c) => c !== "VET"));
      } catch (error) {
        console.log("services error", error.response);
      } finally {
        setLoadig(false);
      }
    };
    fetchServicesCategories();
  }, []);

  const bookService = async (payload) => {
    const willBook = await confirmMessage({
      text: "Are you sure you want to book?",
      confirmText: "Yes",
      cancelText: "Cancel",
    });
    if (!willBook) return;

    return await toastPromise(servicesApi.bookService(payload), {
      loading: "Booking Service... ⏳",
      success: "Service Booked successfully!",
      error: (error) =>
        error.response?.data?.errors?.[0]?.message ||
        error.response?.data?.message ||
        "Booking Service Failed ❌",
    });
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        setServices,
        selectedService,
        setSelectedService,
        loading,
        servicesCount,
        categories,
        bookService,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
export { ServicesContext };
