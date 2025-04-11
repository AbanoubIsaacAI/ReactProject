import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home({
  products,
  setProducts,
  allProducts,
  setAllProducts,
  cart,
  setCart  // Use these props instead of local state
}) {
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <Slider />
      <Products
        cart={cart}
        setCart={setCart}
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        displayedProductsCount={20}
      />
      <Footer />
    </>
  );
}

export default Home;