import { useState, useEffect } from "react";

function SideFilter({ products, setProducts, allProducts }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Combined filtering logic
  useEffect(() => {
    let filtered = allProducts;

    // Apply category filter
    if (selectedCategory) {
      if (selectedCategory === "Laptops") {
        filtered = filtered.filter((p) =>
          ["Laptops", "MacBooks", "Computers"].includes(p.category)
        );
      } else {
        filtered = filtered.filter((p) => p.category === selectedCategory);
      }
    }

    // Apply price filter
    filtered = filtered.filter(
      (p) => p.price >= minValue && p.price <= maxValue
    );

    setProducts(filtered);
  }, [minValue, maxValue, selectedCategory, allProducts, setProducts]);

  const handleResetFilter = () => {
    setMinValue(0);
    setMaxValue(10000);
    setSelectedCategory(null);
    setProducts(allProducts);
  };

  return (
    <div className="flex flex-col w-[300px] border-r border-gray-300 text-left pt-10 pl-10 pr-4">
      {/* Category Filter */}
      <div className="mb-10">
        <h4 className="text-lg font-semibold mb-2">Category</h4>
        <form className="filter flex flex-col space-y-2">
          <button
            type="button"
            className="btn btn-square"
            onClick={handleResetFilter}
          >
            ×
          </button>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("TV")}
              checked={selectedCategory === "TV"}
            />
            Electronic Devices
          </label>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("Laptops")}
              checked={selectedCategory === "Laptops"}
            />
            Computer & Laptop
          </label>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("Gaming Accessories")}
              checked={selectedCategory === "Gaming Accessories"}
            />
            Computer Accessories
          </label>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("Smartphones")}
              checked={selectedCategory === "Smartphones"}
            />
            Smartphones
          </label>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("Headphones")}
              checked={selectedCategory === "Headphones"}
            />
            Headphones
          </label>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("SSD Hards and Graphic Cards")}
              checked={selectedCategory === "SSD Hards and Graphic Cards"}
            />
            SSD Hards and Graphic Cards
          </label>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("Power Banks")}
              checked={selectedCategory === "Power Banks"}
            />
            Powerbanks
          </label>

          <label>
            <input
              type="radio"
              name="category"
              className="mr-2"
              onChange={() => setSelectedCategory("Cameras")}
              checked={selectedCategory === "Cameras"}
            />
            Cameras
          </label>
        </form>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Price Range</h4>
        <div className="space-y-4">
          <input
            type="range"
            min={0}
            max={10000}
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
            className="range [--range-bg:lightgray] [--range-thumb:blue]"
          />
          <input
            type="range"
            min={0}
            max={10000}
            value={maxValue}
            onChange={(e) => setMaxValue(Number(e.target.value))}
            className="range [--range-bg:lightgray] [--range-thumb:blue]"
          />

          <div className="flex gap-4 items-center">
            <input
              type="number"
              value={minValue}
              onChange={(e) => setMinValue(Number(e.target.value))}
              placeholder="Min price"
              className="border border-gray-300 rounded px-2 py-1 w-24"
            />
            <input
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(Number(e.target.value))}
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
