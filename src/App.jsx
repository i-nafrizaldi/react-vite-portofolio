import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portofolio from "./Pages/Portofolio";
import Kucekin from "./Pages/Kucekin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/kucekin" element={<Kucekin />} />
      </Routes>
    </>
  );
};

export default App;
