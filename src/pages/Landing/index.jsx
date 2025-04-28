import styled from "@emotion/styled";
import LandingBottomSection from "./components/LandingBottomSection";
import LandingFooter from "./components/LandingFooter";
import LandingHeader from "./components/LandingHeader";
import LandingMiddleSection from "./components/LandingMiddleSection";
import LandingTopSection from "./components/LandingTopSection";

const Landing = () => {
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
    height: 100lvh;
    position: relative;
  }
`;
