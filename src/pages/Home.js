import React from 'react';
import MovieCarousel from '../components/MovieCarousel';
import CardList from '../components/CardList';
import './Home.css';

const Home = () => {
  const trendingUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=956bc59cec62b55741365cda6ad66d4a&language=en-US';
  const moviesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=956bc59cec62b55741365cda6ad66d4a&with_genres=28';
  const animeUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=956bc59cec62b55741365cda6ad66d4a&with_genres=16';
  const tvSeriesUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=956bc59cec62b55741365cda6ad66d4a';
  const NetflixOriginals = 'https://api.themoviedb.org/3/discover/tv?api_key=956bc59cec62b55741365cda6ad66d4a&with_networks=213';

  return (
    <div>
      <MovieCarousel />

      <div className="card-lists-container"> {/* Add a parent container for all card lists */}
        <div className="card-list-section">
          <h3>Trending:</h3>
          <CardList fetchUrl={trendingUrl} />
        </div> <div className="card-list-section">
          <h3>TV Series</h3>
          <CardList fetchUrl={tvSeriesUrl} />
        </div>
        <div className="card-list-section">
          <h3>Netflix Originals:</h3>
          <CardList fetchUrl={NetflixOriginals} />
        </div>
        <div className="card-list-section">
          <h3>Movies</h3>
          <CardList fetchUrl={moviesUrl} />
        </div>
        <div className="card-list-section">
          <h3>Anime</h3>
          <CardList fetchUrl={animeUrl} />
        </div>
       
      </div>

    </div>
  );
};

export default Home;
