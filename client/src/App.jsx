// import { Routes, Route } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Productslist from "./pages/Admin/Products/Productslist";
import NewArtwork from "./pages/Admin/Products/New";
import Basket from "./pages/Basket/Basket";


function App() {
  return (
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artworks/:id" element={<Detail />} />
        <Route path="/admin/artworks_list" element={<Productslist />} />
        <Route path="/admin/artworks/new" element={<NewArtwork />} />
        <Route path="/basket" element={<Basket/>}/> 
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    );
}

export default App;
