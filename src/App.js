import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// SPA --- single page application
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h1>Footer</h1>
    </BrowserRouter>
  );
}
// 15min break: 
// React hooks
export default App;
