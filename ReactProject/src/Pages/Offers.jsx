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
  wishlist,
  setWishlist,
}) {
  return (
    <>
      <Navbar
        cart={cart}
        setCart={setCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <div className="m-15">
        <Products
          cart={cart}
          setCart={setCart}
          products={products}
          setProducts={setProducts}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          isOffer={true}
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
      </div>
      <Footer />
    </>
  );
}

export default Offers;
