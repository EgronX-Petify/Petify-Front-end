import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Vets from "./pages/Vets";
import BeginnerGuide from "./pages/BeginnerGuide";
import PetServices from "./pages/PetServices";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="vets" element={<Vets />} />
        <Route path="/services" element={<PetServices />} />
        <Route path="/beginner-guide" element={<BeginnerGuide />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
