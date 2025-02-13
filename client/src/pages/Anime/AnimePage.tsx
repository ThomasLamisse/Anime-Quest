import { useEffect, useState } from "react";

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

function AnimePage() {
  const [animes, setAnimes] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/item`)
      .then((response) => response.json())
      .then((data: Item[]) => {
        setAnimes(data.filter((item) => item.type === "Anime"));
      });
  }, []);

  return (
    <>
      <h1 className="title-list-anime">Liste des Animes</h1>
      <section className="all-anime-container">
        {animes.map((item: Item) => (
          <section key={item.id} className="anime-container">
            <div>
              <img src={`/Homepage/${item.image}`} alt="" />
            </div>
            <section className="description">
              <h1 className="title-anime">
                {item.title} ({item.release_year}), {item.rating}
              </h1>
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

export default AnimePage;
