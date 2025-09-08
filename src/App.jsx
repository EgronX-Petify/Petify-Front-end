import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
