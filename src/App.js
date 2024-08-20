import './App.css';
import {useState} from 'react';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import WatchListPage from './Pages/WatchListPage';

import { BrowserRouter,Route,Switch } from "react-router-dom";
// import Callbacks from './Components/Callbacks/Callbacks';
import MovieContext from './Context/MovieContext';
import NavBar from './Components/NavBar';
function App() {
  //const [input,setInput]=useState("");
  // const [count,setCount]=useState(0);
  const [watchlist,setWatchlist]=useState(JSON.parse(localStorage.getItem('movies')) ?? []) ;
  console.log(watchlist);
  function handleAddToWatchList(movieObj){
    let updatedWatchlist=[...watchlist,movieObj];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('movies',JSON.stringify(updatedWatchlist));
  }
  function deleteFromWatchList(movieObj){
    let filteredMovies = watchlist.filter((movie)=>{
      return movie.id!==movieObj.id;
    })
    setWatchlist(filteredMovies);
    localStorage.setItem('movies',JSON.stringify(filteredMovies));
  }
  //const incrementCount=useCallback(()=> setCount(count+1),[count]);
  // const valueRef=useRef(0);
  // const inputRef=useRef(0);
  // const onSubmit=()=>{
  //   console.log(inputRef.current);
  //   console.log(inputRef.current.value);
  //   inputRef.current.focus();
  //   valueRef.current = valueRef.current+1;
  //   // setCount(count+1);
  // }
//  useEffect(()=>{
//   console.log(valueRef.current);
//  },[valueRef.current])
  return (
    <div className="App">
    {/* <input type="text"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <button onClick={incrementCount}>Increment Count</button>
    <h3>Input Text:{input}</h3>
    <h3>Count:{count}</h3>
    <hr/>
    <Callbacks count={count} xyz={incrementCount}/> */}
      <BrowserRouter>
      <MovieContext.Provider value={{watchlist,setWatchlist,handleAddToWatchList,deleteFromWatchList}}>
      <NavBar/>
      <Switch>
      <Route
       path="/"
       exact={true}
       component={HomePage}
       //render={()=><HomePage watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} deleteFromWatchList={deleteFromWatchList}/>}
       />
      <Route
       path="/details/:id"
       exact={true}
       component={DetailsPage}
       />
       <Route
       path="/watchlist"
       exact={true}
       component={WatchListPage}
       />
       <Route component={NotFoundPage}
       />
       </Switch>
       </MovieContext.Provider>
      </BrowserRouter>
      {/* <span>{valueRef.current}</span>
      {/* ////<span>{count}</span> */}
   {/* <input id="btn"  ref={inputRef} type="text"/>
      <button onClick={onSubmit}>New Value</button> */} 

    </div>
  );
}

export default App;
