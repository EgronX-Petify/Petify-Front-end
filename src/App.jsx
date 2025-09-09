import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
