
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useContext, useState } from "react";
import { UserContext } from '../Pages/User';

function Navbar({ cart, setCart, wishlist, setWishlist }) {
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, logout } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const handleLogout = () => {
    logout();
    setCart([]); // Clear cart on logout
    navigate('/login');
  };

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

  function handleRemoveFromWishlist(id) {
    setWishlist((wishlist) => wishlist.filter((product) => product.id !== id));
  }

  // Handle adding items to the cart from the wishlist, with login check
  function handleAddToCartFromWishlist(id) {
    if (!isLoggedIn) {
      setErrorMessage("You must be logged in to add items to the cart."); // Set error message
      setTimeout(() => setErrorMessage(""), 3000); // Clear the message after 3 seconds
      return; // Stop further execution
    }

    const product = wishlist.find((item) => item.id === id);
    setCart((prevCart) => {
      const alreadyInCart = prevCart.some((item) => item.id === id);
      if (alreadyInCart) return prevCart;
      return [...prevCart, { ...product, counter: 1 }];
    });
  }

  return (
    <div className="navbar shadow-sm sticky top-0 z-50 bg-[#1B6392]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">E-Shop</Link>
      </div>

      <div className="flex items-center">
        <Search />

        {isLoggedIn && (
          <>
            {/* Wishlist */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={wishlist.length ? "red" : "none"}
                    viewBox="0 0 24 24"
                    stroke={wishlist.length ? "red" : "currentColor"}
                    strokeWidth={2}
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.01 4.01 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h1.74C14.09 5.01 15.76 4 17.5 4 19.99 4 22 6.01 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{wishlist.length}</span>
                </div>
              </div>
            </div>

            {/* Cart */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{cart.length}</span>
                </div>
              </div>

              {/* Cart Dropdown Content */}
              <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-110 shadow">
                <div className="card-body h-96 overflow-y-auto">
                  {isLoggedIn ? (
                    cart.length === 0 ? (
                      <span>Your cart is empty. Start shopping!</span>
                    ) : (
                      <div>
                        {cart.length === 1 ? `${cart.length} Item` : `${cart.length} Items`}
                        {cart.map((product) => (
                          <div className="flex justify-between gap-3" key={product.id}>
                            <img src={product.image} alt="" className="h-26" />
                            <div className="flex flex-col justify-between basis-90 pb-1">
                              <h6>{product.title}</h6>
                              <div>
                                <button
                                  disabled={product.isMaxCount}
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
                                    ❌
                                  </button>
                                ) : (
                                  <button
                                    className="btn bg-blue-400 rounded-full p-0 h-8 w-8 ml-1 text-white"
                                    onClick={() => handleDecProductCount(product.id)}
                                  >
                                    -
                                  </button>
                                )}
                              </div>
                              <p className="text-orange-400">Price: {product.finalPrice}$</p>
                            </div>
                          </div>
                        ))}
                        <span className="text-info text-center">
                          Total: {cart.reduce((a, p) => a + p.finalPrice, 0)}$
                        </span>
                        <Link to="/cart" className="btn btn-block text-white" style={{ backgroundColor: "#FA8232" }}>
                          View Cart
                        </Link>
                      </div>
                    )
                  ) : (
                    <span>Please log in to view your cart</span>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Display Error Message */}
        {errorMessage && (
          <div className="error-message text-red-500 text-sm mt-2 ml-2">
            {errorMessage}
          </div>
        )}

        {/* Avatar/Profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {!isLoggedIn ? (
              <>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            ) : (
              <>
                <li><span className="px-4 py-2 text-gray-700">Hello, {currentUser.username}</span></li>
                {currentUser?.role === 'admin' && (
                  <li><Link to="/dashboard">Dashboard</Link></li>
                )}
                <li><a>Settings</a></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;