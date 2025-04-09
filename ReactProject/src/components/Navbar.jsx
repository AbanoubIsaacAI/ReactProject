import Search from "./Search";

function Navbar({ cart, setCart }) {
  function handleRemoveFromCart(id) {
    setCart((cart) => cart.filter((product) => product.id !== id));
  }

  return (
    <>
      <div className="navbar shadow-sm sticky top-0 z-50 bg-[#1B6392]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">E-Shop</a>
        </div>

        <div className="flex">
          <Search></Search>
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
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-100 shadow"
            >
              <div className="card-body h-96 overflow-y-auto">
                <span className="text-lg font-bold text-center">
                  {cart.length === 0 && <span>Cart is empty</span>}
                  {cart.length === 1 && `${cart.length} Item`}
                  {cart.length > 1 && `${cart.length} Item`}
                </span>
                {cart.map((product) => (
                  <div className="flex justify-between gap-3" key={product.id}>
                    <img src={product.image} alt="" className="h-26" />
                    <div className="flex flex-col justify-between basis-90 pb-1">
                      <div>
                        <h6>{product.title}</h6>
                      </div>
                      <div>
                        {" "}
                        <p className="text-orange-400">
                          Price: {product.price}$
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
                <span className="text-info text-center">
                  Total:
                  {cart.reduce((a, p) => a + p.price, 0)}$
                </span>
                <div className="card-actions">
                  {cart.length > 0 ? (
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  ) : (
                    ""
                  )}
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
                <a>Dashboard</a>
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
