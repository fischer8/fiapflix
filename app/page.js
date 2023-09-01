import React from 'react';
import Image from 'next/image';

const cardsData = [
  { id: 1, imageUrl: '/shark.jpg' },
  { id: 2, imageUrl: '/pie.webp' },
  { id: 3, imageUrl: '/alien.webp' },
  { id: 4, imageUrl: '/vizin.jpeg' },
  { id: 5, imageUrl: '/scar.jpg' },
  { id: 6, imageUrl: '/gran.webp' },
  { id: 7, imageUrl: '/brasil.jpg' },
  { id: 8, imageUrl: '/deus.jpg' },
];

const Home = () => {
  return (
    <div>
    <h1 className="text-center text-6xl min-h-fit p-5">FiapFLix</h1>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-4 relative">
            <Image src={card.imageUrl} alt={`Image ${card.id}`} className="w-full h-auto max-w-[200px]" />

            <button
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded absolute inset-x-0 bottom-0 h-16"
            >
              Assistir
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;

