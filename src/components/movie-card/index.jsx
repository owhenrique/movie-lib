import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const IMAGE_URL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showlink = true }) => {
  return (
    <div className="movie-card">
      <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_avarage}
      </p>
      {showlink && <Link to={`/movies/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;
