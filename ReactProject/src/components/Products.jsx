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
            <div className="card bg-base-100 w-60 shadow-sm">
              <figure>
                <img src={product.image} alt={product.title} className="h-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                {seeMore[product.id] ? (
                  <p>
                    {product.description}
                    <button
                      onClick={() => handleSeeMore(product.id)}
                      className="text-blue-700 cursor-pointer ml-2"
                    >
                      See Less
                    </button>
                  </p>
                ) : (
                  <p>
                    {product.description.split(" ").slice(0, 20).join(" ") +
                      "..."}
                    <button
                      onClick={() => handleSeeMore(product.id)}
                      className="text-blue-700 cursor-pointer ml-2"
                    >
                      See More
                    </button>
                  </p>
                )}
                <div className="text-orange-400">{product.price}$</div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleBuy(product.id);
                    }}
                  >
                    Buy Now
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
