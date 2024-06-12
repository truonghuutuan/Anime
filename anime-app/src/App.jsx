import React, { useState } from 'react';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeDetail';
import { animeData } from './data';
import './App.css';

const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animes, setAnimes] = useState(animeData); // Lưu trữ dữ liệu anime vào state

  const handleSelectAnime = (anime) => {
    setSelectedAnime(anime);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section className="explore">
          <h2>Explore</h2>
          <p>What are you gonna watch today?</p>
          <div className="featured">
            <img src="/images/weather_with_you.jpg" alt="Weather With You" />
            <div className="overlay">
              <h3>Weather With You</h3>
              <p>Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.</p>
            </div>
          </div>
        </section>
        <section className="new-release">
          <h2>New Release</h2>
          <AnimeList animes={animes} onSelect={handleSelectAnime} />
        </section>
        <section className="anime-detail-section">
          <AnimeDetail anime={selectedAnime} />
        </section>
      </main>
    </div>
  );
};

export default App;
