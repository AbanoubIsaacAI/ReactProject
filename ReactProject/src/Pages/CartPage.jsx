import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import CartTotals from "../components/CartTotal.jsx";
import CouponForm from "../components/CouponForm.jsx";
import CartActions from "../components/CartActions.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function CartPage({ cart, setCart }) {
    const [discount, setDiscount] = useState(24);

    const handleQuantityChange = (id, amount) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        counter: Math.max(1, item.counter + amount),
                        finalPrice: (item.offerPrice || item.price) * (item.counter + amount),
                    }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const handleApplyCoupon = (couponCode) => {
        if (couponCode === "DISCOUNT10") {
            setDiscount(10);
        } else {
            setDiscount(24);
        }
    };

    const handleUpdateCart = () => {

        console.log("Cart updated");
    };

    const subTotal = cart.reduce(
        (sum, item) => sum + item.finalPrice * item.quantity,
        0
    );

    const tax = subTotal * 0.2;
    const total = subTotal + tax - discount;

    return (
        <>
            <Navbar cart={cart} setCart={setCart}></Navbar>
            <div className="flex flex-col lg:flex-row justify-around mt-10 mb-20 px-4">

                <div className="w-full lg:w-2/3">
                    <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                    <div className="border rounded-md p-4 bg-white">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onQuantityChange={handleQuantityChange}
                                    onRemove={handleRemove}
                                />
                            ))
                        )}
                    </div>
                </div>


                <div className="w-full lg:w-1/4 mt-10 lg:mt-0">
                    <CartTotals
                        subTotal={subTotal}
                        tax={tax}
                        discount={discount}
                        total={total}
                        cart={cart}
                    />
                    <CouponForm onApplyCoupon={handleApplyCoupon} />
                    <CartActions onUpdateCart={handleUpdateCart} />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default CartPage;
