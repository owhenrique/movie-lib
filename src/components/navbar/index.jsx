import { Link, useNavigate } from "react-router-dom";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="nav">
      <h2>
        <Link to="/">
          <BsFillCameraReelsFill />
          Rotten Potatoes
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
