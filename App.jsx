import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mobiles from "./pages/Mobiles";
import Furniture from "./pages/Furniture";
import Electronics from "./pages/Electronics";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}
