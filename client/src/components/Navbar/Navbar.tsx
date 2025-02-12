import "./Navbar.css";

function Navbar() {
  return (
    <>
      <section className="section-navbar">
        <img className="logo" src="./Navbar/logo.png" alt="" />

        <div className="anime-navbar">Anime</div>
        <div className="webtoon-navbar">Webtoon</div>
      </section>
    </>
  );
}

export default Navbar;
