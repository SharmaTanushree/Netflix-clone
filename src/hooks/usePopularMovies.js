import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMoviesList } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popularMovieList = useSelector(store => store.movies.popularMoviesList);

    const getPopularMovies = async()=>{
        const res= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await res.json();
        dispatch(addPopularMoviesList(json.results));
    }

    useEffect(()=>{
       !popularMovieList && getPopularMovies();
    })
}

export default usePopularMovies;