import React from "react";
import StatsCard from "./StatsCard";

const DashboardStats = () => {
  // dummy stats (you’ll replace with real API later)
  const stats = {
    users: 120,
    products: 45,
    services: 30,
    verifiedSP: 18,
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatsCard type="users" label="Total Users" value={stats.users} />
      <StatsCard type="products" label="Total Products" value={stats.products} />
      <StatsCard type="services" label="Total Services" value={stats.services} />
      <StatsCard type="verified" label="Verified SP" value={stats.verifiedSP} />
    </div>
  );
};

export default DashboardStats;
