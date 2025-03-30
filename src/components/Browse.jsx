import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch = useSelector(store=>store.gptSearch.showGptSearch);
  return (
    <div >
     <Header />
     {
     showGptSearch ? (<GptSearchPage />): 
     (<>
        <MainContainer />
        <SecondaryContainer />
     </>
     )
     }
    
    </div>
   
  )
}
export default Browse