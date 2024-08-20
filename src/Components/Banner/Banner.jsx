import { useState, useEffect } from 'react';
import './Banner.css';
function Banner() {
    let [films, setFilms] = useState([]);
    let [film, setFilm] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US').then((res) => {
            return res.json();
        }).then((res) => {
            let id = Math.floor(Math.random() * 20);
            setFilm(res.results[id]);
        })
    }, []);
    return (
        <div className="banner">
            <div className='banner-img'>
                <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} />
            </div>
            <div className='banner-title'>{film.title}</div>
        </div>
    )
}
export default Banner;