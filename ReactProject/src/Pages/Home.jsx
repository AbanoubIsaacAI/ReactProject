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
  setCart,
  wishlist,      
  setWishlist,  
}) {
  return (
    <>
      <Navbar cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />
      <Slider />
      <Products
        cart={cart}
        setCart={setCart}
        products={products}
        setProducts={setProducts}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        displayedProductsCount={20}
        wishlist={wishlist}        
        setWishlist={setWishlist}  
      />
      <Footer />
    </>
  );
}

export default Home;
