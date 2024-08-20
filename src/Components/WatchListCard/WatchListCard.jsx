import './WatchListCard.css';
function WatchListCard({ item,deleteFromWatchList }) {
  function deleteFWatchList(){
    deleteFromWatchList(item);
  }
    return (
    <div className="watchlist-card">
      <div className="watchlist-card-img">
      <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt='img'/>
    </div>
    <div>
    {item.title}
    </div>
    <div>
    {item.vote_average}
    </div>
    <div className='watchlist-card-delete' onClick={deleteFWatchList}>
    Delete
    </div>
    </div>
)
}
export default WatchListCard;