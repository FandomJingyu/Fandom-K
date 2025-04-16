import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
