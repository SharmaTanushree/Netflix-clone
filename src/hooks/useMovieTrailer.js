import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const movieTrailer = useSelector(state => state.movies.movieTrailer);
    
    const getMovieTrailer = async() =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        
        const json = await res.json();
        
        const filteredResults = json.results.filter(r => r.type === 'Trailer');
        const trailer = filteredResults.length ? filteredResults[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(()=>{
        !movieTrailer && getMovieTrailer();
    },[])

}

export default useMovieTrailer;