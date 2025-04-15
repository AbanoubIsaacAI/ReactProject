import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Utility: map product names to their quantities
const getProductQuantities = (products) => {
  return products.map((product) => ({
    name: product.title || "Unnamed",
    quantity: product.quantity || 0,
  }));
};

const ProductQuantitiesChart = ({ products }) => {
  const data = getProductQuantities(products);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Product Quantities</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="quantity" fill="#3B82F6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductQuantitiesChart;
