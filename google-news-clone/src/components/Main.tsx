import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";

const Main = () => {

	const [news, setNews] = useState([]);

	const getNews = async () => {
		try {
			await fetch(
				"https://newsapi.org/v2/everything?q=keyword&apiKey=3bd57db717c04255b8d3399fed6d48e1"
			)
				.then((res) => res.json())
				.then((json) => setNews(json.articles));
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
			<Home news={news} />
		</div>
	);
};

export default Main;
