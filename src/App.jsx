import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Vets from "./pages/Vets";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <Vets />
      <Footer />
    </div>
  );
}

export default App;
