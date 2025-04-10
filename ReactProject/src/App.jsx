import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";
import CartPage from "./Pages/CartPage";

import productsList from "../../product";
import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState(productsList);
  const [products, setProducts] = useState(productsList);

  return (
    <>
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
              ></Home>
            }
          ></Route>
          <Route
            path="/shop"
            element={
              <Shop
                products={products}
                setProducts={setProducts}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
              ></Shop>
            }
          ></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
