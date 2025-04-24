import styled from "@emotion/styled";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function LandingHeader() {
	const headerRef = useRef(null);
	const prevScrollPosRef = useRef(0);
	const navigate = useNavigate();
	const handleScroll = useCallback(() => {
		const currentScrollPos = window.scrollY;

		if (headerRef.current) {
			if (prevScrollPosRef.current > currentScrollPos) {
				headerRef.current.style.transform = "translateY(0)";
			} else {
				headerRef.current.style.transform = "translateY(-100%)";
			}
		}

		prevScrollPosRef.current = currentScrollPos;
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<StyledLandingHeader ref={headerRef}>
			<div className="landingGrid">
				<h1>
					<img src="/images/landing/logo.svg" alt="Fandom-K" />
				</h1>
				<button
					type="button"
					className="landingBtn"
					onClick={() => navigate("/list")}
				>
					지금 시작하기
				</button>
			</div>
		</StyledLandingHeader>
	);
}

const StyledLandingHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  .landingGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .landingBtn {
    height: 48px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #f86f65 0%, #fe5493 100%);
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
  @media all and (max-width: 768px) {
    h1 {
      width: 120px;
      img {
        width: 100%;
      }
    }
  }
  @media all and (max-width: 425px) {
    height: 16vw;
    h1 {
      width: 26.67vw;
    }
    .landingBtn {
      height: 9.6vw;
      width: 26.67vw;
			font-size: 3.2vw;
			border-radius: 2.67vw;
    }
  }
`;
