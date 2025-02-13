import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importer useParams
import "./Informations.css";

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

function Informations() {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/item/${id}`)
      .then((response) => response.json())
      .then((data: Item) => {
        setItem(data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération:", error),
      );
  }, [id]);

  if (!item) return <p>Chargement...</p>;

  return (
    <section className="info-container">
      <div className="title-info">{item.title}</div>
      <img
        className="img-info"
        src={`/Homepage/${item.image}`}
        alt={item.title}
      />
      <section className="description-info">
        <div className="type-info">{item.type}</div>
        <div className="release_year-info">
          Date de sortie : {item.release_year}
        </div>
        <div className="author-info">Auteur : {item.author}</div>
        <div className="rating-info">Note : {item.rating}</div>
        <div className="synopsis-info"> Synopsis : {item.synopsis}</div>
      </section>
    </section>
  );
}

export default Informations;
