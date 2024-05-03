import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SDG1 from "./pages/SDG1";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GoodHealthSDG" element={<SDG1 />} />
      </Routes>
    </main>
  );
}

export default App;
