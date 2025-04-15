import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const RealDataBarChart = ({ products }) => {
  // 🧠 Transform product data to get quantity per product
  const productQuantities = products.map((product) => ({
    name: product.name,
    quantity: product.quantity,
  }));

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Product Quantities</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={productQuantities}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#3B82F6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealDataBarChart;
