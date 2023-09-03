"use client"
import { useEffect, useState, React } from 'react'
import { Card, cardsData } from './Components';

const Home = () => {
  const [films, setFilms] = useState(cardsData);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards")) || cardsData;
    setFilms([...cards]);
  }, [])

  const handleFavorites = (id, bool) => {
    const cards = JSON.parse(localStorage.getItem("cards")) || cardsData;
    cards[id].fav = bool;
    localStorage.setItem("cards", JSON.stringify(cards));
    setFilms([...cards]);
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <h1 className="absolute top-0 text-center text-6xl min-h-fit p-5">FiapFLix</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {films.map((film, i) => <Card key={`card-${i}`} card={film} handleFav={handleFavorites} />)}
      </section>
    </section>
  );
};

export default Home;
