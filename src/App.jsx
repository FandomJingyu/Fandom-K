import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Toastify from "./components/Toastify";
import { CreditProvider } from "./context/CreditContext";
import DefaultLayout from "./layouts/DefaultLayout";
import DonationDetail from "./pages/DonationDetail/index.jsx";
import Landing from "./pages/Landing";
import List from "./pages/List";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound/index.jsx";

function App() {
	const lenisRef = useRef(null);

	// Lenis 스크롤 초기화
	useEffect(() => {
		lenisRef.current = new Lenis({
			smoothWheel: true,
			duration: 1.2,
		});

		lenisRef.current.on("scroll", ScrollTrigger.update);

		const animate = (time) => {
			lenisRef.current?.raf(time * 1000);
		};

		gsap.ticker.add(animate);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(animate);
			lenisRef.current?.destroy();
		};
	}, []);

	return (
		<CreditProvider>
			<Toastify />
			<Routes>
				<Route index element={<Landing />} />
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/list" element={<List />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/donation-detail/:id" element={<DonationDetail />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</CreditProvider>
	);
}

export default App;
