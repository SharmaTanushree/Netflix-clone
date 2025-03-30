import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div className="mt-3" >
        <h1 className="text-3xl bg:black text-white">{title}</h1>
        <div className="pt-2">
            <div className="flex overflow-x-scroll no-scrollbar">
                {movies.map(movie => <MovieCard key={movie.id} photoUrl={movie.poster_path} />)}
            </div>
        </div>

    </div>
  
  )
}
export default MovieList