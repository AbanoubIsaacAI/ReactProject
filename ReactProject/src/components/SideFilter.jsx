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
  function handleElectronics() {
    setProducts(allProducts.filter((products) => products.category === "TV"));
  }
  function handleLaptops() {
    setProducts(
      allProducts.filter(
        (products) =>
          products.category === "Laptops" ||
          products.category === "Computers" ||
          products.category === "MacBooks"
      )
    );
  }
  function handleComputerAccessories() {
    setProducts(
      allProducts.filter(
        (products) => products.category === "Gaming Accessories"
      )
    );
  }
  function handleSmartphones() {
    setProducts(
      allProducts.filter((products) => products.category === "Smartphones")
    );
  }
  function handleHeadphones() {
    setProducts(
      allProducts.filter((products) => products.category === "Headphones")
    );
  }
  function handleHardsAndCarts() {
    setProducts(
      allProducts.filter(
        (products) => products.category === "SSD Hards and Graphic Cards"
      )
    );
  }
  function handlePowerbanks() {
    setProducts(
      allProducts.filter((products) => products.category === "Power Banks")
    );
  }
  function handleCameras() {
    setProducts(
      allProducts.filter((products) => products.category === "Cameras")
    );
  }
  function handleResetFilter() {
    setProducts(allProducts);
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
              onChange={handleElectronics}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Computer & Laptop"
              onChange={handleLaptops}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Computer Accessories"
              onChange={handleComputerAccessories}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Smartphone"
              onChange={handleSmartphones}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Headphone"
              onChange={handleHeadphones}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="SSD Hards and Graphic Cards"
              onChange={handleHardsAndCarts}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Powerbanks"
              onChange={handlePowerbanks}
            />
            <input
              className="btn"
              type="radio"
              name="frameworks"
              aria-label="Cameras"
              onChange={handleCameras}
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
