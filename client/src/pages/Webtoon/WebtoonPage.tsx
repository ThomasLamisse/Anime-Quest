import { useEffect, useState } from "react";
import "./WebtoonPage.css";

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
        setWebtoons(data.filter((item) => item.type === "Webtoon")); // Filtre les webtoons
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
              <h1 className="title-webtoon">
                {item.title} ({item.release_year}), {item.rating}
              </h1>
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
