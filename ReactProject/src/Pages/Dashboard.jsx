import React from "react";
import DoughnutOffersChart from "../components/DoughnutOffersChart";
import CategoryCountChart from "../components/CategoryCountChart.jsx";
import RatingDashboard from "../components/RatingDashboard";
import ProductQuantitiesChart from "../components/ProductQuantitiesChart.jsx";
import ChartsDashboard from "../components/ChartsDashboard.jsx";
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

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

<<<<<<< Updated upstream
        <AdminCharts
          categoryCounts={categoryCounts}
          quantityData={quantityData}
          products={productsList}
        />

=======
        {/* Product Quantities */}
        <ProductQuantitiesChart products={productsList} />

        {/* Product Categories Count */}
        <section className="mt-12">
          <CategoryCountChart products={productsList} />
        </section>

        {/* Final Price Trend */}
>>>>>>> Stashed changes
        <div className="mt-12">
          <ChartsDashboard products={productsList} />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap my-12 w-full px-4">
          
          {/* DoughnutOffersChart */}
          <div className="w-full lg:w-1/2 max-w-[500px]">
            <DoughnutOffersChart products={productsList} />
          </div>

          {/* Top Rated Products */}
          <div className="w-full lg:w-1/2 max-w-[700px]">
            <RatingDashboard products={productsList} />
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
