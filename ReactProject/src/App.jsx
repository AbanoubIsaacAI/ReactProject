import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";
import productsList from "../../product";
import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";
function App() {
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
