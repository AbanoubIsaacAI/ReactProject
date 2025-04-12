import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";
import CartPage from "./Pages/CartPage";
import ProductDetails from "./Pages/ProductDetails";
import productsList from "../../product";
import Checkout from "./Pages/CheckoutPage";
import CheckoutSuccess from "./Pages/CheckoutSuccessPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState(productsList);
  const [products, setProducts] = useState(productsList);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              setProducts={setProducts}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetails products={products} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              setProducts={setProducts}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        <Route
          path="/checkout/success"
          element={<CheckoutSuccess cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
