import { signInWithPopup } from "firebase/auth";
import google from "../assets/google.png";
import lens from "../assets/lens.png";
import { auth, googleProvider } from "../firebase/setup";

type searchProp = {
	setSearch: any;
};

const Navbar = (props: searchProp) => {
	const googleSignin = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="flex items-center w-screen bg-white">
			<div className="ml-5">
				<img src={google} className="w-30 h-20" alt="Google News" />
			</div>
			<div className="ml-32 bg-zinc-100 flex items-center p-3 w-6/12 rounded-lg">
				<img src={lens} className="w-5 h-5" alt="Search" />
				<input
					type="text"
					onChange={(e) => props?.setSearch(e.target.value)}
					placeholder="Search for news"
					className="bg-zinc-100 ml-4 w-6/12 outline-none"
				/>
			</div>
			<button
				onClick={googleSignin}
				className="ml-44 bg-blue-600 text-white p-2 w-28 rounded-md"
			>
				Sign in
			</button>
		</div>
	);
};

export default Navbar;
