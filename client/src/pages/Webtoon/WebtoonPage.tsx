import { useEffect, useState } from "react";
import "./WebtoonPage.css";
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

function WebtoonPage() {
  const [webtoons, setWebtoons] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/item`)
      .then((response) => response.json())
      .then((data: Item[]) => {
        setWebtoons(data.filter((item) => item.type === "Webtoon"));
      });
  }, []);

  return (
    <>
      <h1 className="title-list-webtoon">Liste des Webtoons</h1>
      <section className="all-anime-container">
        {webtoons.map((item: Item) => (
          <section key={item.id} className="webtoon-container">
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
              <p className="author-webtoon">{item.author}</p>
              <p className="synopsis-webtoon">{item.synopsis}</p>
            </section>
          </section>
        ))}
      </section>
    </>
  );
}

export default WebtoonPage;
