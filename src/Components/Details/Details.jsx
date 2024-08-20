import {useState,useEffect} from 'react';
import {useParams } from "react-router-dom";
import Cast from '../Cast';
import DetailsBanner from '../DetailsBanner/DetailsBanner';
function Details(){
    let [details,setDetails]=useState([]);
    const {id}=useParams();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&append_to_response=credits,videos`).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
            setDetails(res);
        })
    }, [id])
return (
    <>
    <DetailsBanner details={details}/>
    <h2>Cast</h2>
    {details.credits ? <Cast cast={details.credits.cast.slice(0,8)}/> :null}
    </>
)
}
export default Details;