import { Link } from "react-router-dom";
import backgroundImage from "../assets/Offer.png";

function OffersAndShop() {
  return (
    <Link to="/offers">
      <div
        className="relative w-full h-[300px] rounded-3xl overflow-hidden text-center cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center -10%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Heading */}
        <h2 className="relative z-10 text-white text-3xl font-bold drop-shadow-md pt-24">
          Offers
        </h2>
      </div>
    </Link>
  );
}

export default OffersAndShop;
