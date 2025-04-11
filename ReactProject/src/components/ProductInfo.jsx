import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaBalanceScale,
  FaShareAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApple,
  FaGooglePay,
} from "react-icons/fa";


const ProductInfo = ({ product, quantity, handleQuantityChange, setCart }) => {
  const navigate = useNavigate();
  function handleAddToCart(id) {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === id)
        ? prevCart
        : [...prevCart, { ...product, counter: quantity }]
    );
    navigate("/cart");
  }

  function handleBuyNow(id) {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, counter: quantity } : item
        );
      } else {
        return [...prevCart, { ...product, counter: quantity }];
      }
    });
    navigate("/checkout"); // go to checkout
  }
  return (
    <div className="flex flex-col min-h-screen py-10 bg-gray-50">
      <div className="flex-grow flex justify-center items-center px-6 shadow-2xl">
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl w-full rounded-lg p-8 flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src={product.image || "/default-placeholder.png"}
              alt={product.title}
              className="w-full h-auto max-h-96 rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            {/* Product Title */}
            <h4 className="text-gray-800 font-semibold text-3xl mb-2">
              {product.title}
            </h4>

            {/* Availability */}
            <p className="mb-1 text-sm text-gray-500">
              Availability:{" "}
              {product.quantity > 0 ? (
                <span className="text-green-500 font-semibold">In Stock</span>
              ) : (
                <span className="text-red-500 font-semibold">Out of Stock</span>
              )}
            </p>

            {/* Category */}
            <p className="mb-3 text-sm text-gray-500">
              Category: <strong>{product.category}</strong>
            </p>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 font-semibold">
                {product.rating.rate} <FaStar className="inline ml-1" />
              </span>
            </div>

            {/* Price and Offer */}
            <div className="mb-3">
              <span className="line-through text-gray-500 text-lg mr-2">
                ${product.price}
              </span>
              <span className="text-blue-500 text-3xl font-semibold">
                ${product.offerPrice}
              </span>
              <span className="ml-2 bg-yellow-400 text-gray-800 px-3 py-1 rounded font-semibold">
                {product.offer}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="font-bold text-gray-700">Quantity</label>
              <div
                className="flex items-center mt-2"
                style={{ maxWidth: "150px" }}
              >
                <input
                  type="number"
                  min={1}
                  max={product.quantity}
                  value={quantity}
                  onChange={handleQuantityChange}
                  disabled={product.quantity === 0}
                  className="border border-gray-300 rounded-md px-3 py-2 text-center text-black"
                />
              </div>
            </div>
            {quantity === product.quantity ? (
              <p className="text-red-500">
                That's the maximum available quantity of the product
              </p>
            ) : (
              ""
            )}

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <button
                disabled={product.quantity === 0}
                className={`${product.quantity === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
                  } text-white font-semibold py-2 px-12 rounded-md flex items-center justify-center w-full md:w-1/2 transition duration-200 text-lg`}
                onClick={() => handleAddToCart(product.id)}
              >
                <FaShoppingCart className="mr-2" /> ADD TO CART
              </button>

              <button
                className="bg-yellow-600 cursor-pointer text-white font-semibold py-2 px-12 rounded-md w-full md:w-1/2 hover:bg-yellow-500 transition duration-200 text-lg"
                onClick={() => handleBuyNow(product.id)}
              >
                BUY NOW
              </button>
            </div>


            {/* Wishlist, Compare, Share */}
            <div className="mt-4 flex gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FaHeart /> Add to Wishlist
              </div>
              <div className="flex items-center gap-2">
                <FaBalanceScale /> Add to Compare
              </div>
              <div className="flex items-center gap-2">
                <FaShareAlt /> Share Product
              </div>
            </div>

            {/* Safe Checkout Section */}
            <div className="mt-6 border-t pt-4">
              <p className="mb-2 font-semibold text-gray-800">
                100% Guarantee Safe Checkout
              </p>
              <div className="flex justify-between max-w-[320px] mx-auto">
                <FaCcVisa size={30} className="text-blue-500" />
                <FaCcMastercard size={30} className="text-black" />
                <FaCcPaypal size={30} className="text-blue-500" />
                <FaApple size={30} className="text-black" />
                <FaGooglePay size={30} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
