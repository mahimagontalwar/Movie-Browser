import {createContext} from "react";
const MovieContext= createContext({
    watchlist:[],
    setWatchlist :()=>{},
    handleAddToWatchlist:()=>{},
    deleteFromWatchlist:()=>{}
});
export default MovieContext;