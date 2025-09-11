import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}

export default App;

