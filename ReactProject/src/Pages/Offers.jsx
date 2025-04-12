import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

function Offers({
  products,
  setProducts,
  allProducts,
  setAllProducts,
  cart,
  setCart,
}) {
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />

      <Products
        cart={cart}
        setCart={setCart}
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        isOffer={true}
      />

      <Footer />
    </>
  );
}

export default Offers;
