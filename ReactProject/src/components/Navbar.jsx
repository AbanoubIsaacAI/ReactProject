import Logo from "./Logo";
import Search from "./Search";

const navbar = {
  height: "300px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#1B6392",
};

function Navbar() {
  return (
    <nav style={navbar}>
      <Logo />
      <Search />
    </nav>
  );
}

export default Navbar;
