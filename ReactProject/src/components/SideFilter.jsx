import { useState } from "react";

function SideFilter({ setProducts, allProducts }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [currentCategory, setCategory] = useState("");

  function applyFilters(
    min = maxValue,
    max = maxValue,
    category = currentCategory
  ) {
    let currentProducts = allProducts.filter(
      (product) => product.price >= min && product.price <= max
    );

    if (category) {
      currentProducts = currentProducts.filter(
        (product) => product.category === category
      );
    }
    setProducts(currentProducts);
  }
  function handleCategory(category) {
    setCategory(category);
    applyFilters(minValue, maxValue, category);
  }
  function handleResetFilter() {
    setProducts(allProducts);
    setMinValue(0);
    setMaxValue(10000);
    setCategory("");
  }
  const handleMinChange = (val) => {
    const value = Number(val);
    if (value <= maxValue) setMinValue(value);
    applyFilters(value, maxValue);
  };

  const handleMaxChange = (val) => {
    const value = Number(val);
    if (value >= minValue) setMaxValue(value);
    applyFilters(minValue, value);
  };

  return (
    <div className="flex flex-col w-[300px] border-r border-gray-300 text-left pt-10 pl-10 pr-4">
      <div className="mb-10">
        <h4 className="text-lg font-semibold mb-2">Category</h4>
        <div className="space-y-2">
          <form className="filter flex flex-col">
            <input
              className="btn btn-square"
              type="reset"
              value="×"
              onClick={handleResetFilter}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Electronic Devices"
              onChange={() => handleCategory("TV")}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Computer & Laptop"
              onChange={() => handleCategory("Laptops&Computers")}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Computer Accessories"
              onChange={() => handleCategory("Gaming Accessories")}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Smartphone"
              onChange={() => handleCategory("Smartphones")}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Headphone"
              onChange={() => handleCategory("Headphones")}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="SSD Hards and Graphic Cards"
              onChange={() => handleCategory("SSD Hards and Graphic Cards")}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Powerbanks"
              onChange={() => handleCategory("Power Banks")}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Cameras"
              onChange={() => handleCategory("Cameras")}
            />
          </form>
        </div>
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
