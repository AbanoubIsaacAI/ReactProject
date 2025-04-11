import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({ cart, setCart }) {
  function handleRemoveFromCart(id) {
    setCart((cart) => cart.filter((product) => product.id !== id));
  }

  function handleIncProductCount(id) {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        if (product.counter < product.quantity) {
          const newCounter = product.counter + 1;
          return {
            ...product,
            counter: newCounter,
            isMaxCount: false,
            finalPrice: product.offerPrice
              ? product.offerPrice * newCounter
              : product.price * newCounter,
          };
        } else {
          return { ...product, isMaxCount: true };
        }
      }
      return product;
    });
    setCart(updatedCart);
  }

  function handleDecProductCount(id) {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          if (product.counter > 1) {
            const newCounter = product.counter - 1;
            return {
              ...product,
              counter: newCounter,
              isMaxCount: false,
              finalPrice: product.offerPrice
                ? product.offerPrice * newCounter
                : product.price * newCounter,
            };
          }
        }
        return product;
      })
    );
  }

  return (
    <>
      <div className="navbar shadow-sm sticky top-0 z-50 bg-[#1B6392]">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            E-Shop
          </Link>
        </div>

        <div className="flex items-center">
          <div>
            <Search></Search>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-110 shadow"
            >
              <div className="card-body h-96 overflow-y-auto">
                <span className="text-lg font-bold text-center">
                  {cart.length === 0 && (
                    <>
                      <span>Your cart is empty</span>

                      <Link to={`/shop`} className="w-full">
                        <button
                          className="btn w-full mt-2 text-white"
                          style={{ backgroundColor: "#FA8232" }}
                        >
                          Start shoping
                        </button>
                      </Link>
                    </>
                  )}
                  {cart.length === 1 && `${cart.length} Item`}
                  {cart.length > 1 && `${cart.length} Items`}
                </span>
                {cart.map((product) => (
                  <div className="flex justify-between gap-3" key={product.id}>
                    <img src={product.image} alt="" className="h-26" />
                    <div className="flex flex-col justify-between basis-90 pb-1">
                      <div>
                        <h6>{product.title}</h6>
                      </div>
                      <div>
                        <button
                          className="btn bg-blue-400 rounded-full p-0 h-8 w-8 mr-1 text-white"
                          onClick={() => handleIncProductCount(product.id)}
                        >
                          +
                        </button>
                        <span>Count: {product.counter}</span>
                        {product.counter === 1 ? (
                          <button
                            className="btn bg-blue-400 rounded-full p-0 h-8 w-8 ml-1 text-white"
                            onClick={() => handleRemoveFromCart(product.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-white hover:text-red-500 cursor-pointer transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            className="btn bg-blue-400 rounded-full p-0 h-8 w-8 ml-1 text-white"
                            onClick={() => handleDecProductCount(product.id)}
                          >
                            -
                          </button>
                        )}
                        {product.isMaxCount ? (
                          <p className="text-red-600">
                            That's the maximum available quantity of the product
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {" "}
                        <p className="text-orange-400">
                          Price: {product.finalPrice}$
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        className="cursor-pointer"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
                {cart.length != 0 ? (
                  <span className="text-info text-center">
                    Total:
                    {cart.reduce((a, p) => a + p.finalPrice, 0)}$
                  </span>
                ) : (
                  ""
                )}
                <div className="card-actions">
                  {
                    <Link
                      to="/cart"
                      className="btn btn-block"
                      style={{ backgroundColor: "#FA8232" }}
                    >
                      View Cart
                    </Link>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
