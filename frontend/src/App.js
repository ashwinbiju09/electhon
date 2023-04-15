import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Base />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
