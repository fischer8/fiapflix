"use client"
import { useEffect, useState, React } from 'react'
import { Card, cardsData } from './Components';

const Home = () => {
  const [films, setFilms] = useState(cardsData);

  useEffect(() => {
    let cards = JSON.parse(localStorage.getItem("cards")) || cardsData;
    setFilms(cards);
  }, [])

  const handleFavorites = (id, isFav) => {
    const cards = JSON.parse(localStorage.getItem("cards")) || cardsData;
    cards[id].fav = isFav;
    localStorage.setItem("cards", JSON.stringify(cards));
    setFilms(cards)
  }

  return (
    <section>
      <h1 className="text-center text-6xl min-h-fit p-5">FiapFLix</h1>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {films.map((film, i) => <Card key={i} card={film} handleFav={handleFavorites} />)}
        </section>
      </section>
    </section>
  );
};

export default Home;

