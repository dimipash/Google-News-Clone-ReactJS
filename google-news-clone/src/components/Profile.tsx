import { auth } from "../firebase/setup";
import account from "../assets/account.png";
import out from "../assets/logout.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type profileProp = {
	setProfile: any;
	toast: any;
};

const Profile = (props: profileProp) => {
	const navigate = useNavigate();

	const logout = async () => {
		try {
			await signOut(auth);
			toast.success("Logged out successfully");
			setTimeout(() => {
				navigate("/");
			}, 2000);
		} catch (err) {
			console.error(err);
			const error: any = err;
			toast.error(error.message);
		}
	};

	return (
		<>
			<div
				className="relative z-10"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div className="fixed inset-0"></div>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-end p-4 text-center sm:items-start mt-8 mr-5 sm:p-0">
						<div className="relative transform overflow-hidden rounded-3xl bg-slate-200 text-left shadow-xl transition-all sm:my-8 sm:w-5/12 sm:h-80 sm:max-w-md">
							<div className="bg-slate-200 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
								<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex flex-col justify-center items-center">
									<div className="flex items-center">
										<h3
											className="text-base font-semibold leading-6 text-gray-900"
											id="modal-title"
										>
											{auth?.currentUser?.email}
										</h3>
										<h1
											onClick={() =>
												props?.setProfile(false)
											}
											className="ml-5 cursor-pointer"
										>
											X
										</h1>
									</div>

									<img
										src={
											auth?.currentUser?.photoURL
												? auth?.currentUser?.photoURL
												: account
										}
										className="w-20 h-20 rounded-full mt-6"
										alt="User"
									/>
									<h1 className="text-2xl mt-2">
										Hi, {auth?.currentUser?.displayName}!
									</h1>
									<div
										onClick={logout}
										className="cursor-pointer flex items-center rounded-3xl bg-white p-3 w-60 mt-7"
									>
										<img
											src={out}
											className="w-5 h-5 ml-16"
											alt="Logout"
										/>
										<h1 className="ml-4">Signout</h1>
									</div>
									<h1 className="text-xs mt-6">
										Privacy Policy : Terms of Service
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
