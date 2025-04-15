import React from "react";
import RealDataBarChart from "../components/RealDataBarChart.jsx";
import CategoryCountChart from "../components/CategoryCountChart.jsx";
import ProductQuantitiesChart from "../components/ProductQuantitiesChart.jsx";
import ChartsDashboard from "../components/ChartsDashboard.jsx";
import AdminCharts from "../components/AdminCharts.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import productsList from "../../../product";

const DashboardPage = ({ cart, setCart, wishlist, setWishlist }) => {
  const categoryCounts = [
    { category: "Power Banks", count: 18 },
    { category: "Chargers", count: 10 },
    { category: "Cables", count: 7 },
  ];

  const quantityData = [
    { name: "Power Bank A", quantity: 30 },
    { name: "Cable X", quantity: 15 },
    { name: "Charger Z", quantity: 25 },
  ];

  return (
    <>
      <Navbar
        cart={cart}
        setCart={setCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <ProductQuantitiesChart products={productsList} />


      <section className="mt-12">
  <CategoryCountChart products={productsList} />
</section>



      <section className="mt-12">
  <h2 className="text-2xl font-semibold mb-6 text-center">Real Data Chart</h2>
  <RealDataBarChart products={productsList} />
</section>


      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

        <AdminCharts
          categoryCounts={categoryCounts}
          quantityData={quantityData}
          products={productsList}
        />

        <div className="mt-12">
          <ChartsDashboard products={productsList} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
