import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <Logo />
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Outlet />
    </div>
  );
};

export default NavBar;
