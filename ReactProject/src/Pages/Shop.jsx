import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SideFilter from "../components/SideFilter";
import Slider from "../components/Slider";
import { useState } from "react";
function Shop() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} setCart={setCart}></Navbar>
      <div className="flex">
        <SideFilter></SideFilter>
        <Products cart={cart} setCart={setCart}></Products>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Shop;
