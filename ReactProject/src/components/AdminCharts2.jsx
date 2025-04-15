// src/components/AdminCharts.jsx
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

const AdminCharts = ({ categoryCounts, quantityData, products }) => {
  // 📊 NEW: Calculate total stock by category
  const totalStockPerCategory = Object.values(
    products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = { category: product.category, total: 0 };
      }
      acc[product.category].total += product.quantity;
      return acc;
    }, {})
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Chart 1: Category Count */}
      <div className="bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-4">Product Categories Count</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryCounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2: Quantity per Product */}
      <div className="bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-4">Product Quantities</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={quantityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#10B981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ NEW Chart 3: Total Stock per Category */}
      <div className="bg-white shadow-md rounded-2xl p-4 col-span-1 md:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Total Stock by Category</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={totalStockPerCategory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#F59E0B" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminCharts;
