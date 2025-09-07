import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BeginnerGuide from "./pages/BeginnerGuide";

function App() {
  return (
    <div>
      <Navbar />
      <BeginnerGuide />
      <Footer />
    </div>
  );
}

export default App;

