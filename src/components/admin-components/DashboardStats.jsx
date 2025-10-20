import React, { useContext } from "react";
import StatsCard from "./StatsCard";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ServicesContext } from "../../contexts/ServicesContext";
import { UsersContext } from "../../contexts/UsersContext";

const DashboardStats = () => {
  const { productsCount } = useContext(ProductsContext);
  const { servicesCount } = useContext(ServicesContext);
  const { usersCount } = useContext(UsersContext);
  const stats = {
    usersCount,
    productsCount,
    servicesCount,
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <StatsCard
        type="all"
        label="Total Users"
        value={stats.usersCount.totalUsers || 0}
      />
      <StatsCard
        type="active"
        label="Active Users"
        value={stats.usersCount.activeUsers || 0}
      />
      <StatsCard
        type="pending"
        label="Pending Users"
        value={stats.usersCount.pendingUsers || 0}
      />
      <StatsCard
        type="banned"
        label="Banned Users"
        value={stats.usersCount.bannedUsers || 0}
      />
      <StatsCard
        type="products"
        label="Total Products"
        value={stats.productsCount || 0}
      />
      <StatsCard
        type="services"
        label="Total Services"
        value={stats.servicesCount || 0}
      />
    </div>
  );
};

export default DashboardStats;
