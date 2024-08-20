import './MovieCard.css';
import { Link } from "react-router-dom";
import MovieContext from '../../Context/MovieContext';
import { useContext } from 'react';
function MovieCard({ movie}) {
let {watchlist,handleAddToWatchList,deleteFromWatchList}=useContext(MovieContext);
    function doesContain() {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id === movie.id) {
                return true;
            }
        }
        return false;
    }
    
    function addToWatchList(){
        handleAddToWatchList(movie);
    }
    function deleteFWatchList(){
        deleteFromWatchList(movie);
    }
    return (
        < div className="movie-card" >
            <div className="movie-card-img">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='img'/>
            </div>
            <Link to={`/details/${movie.id}`}>
                i
            </Link>
            <div>
                {movie.release_date}
            </div>
            <div className='movie-card-title'>
                {movie.title}
            </div>
            {doesContain() ? (<button onClick={deleteFWatchList}>remove</button>) : (<button onClick={addToWatchList}>add</button>) }
        </div >
    )
}
export default MovieCard;