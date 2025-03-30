import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchResult = () => {
  const {movieResults, movieNames} = useSelector((state)=> state.gptSearch);
  if(!movieNames) return null;
  return (
    <div className="bg-black/50 m-2 p-2">
      {
        movieNames.split(",").map((name, index)=>{
          return (
            <MovieList title={name} movies= {movieResults[index]} />
          )
        })
      }
    </div>
  )
}
export default GptSearchResult