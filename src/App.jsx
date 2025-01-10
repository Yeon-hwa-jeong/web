import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Box from "./pages/box/Box";
import Clear from "./pages/clear/Clear";
import Map from "./pages/map/Map";
import Recycle from "./pages/recycle/Recycle";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/applicate-list" element={<div>My List Page</div>} />
        <Route path="/category" element={<div>Category Page</div>} />

        <Route path="/box" element={<Box />} />
        <Route path="/clear" element={<Clear />} />
        <Route path="/map" element={<Map />} />
        <Route path="/recycle" element={<Recycle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;