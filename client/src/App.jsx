// import { Routes, Route } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Productslist from "./pages/Admin/Products/Productslist";
import NewArtwork from "./pages/Admin/Products/New";
import Basket from "./pages/Basket/Basket";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import SearchResults from "./pages/SearchResults/SearchResults";
import About from "./pages/About/About";

function App() {
  return (
       <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/artworks/:id" element={<Detail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/admin/artworks_list" element={<Productslist />} />
        <Route path="/admin/artworks/new" element={<NewArtwork />} />
        <Route path="/basket" element={<Basket/>}/> 
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    );
}

export default App;
