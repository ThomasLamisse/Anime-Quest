import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <section className="section-navbar">
        <img className="logo" src="./Navbar/logo.png" alt="logo" />

        <Link to="/" className="homepage-navbar">
          Accueil
        </Link>
        <Link to="/anime" className="anime-navbar">
          Anime
        </Link>
        <Link to="/webtoon" className="webtoon-navbar">
          Webtoon
        </Link>
      </section>
    </>
  );
}

export default Navbar;
