export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVTAR = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_REACT_APP_TMDB_KEY,
    }
  };

export const IMAGE_URL = "https://image.tmdb.org/t/p/w200/";  

export const LANG_OPTIONS = [
  {value: "en", label: "English"},
  {value: "hindi", label: "Hindi"}, 
  {value: "spanish", label: "Spanish"}
]

export const GPT_API_KEY = import.meta.env.VITE_GPT_API_KEY;