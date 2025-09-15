import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import Vets from "./pages/Vets";
import BeginnerGuide from "./pages/BeginnerGuide";
import PetServices from "./pages/PetServices";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ResetPassword from "./components/sign-components/ResetPassword";
import ForgotPassword from "./components/sign-components/ForgotPassword";
import Cart from "./components/shop-components/Cart";
import Checkout from "./components/shop-components/Checkout";
import EmergencyCall from "./components/vets-components/EmergencyCall";
import VetBook from "./components/vets-components/VetBook";
import ServiceBook from "./components/pet-services-components/ServiceBook";
import AddNewPet from "./components/profile-components/AddNewPet";
import EditProfile from "./components/profile-components/EditProfile";
import EditUserInfo from "./components/profile-components/EditUserInfo";
import NearbyPlaces from "./components/nearby-places-components/NearbyPlaces";
import SPDashboard from "./components/sp-components/SPDashboard";
import MainDashboard from "./components/sp-components/MainDashboard";
import ManageServices from "./components/sp-components/ManageServices";
import UpdateServices from "./components/sp-components/UpdateServices";
import ManageAppointments from "./components/sp-components/ManageAppointments";
import RescheduleAppointment from "./components/sp-components/RescheduleAppointment";
import ManageProducts from "./components/sp-components/ManageProducts";
import EditProduct from "./components/sp-components/EditProduct";
import ServiceProviderProfile from "./components/sp-components/ServiceProviderProfile";

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
        <Route path="/services/book-service" element={<ServiceBook />} />
        <Route path="/nearby-places" element={<NearbyPlaces />} />
        <Route path="/beginner-guide" element={<BeginnerGuide />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/newpet-form" element={<AddNewPet />} />
        <Route path="edit-pet-profile" element={<EditProfile />} />
        <Route path="/edit-user-info" element={<EditUserInfo />} />
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
