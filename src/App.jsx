import { Route, Routes } from "react-router-dom";
import Toastify from "./components/Toastify";
import { CreditProvider } from "./context/CreditContext";
import DefaultLayout from "./layouts/DefaultLayout";
import DonationDetail from "./pages/DonationDetail/index.jsx";
import Landing from "./pages/Landing";
import List from "./pages/List";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound/index.jsx";
import Testpage from "./pages/Testpage/index.jsx";

function App() {
	return (
		<CreditProvider>
			<Toastify />
			<Routes>
				<Route index element={<Landing />} />
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/list" element={<List />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/testpage" element={<Testpage />} />
					<Route path="/donation-detail/:id" element={<DonationDetail />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</CreditProvider>
	);
}

export default App;
