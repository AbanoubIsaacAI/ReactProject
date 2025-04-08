// import { useState } from "react";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
