import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SPDashboard from "./components/sp-components/SPDashboard";

function App() {
  return (
    <div>
      <Navbar />
      <SPDashboard />
      <Footer />
    </div>
  );
}

export default App;
