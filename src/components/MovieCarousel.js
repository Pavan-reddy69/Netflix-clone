import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import './Movie.css';
import { useNavigate } from 'react-router-dom';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    const getData = () => {
      fetch('https://api.themoviedb.org/3/trending/all/week?api_key=956bc59cec62b55741365cda6ad66d4a&language=en-US')
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log('Error fetching data:', error));
    };
    getData();
  }, []);
  const handleCardClick = (movie) => {
    navigation(`/movie/${movie.id}`, { movieData: movie });
  };

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='movie-carousel'>
      {movies.length > 0 ? ( // Check if movies array is not empty
        <Carousel className='mov-contain custom-carousel' wrap={true}>
          {movies.map((movie) => (
            <Carousel.Item className="carousel-item" interval={5000} key={movie.id}>
              <img
                className="d-block w-100"
                src={`${base_url}${movie?.backdrop_path}`}
                alt=" One"
              />
              <Carousel.Caption className='carousel-caption-left'>
                <h1>{movie.original_title || movie.original_name}</h1>
                <button className='play' style={{ border: "0", padding: "8px",  width: "5rem", backgroundColor: "rgba(255, 255, 255, 0.6)" }}  onClick={() => handleCardClick(movie)}><strong>PLAY</strong></button>
                <button className='play1' style={{ border: "0", padding: "8px", width: "5rem", backgroundColor: "rgba(255, 255, 255, 0.6)" }} onClick={() => handleCardClick(movie)}><strong>INFO</strong></button>
                <strong><small style={{ marginRight: "600px"}}><b>IMDB Rating : {movie?.vote_average}</b></small></strong>
                <p>{movie?.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div>Loading...</div> // Show a loading message while fetching data
      )}
    </div>
  );
}

export default MovieCarousel;
