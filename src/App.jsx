import "./App.css";
import Footer from "./components/Footer";
import SignNavbar from "./components/sign-components/SignNavbar";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
    <SignNavbar />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
