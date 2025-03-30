import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const email = useRef(null);
    const userName = useRef(null);
    const password = useRef(null);
    const handleSubmit = ()=>{
        const message = ValidateForm(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message)return;
        if(!isSignInForm){
            createUserWithEmailAndPassword( auth, email.current.value, password.current.value)
            .then((userCredential) => {
              console.log(userCredential, auth.currentUser)
              const user = userCredential.user;
              updateProfile(user, {
                displayName: userName.current.value, photoURL: "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
              }).then(() => {
                 const {uid,email,displayName,photoURL} = auth.currentUser;
                 dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              }).catch((error) => {
                 setErrorMessage(error.code + " - " + error.message)
              });
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
              
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage)
            });
        }
    }
    return(
       <div>
         <Header />
         <div className="absolute">
            <img className="h-screen object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_auto_scroll/IN-en-20250303-TRIFECTA-5a51a3d1-4e37-441d-bc08-3597ab68c7b1_large.jpg" alt="background-image"/>
         </div>
         <form
            onSubmit={(e)=>e.preventDefault()}
            className=" absolute w-full md:w-3/12 mx-auto my-auto mt-20 md:mt-0 right-0 left-0 bg-black opacity-80 m-2 p-12">
            <h1 className="text-white font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
            <input
                ref={userName}
                type="text" 
                placeholder="User Name" 
                className=" p-4 my-4 w-full bg-gray-700 text-white"/>
            )}
            <input
                ref={email}
                type="text" 
                placeholder="Email" 
                className=" p-4 my-4 w-full bg-gray-700 text-white"
            />
            <input
                ref={password} 
                type="Password" 
                placeholder="Password" 
                className=" p-4 my-4 w-full bg-gray-700 text-white"/>

            <p className="text-red-700 py-2 font-bold text-lg">{errorMessage}</p>
            
            <button 
                className="bg-red-700 p-4 my-6 w-full rounded-lg text-white text-bold"
                onClick={handleSubmit}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p 
                className="m-4 p-4 text-white cursor-pointer"
                onClick={() => setIsSignInForm(!isSignInForm)}
            >
                {isSignInForm? "New to Netflix ? Sign Up now" : "Already registered ? Sign In now"}
            </p>

         </form>
       </div>
    )
}

export default Login;