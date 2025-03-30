import GptSearchBox from "./GptSearchBox";
import GptSearchResult from "./GptSearchResult";

const GptSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
            <img className="h-screen object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_auto_scroll/IN-en-20250303-TRIFECTA-5a51a3d1-4e37-441d-bc08-3597ab68c7b1_large.jpg" alt="background-image"/>
    </div>
    <div className="pt-[30%]  md:pt-6 sm:pt-6">
        <GptSearchBox />
        <GptSearchResult />
    </div>    
    </>
     
  )
}
export default GptSearchPage;