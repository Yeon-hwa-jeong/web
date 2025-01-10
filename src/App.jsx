import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 필요한 라우트를 여기에 추가하세요 */}
        <Route path="/applicate-list" element={<div>My List Page</div>} />
        <Route path="/category" element={<div>Category Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;