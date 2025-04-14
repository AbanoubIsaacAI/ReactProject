
import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from '../Pages/User';

function Products({ setCart, products, displayedProductsCount, isOffer }) {
  const [seeMore, setSeeMore] = useState({});
  const { isLoggedIn } = useContext(UserContext); 

  function handleSeeMore(id) {
    setSeeMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleBuy(id) {
    const productToAdd = products.find((product) => product.id === id);
    setCart((prevCart) =>
      prevCart.some((item) => item.id === id)
        ? prevCart
        : [
            ...prevCart,
            {
              ...productToAdd,
              counter: 1,
              finalPrice: productToAdd.offerPrice || productToAdd.price,
            },
          ]
    );
  }

  return (
    <div className="flex flex-wrap justify-around gap-10 mt-20 mb-20">
      {isOffer
        ? products
            .filter((product) => product.offerPrice !== 0)
            .map((product) => (
              <div key={product.id} className="overflow-hidden">
                <Link to={`/product/${product.id}`} className="w-full">
                  <div className="card bg-base-100 w-60 shadow-lg border-1 border-gray-200 border-b-0 transition-transform transform hover:scale-105 hover:shadow-2xl rounded-lg cursor-pointer">
                    <figure className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-60 object-cover rounded-t-lg"
                      />
                      {product.bestseller && (
                        <div
                          className="p-1 absolute top-2 left-2 rounded-2xl text-white"
                          style={{ backgroundColor: "#EE5858" }}
                        >
                          Best seller
                        </div>
                      )}
                      {product.offer !== "0" && (
                        <div className="p-1 absolute top-2 left-2 bg-amber-300 rounded-2xl">
                          {product.offer}
                        </div>
                      )}
                    </figure>

                    <div className="card-body p-4">
                      <h2 className="card-title text-xl font-semibold">
                        {product.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        ⭐{product.rating.rate}{" "}
                        <span className="bg-gray-300 p-1 rounded-2xl">
                          ({product.rating.count})
                        </span>
                      </p>

                      {seeMore[product.id] ? (
                        <p>
                          {product.description}
                          <button
                            onClick={() => handleSeeMore(product.id)}
                            className="cursor-pointer ml-2 text-[#EE5858]"
                          >
                            See Less
                          </button>
                        </p>
                      ) : (
                        <p>
                          {product.description
                            .split(" ")
                            .slice(0, 8)
                            .join(" ") + "..."}
                          <button
                            onClick={() => handleSeeMore(product.id)}
                            className="cursor-pointer ml-2 text-[#EE5858]"
                          >
                            See More
                          </button>
                        </p>
                      )}

                      <div className="text-[#2DA5F3] text-lg font-semibold">
                        {product.offerPrice === 0 ? (
                          `${product.price}$`
                        ) : (
                          <>
                            <span className="line-through text-gray-500 mr-1">
                              {product.price}$
                            </span>
                            {product.offerPrice}$
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="card-actions justify-end">
                  <button
                    className="btn w-full mt-2 text-white"
                    style={{ backgroundColor: "#FA8232" }}
                    onClick={() => {
                      if (!isLoggedIn) {
                        alert("You must be logged in to add items to the cart.");
                        return;
                      }
                      handleBuy(product.id);
                    }}
                  >
                    <FaShoppingCart /> Add To Cart
                  </button>
                </div>
              </div>
            ))
        : products.slice(0, displayedProductsCount).map((product) => (
            <div key={product.id} className="overflow-hidden">
              <Link to={`/product/${product.id}`} className="w-full">
                <div className="card bg-base-100 w-60 shadow-lg border-1 border-gray-200 border-b-0 transition-transform transform hover:scale-105 hover:shadow-2xl rounded-lg cursor-pointer">
                  <figure>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-60"
                    />
                  </figure>
                  {product.bestseller && (
                    <div
                      className="p-1 absolute top-2 left-2 rounded-2xl text-white"
                      style={{ backgroundColor: "#EE5858" }}
                    >
                      Best seller
                    </div>
                  )}
                  {product.offer !== "0" && (
                    <div className="p-1 absolute top-2 left-2 bg-amber-300 rounded-2xl">
                      {product.offer}
                    </div>
                  )}
                  <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>
                      ⭐{product.rating.rate}{" "}
                      <span className="bg-gray-300 p-1 rounded-2xl">
                        ({product.rating.count})
                      </span>
                    </p>
                    {seeMore[product.id] ? (
                      <p>
                        {product.description}
                        <button
                          onClick={() => handleSeeMore(product.id)}
                          className="cursor-pointer ml-2"
                          style={{ color: "#EE5858" }}
                        >
                          See Less
                        </button>
                      </p>
                    ) : (
                      <p>
                        {product.description.split(" ").slice(0, 8).join(" ") +
                          "..."}
                        <button
                          onClick={() => handleSeeMore(product.id)}
                          className="text-danger-500 cursor-pointer ml-2"
                          style={{ color: "#EE5858" }}
                        >
                          See More
                        </button>
                      </p>
                    )}
                    <div style={{ color: "#2DA5F3" }}>
                      {product.offerPrice === 0 ? (
                        product.price
                      ) : (
                        <>
                          <span className="line-through text-gray-500 mr-1">
                            {product.price}$
                          </span>
                          {product.offerPrice}$
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              <div className="card-actions justify-end">
                <button
                  className="btn w-full mt-2 text-white"
                  style={{ backgroundColor: "#FA8232" }}
                  onClick={() => {
                    if (!isLoggedIn) {
                      alert("You must be logged in to add items to the cart.");
                      return;
                    }
                    handleBuy(product.id);
                  }}
                >
                  <FaShoppingCart /> Add To Cart
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Products;