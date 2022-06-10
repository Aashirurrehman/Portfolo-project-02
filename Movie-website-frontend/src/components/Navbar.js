import React, { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Logo from "../components/movielogo.png";
import { GlobalContext } from "../context/GlobalState";

const Navbar = (movie) => {
  const {
    watched,
    watchlist,
    removeMovieFromWatchlist,
    removeFromWatched,
    

  } = useContext(GlobalContext);
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.clear();
    localStorage.removeItem(watched);
    localStorage.removeItem(watchlist);
    removeFromWatched(movie.id);
    removeMovieFromWatchlist(movie.id);


    

    navigate("/register");
  };

  return (
    <header>
      <div className="container">
        <div className="inner-container">
          <div className="brand">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Playlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/Add" className="btn">
                Search
              </Link>
            </li>

            <li>
              <div className="btn" onClick={logOut}>
                Log out
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
