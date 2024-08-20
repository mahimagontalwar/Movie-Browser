import WatchListCard from '../WatchListCard/WatchListCard';
import MovieContext from '../../Context/MovieContext';
import { useContext } from 'react';
import { useState } from 'react';
function WatchList() {
    const [search,setSearch]=useState("");
    let { watchlist,setWatchlist, deleteFromWatchList } = useContext(MovieContext);
    function handleSearch(e){
        setSearch(e.target.value);
    }
    function handleAscendingSort() {
        let sortAsc = watchlist.sort((movieObjA,movieObjB)=>{
           return movieObjA.vote_average-movieObjB.vote_average
        })
        setWatchlist([...sortAsc]);
    }
    function handleDescendingSort(){
        let sortDesc = watchlist.sort((movieObjB,movieObjA)=>{
           // a.toLowerCase().localeCompare(b.toLowerCase())
            return movieObjB.vote_average - movieObjA.vote_average
        })
        setWatchlist([...sortDesc]);
    }
    return (
        <div className='watchlist'>
        <button onClick={handleAscendingSort}>Asc Sort</button>
        <button onClick={handleDescendingSort}>Desc Sort</button>
        
        <input onChange={handleSearch} value={search}/>
        {watchlist.filter((item)=>{
            return item.title.toLowerCase().includes(search.toLowerCase())
        }).map(function(item){
                return (<WatchListCard item={item}  deleteFromWatchList={deleteFromWatchList}/>)
            })}
        </div>
    )
}
export default WatchList;