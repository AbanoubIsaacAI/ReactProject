import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ subTotal, tax, discount, total, cart }) => {
    return (
        <div className="border rounded-md p-4 bg-white">
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Sub-total:</span>
                    <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between">
                    <span>Discount:</span>
                    <span>-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <Link
                to={cart.length > 0 ? "/checkout" : "#"}
                className={`btn btn-block mt-4 ${
                    cart.length > 0
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'bg-gray-400 cursor-not-allowed'
                } text-white`}
                onClick={e => cart.length === 0 && e.preventDefault()}
            >
                Proceed to Checkout (${total.toFixed(2)})
            </Link>
        </div>
    );
};

export default CartTotals;