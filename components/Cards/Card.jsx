import React from 'react';
import Image from 'next/image';
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookMarkOutline } from '@heroicons/react/24/outline'

export default function Card({ film, handleFav }) {
  return (
    <section className="bg-white rounded-lg shadow-md p-4 relative" id={film.id}>
      {film.fav ?
        <BookmarkIcon
          onClick={() => handleFav(film.id, false)}
          className="absolute right-3 top-2 cursor-pointer"
          fill='red'
          width={50}
        />
        :
        <BookMarkOutline
          onClick={() => handleFav(film.id, true)}
          className="absolute right-3 top-2 hover:text-pink-600 cursor-pointer"
          fill='grey'
          width={50}
        />
      }
      <Image
        src={film.img}
        alt={`Image ${film.id}`}
        height={200}
        width={200}
        className="w-full h-auto max-w-[200px]"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded absolute inset-x-0 bottom-0 h-16">
        Mais
      </button>
    </section>
  );
}

