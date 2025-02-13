import { useEffect, useState } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  type: string;
  title: string;
  synopsis: string;
  image: string;
  release_year: string;
  author: string;
  rating: number;
}

function Homepage() {
  const [items, setItems] = useState([] as Item[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/item`)
      .then((response) => response.json())
      .then((data: Item[]) => {
        setItems(data);
      });
  });
  return (
    <>
      <div className="img-container">
        <img className="img-homepage" src="./Homepage/homepage.jpg" alt="" />
      </div>
      <section>
        <ul className="title-homepage">
          TOP 3 DES MEILLEURS ANIMES WEBTOON A LIRE OU REGARDER
        </ul>
      </section>
      <section className="all-anime-container">
        {items.map((item: Item) => (
          <section key={item.id} className="anime-container">
            <div>
              <img src={`/Homepage/${item.image}`} alt="" />
            </div>
            <section className="description">
              <Link to={`/informations/${item.id}`}>
                <h1 className="title-anime">
                  {item.title} ({item.release_year}), {item.rating}
                </h1>
              </Link>
              <div className="type">{item.type}</div>
              <p className="author-anime">{item.author}</p>
              <p className="synopsis-anime">{item.synopsis}</p>
            </section>
          </section>
        ))}
      </section>
    </>
  );
}

export default Homepage;
