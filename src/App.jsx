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
import SignNavbar from "./components/sign-components/SignNavbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="vets" element={<Vets />} />
        <Route path="/services" element={<PetServices />} />
        <Route path="/beginner-guide" element={<BeginnerGuide />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
