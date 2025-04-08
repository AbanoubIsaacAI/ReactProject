import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useState } from "react";
function Home() {
  const [cart, AddToCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} AddToCart={AddToCart}></Navbar>
      <Slider></Slider>
      <Products cart={cart} AddToCart={AddToCart}></Products>
      <Footer></Footer>
    </>
  );
}

export default Home;
