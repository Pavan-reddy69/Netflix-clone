import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import CardList from './CardList';
import './MovieDetails.css';

const MoviePlayer = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState([]);
    const [playerUrl, setPlayerUrl] = useState('');
    const [showPlayer, setShowPlayer] = useState(false);


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=956bc59cec62b55741365cda6ad66d4a`)
            .then((response) => response.json())
            .then((data) => {
                setMovieData(data);
            })
            .catch((error) => console.error('Error fetching additional data:', error));
    }, [id]);
    useEffect(() => {
        const handleClick = async () => {
            if (movieData) {
                const movieName = movieData?.original_title || movieData?.original_name;
                try {
                    const url = await movieTrailer(movieName || '');
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setPlayerUrl(urlParams.get('v'));
                } catch (error) {
                    console.error('Error fetching or constructing trailer URL:', error);
                    setPlayerUrl(''); 
                }
            }
        };

        handleClick();
    }, [movieData]);

    const opts = {
        height: '448px',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handlePlayClick = () => {
        setShowPlayer(true);
    };

    const handleBackClick = () => {
        setShowPlayer(false);
    };

    return (
        <div>
            {showPlayer ? (
                <div className='youtube-player'>
                    <YouTube videoId={playerUrl} opts={opts} />
                    <button onClick={handleBackClick} className='banner_button'>
                        Back
                    </button>
                </div>
            ) : (
                <div
                    className='ban'
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}")`,
                        backgroundPosition: 'center center',
                    }}
                >
                    <div className='ban_contents'>
                        <strong>
                            <h1 className='ban_title'>{movieData?.original_title || movieData?.original_name}</h1>
                        </strong>
                        <div className='banner_buttons'>
                            <button className='banner_button' onClick={handlePlayClick}>
                                Play
                            </button>
                        </div>
                        <h1 className='banner_description'>{movieData?.overview}</h1>
                    </div>
                    <div className='banner_footer'></div>
                </div>
            )}
            <h2 style={{paddingTop:"20px",color:"white",paddingLeft:"15px"}}>Recommended For You:</h2>
            <CardList fetchUrl={'https://api.themoviedb.org/3/trending/all/week?api_key=956bc59cec62b55741365cda6ad66d4a&language=en-US'}  />
        </div>
    );
};

export default MoviePlayer;
