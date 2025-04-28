import { infiniteCarousel } from "@/utils/infiniteCarousel";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CarouselCards = ({ className, startIndex }) => {
	const images = Array.from({ length: 4 }, (_, i) => ({
		src: `/images/landing/landing_card${String(startIndex + i).padStart(2, "0")}.png`,
		alt: "랜딩 페이지 아이돌 이미지",
	}));

	return (
		<div className={`carousel ${className}`}>
			{images.map((image) => (
				// image src를 키값으로 사용
				<div key={image.src} className="item">
					<img src={image.src} alt={image.alt} />
				</div>
			))}
		</div>
	);
};

export default function LandingBottomSection() {
	const navigate = useNavigate();
	// LandingBottomSection 캐러셀 초기화 및 cleanup
	useEffect(() => {
		const carousel1 = infiniteCarousel({
			trigger: ".carousel01",
			duration: 8,
			reverse: false,
			pauseOnHover: false,
			direction: "vertical",
		});

		const carousel2 = infiniteCarousel({
			trigger: ".carousel02",
			duration: 8,
			reverse: true,
			pauseOnHover: false,
			direction: "vertical",
		});

		// cleanup 함수 반환
		return () => {
			carousel1();
			carousel2();
		};
	}, []);

	return (
		<StyledLandingBottomSection>
			<div className="landingGrid">
				<CarouselCards className="carousel01" startIndex={1} />
				<p>
					진심을 담은 응원,
					<br />
					이제는 더 쉬운 방법으로 시작해 보세요.
				</p>
				<img src="/images/landing/logo_big.png" alt="Fandom-K" />
				<button type="button" onClick={() => navigate("/list")}>
					크레딧 받고 시작하기
				</button>
				<CarouselCards className="carousel02" startIndex={5} />
			</div>
		</StyledLandingBottomSection>
	);
}

const StyledLandingBottomSection = styled.section`
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 80px;
    top: 0;
    left: 0;
    z-index: 3;
    background: linear-gradient(180deg, #03000e 0%, rgba(2, 0, 14, 0) 100%);
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 80px;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(0deg, #02000e 0%, rgba(2, 0, 14, 0) 100%);
  }
  .landingGrid {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    p {
      color: #fff;
      text-align: center;
      font-size: 26px;
      font-weight: 600;
      line-height: 1.5;
    }
    > img {
      display: block;
      margin-top: 20px;
      height: 150px;
    }
    button {
      cursor: pointer;
      margin-top: 100px;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background-color: transparent;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      transition: all 0.3s ease-in-out;
      position: relative;
      z-index: 2;
      line-height: 1;
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, #f86f65 0%, #fe5493 50%, #f86f65 100%, #fe5493 150%, #f86f65 200%);
        background-size: 200% 100%;
        animation: gradientMove 2s infinite;
        border-radius: 10px;
        z-index: -1;
        transition: all 0.3s ease-in-out;
        opacity: 0;
      }
      &:hover {
        border-color: transparent;
        &:after {
          opacity: 1;
        }
      }
    }
  }
  .carousel {
    width: 500px !important;
    height: 200vh;
    position: absolute !important;
    bottom: 0 !important;
    display: flex;
    flex-direction: column;
    z-index: -1;
    &.carousel01 {
      left: 0;
      align-items: flex-start;
    }
    &.carousel02 {
      right: 0;
      align-items: flex-end;
    }
    .item {
      padding-block: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 400px;
    }
  }
  @media all and (max-width: 1024px) {
    &::before {
      height: 60px;
    }
    &::after {
      height: 60px;
    }
    .landingGrid {
      .carousel {
        .item {
          padding-block: 20px;
          width: 200px;
          height: 250px;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      > img {
        height: auto;
        width: 80vw;
      }
      p {
        font-size: 20px;
      }
    }
    .carousel {
      width: 40vw !important;
    }
  }
  @media all and (max-width: 425px) {
    height: 520px !important;
    .landingGrid {
      > img {
        width: 65.07vw;
        margin-top: 5.33vw;
      }
      p {
        font-size: 4.27vw;
      }
      .carousel {
        top: -20vh !important;
        width: 34.67vw !important;
        height: 300vh !important;
        bottom: auto !important;
        &.carousel01 {
          left: -13.33vw;
        }
        &.carousel02 {
          right: -13.33vw;
        }
        .item {
          padding-block: 4.27vw;
          width: 100%;
          height: 42.67vw;
        }
      }
      button {
        margin-top: 16vw;
        width: 42.67vw;
        height: 12.8vw;
        border-radius: 2.67vw;
        font-size: 3.2vw;
        border: none;
        &::after {
          opacity: 1;
        }
      }
    }
  }
`;
