import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;

