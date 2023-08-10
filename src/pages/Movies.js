import './Movies.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Card = ({ imageUrl, title, imdb,  releaseDate }) => {


    return (
        <div>
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt={title} />

                <div className="overlay">
                    <h5 className="card-title">{title}</h5>
                    <p>Imdb rating: {imdb}</p>
                   
                    <p>Release Date: {releaseDate}</p>

                </div>
            </div>

        </div>
    );
};

const CardList = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigate();
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=956bc59cec62b55741365cda6ad66d4a&language=en-US')
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    const handleCardClick = (movie) => {
        navigation(`/movie/${movie.id}`, { movieData: movie });
      };
    const base_url = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="container mt-4">
            <div className="row">
                {data.map((item) => (
                    <div key={item.id} onClick={() => handleCardClick(item)} className="col-md-3 mb-2">
                        <Card
                             imageUrl={`${base_url}${item.poster_path}`}
                             title={item.original_title}
                            imdb={item.vote_average}
                            id={item.id}
                           
                            releaseDate={item.release_date}
                        />
            
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardList;
