import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Vets from "./pages/Vets";

function App() {
  return (
    <div>
      <Navbar />
      <Vets />
      <Footer />
    </div>
  );
}

export default App;

