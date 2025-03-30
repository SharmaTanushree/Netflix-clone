import { useDispatch, useSelector } from "react-redux";
import languageTranslation from "../utils/language";
import { useRef } from "react";

//import client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { setMovieResults } from "../utils/gptSLice";

const GptSearchBox = () => {
  const gptSearchInput = useRef(null);
  const dispatch = useDispatch();

  const searchMovies = async(searchTerm) =>{
   const movie = await fetch('https://api.themoviedb.org/3/search/movie?query='+searchTerm +'&include_adult=false&page=1', API_OPTIONS);
   const json = await movie.json();
   return json.results;
  }

  const handleGptSearchClick = async() => {
    // const query = "Act as a movie recommendation system. Recommend some movies for the query: " +gptSearchInput.current.value +". Give only name of 5 movies.Example result: Sholay, Lagaan, 3 Idiots, Zindagi Na Milegi Dobara, Rang De Basanti"; 
    // const response = await client.chat.completions.create({
    //     model: "gpt-4o",
    //     messages: [
    //         {
    //             "role": "user",
    //             "content": [
    //              {
    //                 "type": "text",
    //                 "text" : query
    //              }
    //             ]
    //         }
    //     ]
    // });
    
    const response = "shershaah, Lagaan, 3 Idiots, Zindagi Na Milegi Dobara, Wild Robots";
    const movie_suggestions = response.split(",");

    const promise_array = movie_suggestions.map(movie => searchMovies(movie.trim()));
    const movie_results =  await Promise.all(promise_array);
    dispatch(setMovieResults({movieResults: movie_results, movieNames: response}));
  }
  
  const lang = useSelector(store => store.config.lang);
  return (
    <div className="pt-20 flex justify-center m-2 md:m-0 p-0">       
        <form className=" bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input ref ={gptSearchInput} type="text" placeholder={languageTranslation[lang].gptSearchPlaceholder} className="p-4 m-4 col-span-12 md:col-span-9 bg-white"/>
            <button 
                className="bg-red-600 text-white  md:m-4 py-3 md:p-0 col-span-12 md:col-span-3 "
                onClick={handleGptSearchClick}
            >{languageTranslation[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBox;