// import React from "react";
// import Signup from "./pages/Signup";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Layout from "./component/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
function App() {
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>;
}

export default App;
