import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMoviesList);
  if(!movies) return null;
  const {original_title, overview, id} = movies[0];
  return (
    <div className="pt-[33%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}
export default MainContainer