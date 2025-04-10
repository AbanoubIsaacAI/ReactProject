import { useState } from "react";
import productsList from "../../../product";

function SearchDropdown() {
  const [allProducts] = useState(productsList);
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setProducts(filtered);
    setShowDropdown(value.length > 0);
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {showDropdown && (
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-96 shadow"
        >
          <div className="card-body h-96 overflow-y-auto">
            {products.length === 0 ? (
              <span className="text-center text-sm text-gray-400">
                No results found
              </span>
            ) : (
              products.map((product) => (
                <div
                  className="flex justify-between gap-3 cursor-pointer hover:bg-gray-500"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex flex-col justify-between basis-80">
                    <h6 className="text-sm font-medium">{product.title}</h6>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <input
        type="text"
        placeholder="Search products"
        className="input input-bordered w-64 absolute right-0 z-20"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchDropdown;
