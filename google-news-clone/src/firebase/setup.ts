import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBsAjW5tuOFoKLY_uxpF3kd6IbAd5_ctCM",
	authDomain: "news-clone-1dd62.firebaseapp.com",
	projectId: "news-clone-1dd62",
	storageBucket: "news-clone-1dd62.appspot.com",
	messagingSenderId: "322100520454",
	appId: "1:322100520454:web:b8dbf33d0f3f6582e68587",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
