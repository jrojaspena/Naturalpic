import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/NaturalPic"> Home </Link> | <Link to="/NaturalPic/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;