// import { Routes, Route } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Detail from "./pages/Detail";

function App() {
  return (
       <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail" element={<Detail />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    );
}

export default App;
