import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useState } from "react";
function Home() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} setCart={setCart}></Navbar>
      <Slider></Slider>
      <Products cart={cart} setCart={setCart}></Products>
      <Footer></Footer>
    </>
  );
}

export default Home;
