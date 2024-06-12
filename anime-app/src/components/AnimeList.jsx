import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animes, onSelect }) => {
  return (
    <div className="anime-list">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default AnimeList;
