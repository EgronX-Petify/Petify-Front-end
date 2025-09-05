import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginForm from "./components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <LoginForm/>
      <Footer />
    </div>
  );
}

export default App;

/*      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route>
           just testing routes and tailwind 
          <Route
            path="/"
            element={
              <h1 className="text-3xl font-bold underline text-amber-900 ">
                Home Page
              </h1>
            }
          />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Route>
      </Routes> */
