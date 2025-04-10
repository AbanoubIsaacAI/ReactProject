import React from "react";
import { Link } from "react-router-dom";

const CartActions = ({ onUpdateCart }) => {
    return (
        <div className="flex justify-between mt-6">
            <Link
                to="/shop"
                className="btn btn-outline btn-sm border-gray-400"
            >
                Return to Shop
            </Link>
            <button
                className="btn btn-primary btn-sm bg-orange-500 border-orange-500 hover:bg-orange-600"
                onClick={onUpdateCart}
            >
                Update Cart
            </button>
        </div>
    );
};

export default CartActions;
