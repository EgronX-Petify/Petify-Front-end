import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import Vets from "./pages/Vets";
import BeginnerGuide from "./pages/BeginnerGuide";
import PetServices from "./pages/PetServices";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ResetPassword from "./components/sign-components/ResetPassword";
import Cart from "./components/shop-components/Cart";
import Checkout from "./components/shop-components/Checkout";
import NearbyPlaces from "./components/nearby-places-components/NearbyPlaces";
import SPDashboard from "./components/sp-components/SPDashboard";
import MainDashboard from "./components/sp-components/MainDashboard";
import ManageServices from "./components/sp-components/ManageServices";
import ManageAppointments from "./components/sp-components/ManageAppointments";
import ManageProducts from "./components/sp-components/ManageProducts";
import ServiceProviderProfile from "./components/sp-components/ServiceProviderProfile";
import UserInfo from "./components/profile-components/UserInfo";
import AllProfiles from "./components/profile-components/AllProfiles";
import Orders from "./components/profile-components/Orders";
import Appointments from "./components/profile-components/Appointments";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/vets" element={<Vets />} />
        <Route path="/services" element={<PetServices />} />
        <Route path="/nearby-places" element={<NearbyPlaces />} />
        <Route path="/beginner-guide" element={<BeginnerGuide />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Navigate to="my-profile" replace />} />
          <Route path="my-profile" element={<UserInfo />} />
          <Route path="my-pets" element={<AllProfiles />} />
          <Route path="orders" element={<Orders />} />
          <Route path="appointments" element={<Appointments />} />
        </Route>
        <Route path="/dashboard" element={<SPDashboard />}>
          <Route index element={<MainDashboard />} />
          <Route path="services" element={<ManageServices />} />
          <Route path="appointments" element={<ManageAppointments />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="sp-profile" element={<ServiceProviderProfile />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
