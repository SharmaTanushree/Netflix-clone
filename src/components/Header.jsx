import { useDispatch, useSelector } from "react-redux";
import {signOut } from "firebase/auth";
import {auth} from "../utils/firebaseConfig";   
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVTAR , LOGO, LANG_OPTIONS} from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSLice";
import { changeLanguage } from "../utils/config.slice";

const Header = ()=>{

    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store=>store.gptSearch.showGptSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {             
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate('/browse');
              
            } else {
              dispatch(removeUser());
              navigate('/');
            }
          });
          return () => unsubscribe();
    },[])

    const signOutHandler = () =>{
        signOut(auth).then(() => {
            dispatch(removeUser());
          }).catch((error) => {
             console.log(error);
             navigate('/error')
          });
    }

    const handleGptSearchClick = () =>{
        dispatch(toggleGptSearch());
    }

    const handleChangeLangugaeSelection = (e) =>{
        dispatch(changeLanguage(e.target.value));
    }

//absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between
    return (
        
            <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
                <img 
                    className="w-44 m-auto md:m-0 sm:m-0"
                    src={LOGO}
                    alt="logo" />

                    
                
                    {
                        user && (
                            <div className="flex justify-between">
                                {
                                    showGptSearch && ( <select className="bg-white text-black p-3 m-4 ml-0" onChange={handleChangeLangugaeSelection}>
                                        {
                                            LANG_OPTIONS.map(lang => <option key={lang.value} value={lang.value}>{lang.label}</option>)
                                        }
                                    </select>
)
                                }
                                   
                               <div className="py-2">
                                <button 
                                        className="bg-purple-400 text-white rounded-lg p-2 md:p-4 m-2 md:m-4" 
                                        onClick={handleGptSearchClick}
                                    >
                                            {showGptSearch? "Home" : "GPT Search"}
                                    </button>
                               </div>
                               <div className="hidden md:block">
                               <img alt="user-avtar" src={USER_AVTAR} className="w-14 h-14 m-3 p-3"/>
                                </div>
                               
                                <div className="py-2">
                                <button
                                    onClick={signOutHandler}
                                    className="bg-red-500 text-white rounded-lg p-2 md:p-4 m-2 md:m-4"
                                >Sign Out</button>
                                </div>

                               
                            </div>
                          
                        )
                    }
                
            </div>
        
        
    )
}

export default Header;