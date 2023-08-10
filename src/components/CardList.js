import React, { useState, useEffect } from 'react';
import './CardList.css';

import { useNavigate } from 'react-router-dom';

const CardList = ({ fetchUrl }) => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, [fetchUrl]);

  const handleCardClick = (movie) => {
    navigation(`/movie/${movie.id}`, { movieData: movie });
  };

  return (
    <div className="card-list-container">
      <div className="card-list">
        {data.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleCardClick(movie)}
            className="card-link"
          >
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="overlay">
                <h5 className="card-title">{movie.original_title || movie.original_name}</h5>
                <h5 className="card-title">{movie.release_date || movie.first_air_date}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CardList;
