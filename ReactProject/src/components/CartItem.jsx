import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function CartItem({ item, onQuantityChange, onRemove }) {
    return (
        <div className="flex items-center border-b py-4">
            <div className="w-24 h-24 mr-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-black-500 text-sm">
                    ${item.offerPrice ? item.offerPrice : item.price} (each)
                </p>
                {item.quantity !== undefined && (
                    <p className="text-xs text-gray-500 mt-1">
                        {item.quantity} available in stock
                    </p>
                )}
            </div>
            <div className="flex items-center gap-2">
                <button
                    className={`btn btn-sm btn-outline ${item.counter <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => onQuantityChange(item.id, -1)}
                    disabled={item.counter <= 1}
                >
                    -
                </button>
                <span className="px-2">{item.counter}</span>
                <button
                    className={`btn btn-sm btn-outline ${item.counter >= item.quantity ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => onQuantityChange(item.id, 1)}
                    disabled={item.counter >= item.quantity}
                >
                    +
                </button>
            </div>
            <div className="w-24 text-right">
                ${item.finalPrice.toFixed(2)}
            </div>
            <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => onRemove(item.id)}
            >
                <FaTrashAlt />
            </button>
        </div>
    );
}

export default CartItem;