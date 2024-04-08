import { useEffect, useState } from "react";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Home from "./Home";
import News from "./News";
import moment from "moment";

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

	const date:any = new Date();

	return (
		<div>
			<Navbar />
			<Menubar />
			<div className="bg-gray-100 pt-5 w-screen">
				<h1 className="ml-28 text-3xl">Your briefing</h1>
				<h1 className="ml-28 text-gray-500 text-sm mt-3">{moment(date).format("DD-MM-YYYY")}</h1>
				<Home news={news} />
			</div>
			<News />
		</div>
	);
};

export default Main;
