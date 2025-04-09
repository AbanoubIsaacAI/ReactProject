import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useState } from "react";
function Home({ products, setProducts, allProducts, setAllProducts }) {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} setCart={setCart}></Navbar>
      <Slider></Slider>
      <Products
        cart={cart}
        setCart={setCart}
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      ></Products>
      <Footer></Footer>
    </>
  );
}

export default Home;
