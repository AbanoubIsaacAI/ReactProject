import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SideFilter from "../components/SideFilter";
import Slider from "../components/Slider";

function Shop({
  products,
  setProducts,
  allProducts,
  setAllProducts,
  cart,
  setCart
}) {
  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <div className="flex flex-col sm:flex-row">
        <SideFilter
          products={products}
          setProducts={setProducts}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
        <Products
          cart={cart}
          setCart={setCart}
          products={products}
          setProducts={setProducts}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          displayedProductsCount={100}
        />
      </div>
      <Footer />
    </>
  );
}

export default Shop;