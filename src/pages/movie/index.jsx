import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  BsGraphUpArrow,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkFontFill,
} from "react-icons/bs";

import MovieCard from "../../components/movie-card/index";

import "./movie.css";

const MOVIES_URL = import.meta.env.VITE_API;
const API_KEY = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${MOVIES_URL}${id}?${API_KEY}`;

    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <div>
          <MovieCard movie={movie} showlink={false} />
          <p className="tag-line">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Budget:
            </h3>
              <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUpArrow /> Revenue:
            </h3>
              <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Runtime:
            </h3>
              <p>{movie.runtime} minutes</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkFontFill /> Overview:
            </h3>
              <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
