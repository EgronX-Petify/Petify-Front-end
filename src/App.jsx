import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UseRole from "./hooks/UseRole";
import { petOwner, serviceProvider, admin } from "./routesConfig";
import SPNavbar from "./components/sp-components/SPNavbar";
import AdminNavbar from "./components/admin-components/AdminNavbar";
import AdminFooter from "./components/admin-components/AdminFooter";
import NotFound from "./pages/NotFound";

function App() {
  const role = UseRole();

  const getRoutes = () => {
    switch (role) {
      case "petOwner":
        return petOwner;
      case "serviceProvider":
        return serviceProvider;
      case "admin":
        return admin;
      default:
        return petOwner;
    }
  };

  // recursive way to handle nested routes for any depth
  const renderRoutes = (routes) =>
    routes.map(({ path, element, children, index }, i) => (
      <Route key={path || i} path={path} element={element} index={index}>
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <>
      {role === "petOwner" && <Navbar />}
      {role === "serviceProvider" && <SPNavbar />}
      {role === "admin" && <AdminNavbar />}
      <Routes>
        {renderRoutes(getRoutes())}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-center" />
      {role === "petOwner" ? <Footer /> : <AdminFooter />}
    </>
  );
}

export default App;
