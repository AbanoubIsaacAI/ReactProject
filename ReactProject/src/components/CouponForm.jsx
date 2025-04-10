import React, { useState } from "react";

const CouponForm = ({ onApplyCoupon }) => {
    const [couponCode, setCouponCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onApplyCoupon(couponCode);
    };

    return (
        <div className="mt-4 border rounded-md p-4 bg-white">
            <label className="block mb-2 font-medium">Coupon Code</label>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Enter your coupon"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn btn-sm mt-2 bg-blue-500 hover:bg-blue-600 text-white"
                >
                    Apply Coupon
                </button>
            </form>
        </div>
    );
};

export default CouponForm;
