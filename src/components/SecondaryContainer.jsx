import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMoviesList);
  const popularMovies = useSelector(store => store.movies.popularMoviesList);

  return (
    <div className="bg-black text-white sm:mt-0 md:-mt-80 relative z-20">
      {
       nowPlayingMovies && <MovieList title="Now Playing" movies={nowPlayingMovies} />
      }
      {
       popularMovies && <MovieList title="Popular" movies ={popularMovies}/>

      }
    </div>
  )
}
export default SecondaryContainer