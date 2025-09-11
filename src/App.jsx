import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Vets from "./pages/Vets";
import BeginnerGuide from "./pages/BeginnerGuide";
import PetServices from "./pages/PetServices";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
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
