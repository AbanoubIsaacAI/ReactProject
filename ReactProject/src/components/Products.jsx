import { useState } from "react";

function Products({
  cart,
  setCart,
  products,
  setProducts,
  allProducts,
  setAllProducts,
}) {
  const [seeMore, setSeeMore] = useState({});
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
        : [...prevCart, productToAdd]
    );
  }
  return (
    <div className="flex flex-wrap justify-around gap-10 mt-20 mb-20 ">
      {products.map((product) => {
        return (
          <div key={product.id} className="overflow-hidden">
            <div className="card bg-base-100 w-60 shadow-sm border-1 border-gray-200 border-b-0">
              <figure>
                <img src={product.image} alt={product.title} className="h-60" />
              </figure>
              {product.bestseller === true && (
                <div
                  className="p-1 absolute top-2 left-2 rounded-2xl text-white"
                  style={{ backgroundColor: "#EE5858" }}
                >
                  Best seller
                </div>
              )}
              {product.offer != "0" && (
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
                  </span>{" "}
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
                <div style={{ color: "#2DA5F3" }}>{product.price}$</div>
                <div className="card-actions justify-end">
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#FA8232" }}
                    onClick={() => {
                      handleBuy(product.id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
