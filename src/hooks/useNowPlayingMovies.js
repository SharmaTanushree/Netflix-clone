import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovieList } from "../utils/movieSlice";


const useNowPlayingMovies = () =>{
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    const dispatch = useDispatch();
    const nowPlayingMoviesList = useSelector((store)=>store.movies.nowPlayingMoviesList)

    const getNowPlayingMovies = async()=>{
        const response = await fetch(url,API_OPTIONS);
        const json = await response.json();
        dispatch(addNowPlayingMovieList(json.results));
     }

    useEffect(()=>{
       !nowPlayingMoviesList && getNowPlayingMovies();
    }
    ,[]);

    
}

export default useNowPlayingMovies;