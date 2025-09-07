import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Grooming from "./pages/PetServices";

function App() {
  return (
    <div>
      <Navbar />
      <Grooming />
      <Footer />
    </div>
  );
}

export default App;

