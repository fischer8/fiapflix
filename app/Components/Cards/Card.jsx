import React from 'react';
import Image from 'next/image';
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookMarkOutline } from '@heroicons/react/24/outline'

export default function Card(props) {
  const { card, handleFav } = props;
  return (
    <section id={card.id}>
      <div className="bg-white rounded-lg shadow-md p-4 relative">
        {card.fav ?
          <BookmarkIcon onClick={() => handleFav.del(card.id)} className="absolute right-3 top-2 hover:text-pink-100" fill='red' width={50} />
          :
          <BookMarkOutline onClick={() => handleFav.add(card.id)} className="absolute right-3 top-2 hover:text-pink-600" fill='grey' width={50} />
        }
        <Image src={card.img} alt={`Image ${card.id}`} height={200} width={200} className="w-full h-auto max-w-[200px]" />
        <button
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded absolute inset-x-0 bottom-0 h-16"
        >
          Assistir
        </button>
      </div>
    </section>
  );
}

