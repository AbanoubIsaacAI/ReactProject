import React from "react";

const CartTotals = ({ subTotal, tax, discount, total }) => {
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
            <button className="btn btn-block mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CartTotals;