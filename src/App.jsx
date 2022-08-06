import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Article from "./pages/Article";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
