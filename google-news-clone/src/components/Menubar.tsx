type menuProp = {
	setMenu: any;
};

const Menubar = (props: menuProp) => {
	return (
		<div className="flex items-center shadow-sm p-2 w-screen bg-white">
			<h1
				onClick={() => props?.setMenu("Home")}
				className="ml-4 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Home
			</h1>
			<h1
				onClick={() => props?.setMenu("For You")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				For You
			</h1>
			<h1
				onClick={() => props?.setMenu("Following")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Following
			</h1>
			<h1
				onClick={() => props?.setMenu("News Showcase")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				News Showcase
			</h1>
			<h1 className="ml-7 text-gray-200"> | </h1>
			<h1
				onClick={() => props?.setMenu("Bulgaria")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Bulgaria
			</h1>
			<h1
				onClick={() => props?.setMenu("World")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				World
			</h1>
			<h1
				onClick={() => props?.setMenu("Business")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Business
			</h1>
			<h1
				onClick={() => props?.setMenu("Technology")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Technology
			</h1>
			<h1
				onClick={() => props?.setMenu("Entertainment")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Entertainment
			</h1>
			<h1
				onClick={() => props?.setMenu("Sports")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Sports
			</h1>
			<h1
				onClick={() => props?.setMenu("Science")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Science
			</h1>
			<h1
				onClick={() => props?.setMenu("Health")}
				className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer"
			>
				Health
			</h1>
		</div>
	);
};

export default Menubar;
