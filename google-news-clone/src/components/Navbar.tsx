import { signInWithPopup } from "firebase/auth";
import google from "../assets/google.png";
import lens from "../assets/lens.png";
import {auth, googleProvider} from "../firebase/setup";

const Navbar = () => {

    const googleSignin = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch(err) {
            console.error(err)
        }            
    }

	return (
        <div className="flex items-center">
		<div className="ml-5">
			<img src={google} className="w-30 h-20" alt="Google News" />
		</div>
        <div className="ml-32 bg-zinc-100 flex items-center p-3 w-6/12 rounded-lg">
            <img src={lens} className="w-5 h-5" alt="Search" />
            <input type="text" placeholder="Search for news" className="bg-zinc-100 ml-4" />
        </div>
        <button onClick={googleSignin} className="ml-44 bg-blue-600 text-white p-2 w-28 rounded-md">Sign in</button>
        </div>        
	);
};

export default Navbar;
