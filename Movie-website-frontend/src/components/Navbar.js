import { Link, useNavigate  } from "react-router-dom";
import Logo from "../components/movielogo.png";


const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    
  
    navigate("/register");
  };

  return (
    <header>
      <div className="container" >
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
