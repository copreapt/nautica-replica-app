import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Boats, Contact } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="boats" element={<Boats />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
