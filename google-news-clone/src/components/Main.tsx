import { useEffect } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

const Main = () => {
	const getNews = async () => {
		try {
			await fetch(
				"https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=3bd57db717c04255b8d3399fed6d48e1"
			)
				.then((res) => res.json())
				.then((json) => console.log(json));
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getNews();
	}, []);

	return (
		<div>
			<Navbar />
			<Menubar />
		</div>
	);
};

export default Main;
