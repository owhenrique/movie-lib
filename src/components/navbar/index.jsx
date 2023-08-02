import { Link } from "react-router-dom";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <h2>
        <Link to="/">
          <BsFillCameraReelsFill />
          Rotten Potatoes
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Search for movies..." />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
