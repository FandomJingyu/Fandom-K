import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";
import List from "./pages/List";
import Mypage from "./pages/Mypage/Mypage";
import Testpage from "./pages/TestPage/TestPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route index element={<Landing />} />
					<Route path="/list" element={<List />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/testpage" element={<Testpage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
