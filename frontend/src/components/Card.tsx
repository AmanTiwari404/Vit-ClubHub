import React from "react";

interface CardProps {
  username: string;
  btnText?: string;
  imgSrc: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ username, btnText = "Visit", imgSrc, onClick }) => {
  return (
    <div
      className="relative h-[400px] w-[300px] rounded-md overflow-hidden shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imgSrc}
        alt={username}
        className="z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className="mt-3 inline-flex items-center text-sm font-semibold text-white hover:underline">
          {btnText} →
        </button>
      </div>
    </div>
  );
};

export default Card;
