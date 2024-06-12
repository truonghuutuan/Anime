import React from 'react';

const AnimeCard = ({ anime, onSelect }) => {
  return (
    <div className="anime-card" onClick={() => onSelect(anime)}>
      <img src={anime.image} alt={anime.title} />
      <h3>{anime.title}</h3>
      <p>{anime.episode}</p>
    </div>
  );
};

export default AnimeCard;
