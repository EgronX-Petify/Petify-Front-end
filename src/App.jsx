import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Vets from "./pages/Vets";
import Grooming from "./pages/PetServices";
import BeginnerGuide from "./pages/BeginnerGuide";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <Vets />
      <Grooming />
      <BeginnerGuide/>
      <Footer />
    </div>
  );
}

export default App;
