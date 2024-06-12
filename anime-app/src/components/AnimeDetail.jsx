import React from 'react';

const AnimeDetail = ({ anime }) => {
  if (!anime) {
    return <div className="anime-detail">Select an anime to see details</div>;
  }

  return (
    <div className="anime-detail">
      <img src={anime.image} alt={anime.title} />
      <h2>{anime.title}</h2>
      <p>{anime.description}</p>
    </div>
  );
};

export default AnimeDetail;
