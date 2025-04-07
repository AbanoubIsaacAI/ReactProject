import Logo from "./Logo";
import Search from "./Search";

const navbar = {
  height: "100px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#1B6392",
};

function Navbar() {
  return (
    <>
      <nav style={navbar}>
        <Logo />
        <Search />
      </nav>
      <div className="bg-red-500">Try tailwind</div>
    </>
  );
}

export default Navbar;
