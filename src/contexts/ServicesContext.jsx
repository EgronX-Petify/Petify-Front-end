import React, { createContext, useContext, useEffect, useState } from "react";
import * as servicesApi from "../APIs/servicesAPI";
import { AuthContext } from "./AuthContext";

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoadig] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const servicesCount = services?.length || 0;
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER" || role !== "ADMIN") return;
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
    if (role !== "PET_OWNER" || role !== "ADMIN") return;
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
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
export { ServicesContext };
