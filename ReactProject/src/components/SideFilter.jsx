import { useState } from "react";

function SideFilter({ products, setProducts, allProducts }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Apply both price and category filters
  function applyFilters(
    min = minValue,
    max = maxValue,
    category = selectedCategory
  ) {
    let filtered = allProducts.filter(
      (product) => product.price >= min && product.price <= max
    );

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setProducts(filtered);
  }

  // Handle price changes
  const handleMinChange = (val) => {
    const value = Number(val);
    if (value <= maxValue) {
      setMinValue(value);
      applyFilters(value, maxValue);
    }
  };

  const handleMaxChange = (val) => {
    const value = Number(val);
    if (value >= minValue) {
      setMaxValue(value);
      applyFilters(minValue, value);
    }
  };

  // Handle category change
  function handleCategoryChange(category) {
    setSelectedCategory(category);
    applyFilters(minValue, maxValue, category);
  }

  // Reset all filters
  function handleResetFilter() {
    setMinValue(0);
    setMaxValue(10000);
    setSelectedCategory("");
    setProducts(allProducts);
  }

  return (
    <div className="flex flex-col w-[300px] border-r border-gray-300 text-left pt-10 pl-10 pr-4">
      <div className="mb-10">
        <h4 className="text-lg font-semibold mb-2">Category</h4>
        <form className="filter flex flex-col space-y-2">
          <input
            className="btn btn-square"
            type="reset"
            value="×"
            onClick={handleResetFilter}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="Electronic Devices"
            onChange={() => handleCategoryChange("TV")}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="Computer & Laptop"
            onChange={() => handleCategoryChange("Laptops")}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="Computer Accessories"
            onChange={() => handleCategoryChange("Gaming Accessories")}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="Smartphone"
            onChange={() => handleCategoryChange("Smartphones")}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="Headphone"
            onChange={() => handleCategoryChange("Headphones")}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="SSD Hards and Graphic Cards"
            onChange={() => handleCategoryChange("SSD Hards and Graphic Cards")}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="Powerbanks"
            onChange={() => handleCategoryChange("Power Banks")}
          />
          <input
            className="btn"
            type="radio"
            name="category"
            aria-label="Cameras"
            onChange={() => handleCategoryChange("Cameras")}
          />
        </form>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Price Range</h4>
        <div className="space-y-4">
          <input
            type="range"
            min={0}
            max={10000}
            value={minValue}
            onChange={(e) => handleMinChange(e.target.value)}
            className="range [--range-bg:lightgray] [--range-thumb:blue] [--range-fill:0]"
          />
          <input
            type="range"
            min={0}
            max={10000}
            value={maxValue}
            onChange={(e) => handleMaxChange(e.target.value)}
            className="range [--range-bg:lightgray] [--range-thumb:blue] [--range-fill:0]"
          />

          <div className="flex gap-4 items-center">
            <input
              type="number"
              value={minValue}
              onChange={(e) => handleMinChange(e.target.value)}
              placeholder="Min price"
              className="border border-gray-300 rounded px-2 py-1 w-24"
            />
            <input
              type="number"
              value={maxValue}
              onChange={(e) => handleMaxChange(e.target.value)}
              placeholder="Max price"
              className="border border-gray-300 rounded px-2 py-1 w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideFilter;
