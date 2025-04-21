import styled from "@emotion/styled";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import LandingBottomSection from "./components/LandingBottomSection";
import LandingFooter from "./components/LandingFooter";
import LandingHeader from "./components/LandingHeader";
import LandingMiddleSection from "./components/LandingMiddleSection";
import LandingTopSection from "./components/LandingTopSection";

const Landing = () => {
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
		<LandingContainer id="container">
			<LandingHeader />
			<LandingTopSection />
			<LandingMiddleSection />
			<LandingBottomSection />
			<LandingFooter />
		</LandingContainer>
	);
};

export default Landing;

const LandingContainer = styled.div`
  overflow: hidden;
  section {
    height: 100vh;
    position: relative;
  }
`;
