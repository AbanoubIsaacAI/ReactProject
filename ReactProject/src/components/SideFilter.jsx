import { useState } from "react";

function SideFilter({ products, setProducts, allProducts, setAllProducts }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);

  function handlePrice() {
    setProducts(
      allProducts.filter(
        (product) => product.price >= minValue && product.price <= maxValue
      )
    );
  }

  const handleMinChange = (val) => {
    const value = Number(val);
    handlePrice();
    if (value <= maxValue) setMinValue(value);
  };

  const handleMaxChange = (val) => {
    const value = Number(val);
    handlePrice();
    if (value >= minValue) setMaxValue(value);
  };

  return (
    <div className="flex flex-col w-[300px] border-r border-gray-300 text-left pt-10 pl-10 pr-4">
      {/* Category Filter */}
      <div className="mb-10">
        <h4 className="text-lg font-semibold mb-2">Category</h4>
        <div className="space-y-2">
          {[
            "Electronic Devices",
            "Computer & Laptop",
            "Computer Accessories",
            "Smartphone",
            "Headphone",
          ].map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={category}
                name="Category filter"
                value={category}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Price Range</h4>
        <div className="space-y-4">
          {/* Range sliders */}
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
