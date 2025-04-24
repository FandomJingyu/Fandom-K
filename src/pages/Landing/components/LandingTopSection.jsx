import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function LandingTopSection() {
	useEffect(() => {
		// 랜딩 직후 fade 애니메이션
		const fadeInCtx = gsap.context(() => {
			gsap.set(".landingTopSection", {
				autoAlpha: 0,
			});

			gsap.to(".landingTopSection", {
				autoAlpha: 1,
				duration: 1,
				delay: 0.3,
			});
		});
		// LandingTopSection 카드 애니메이션
		const cardAnimCtx = gsap.context(() => {
			const checkResponsive = (pc, pc1300) => {
				if (window.innerWidth <= 1300) {
					return pc1300;
				}
				return pc;
			};
			const anim = gsap.timeline({
				scrollTrigger: {
					trigger: ".landingTopSection",
					start: "top top",
					end: "+=200%",
					pin: true,
					scrub: 1,
				},
			});

			gsap.set(".landingTopSectionCards li", {
				autoAlpha: 0,
				y: 100,
			});

			anim
				.to(
					".landingTopSection h2",
					{
						gap: () => checkResponsive(400, 0),
						duration: 1,
					},
					0,
				)
				.to(
					".landingTopSectionDesc",
					{
						autoAlpha: 0,
						duration: 1,
					},
					0,
				)
				.to(".landingTopSectionCards .item01", {
					autoAlpha: 1,
					y: 0,
					duration: 1,
				})
				.to(".landingTopSectionCards .item02", {
					autoAlpha: 1,
					y: 0,
					duration: 1,
				})
				.to(".landingTopSectionCards .item03", {
					autoAlpha: 1,
					y: 0,
					duration: 1,
				})
				.to(".landingTopSection", {
					delay: 0.5,
				});
		});
		return () => {
			fadeInCtx.revert();
			cardAnimCtx.revert();
		};
	}, []);

	return (
		<StyledLandingTopSection className="landingTopSection">
			<div className="blur blur01">
				<img src="/images/landing/blur01.png" alt="blur" />
			</div>
			<div className="blur blur02">
				<img src="/images/landing/blur02.png" alt="blur" />
			</div>
			<div className="landingGrid">
				<h2>
					<p>좋아하는 만큼</p>
					<ul className="landingTopSectionCards">
						<li className="item01">
							<img src="/images/landing/landing_fade01.png" alt="" />
						</li>
						<li className="item02">
							<img src="/images/landing/landing_fade02.png" alt="" />
						</li>
						<li className="item03">
							<img src="/images/landing/landing_fade03.png" alt="" />
						</li>
					</ul>
					<p>
						<span>덕질</span>은 쉽게
					</p>
				</h2>
				<p className="landingTopSectionDesc">
					아티스트에게 내 마음을 전하고 싶을 때,
					<br />
					가장 먼저 떠오르는 방법이 되어드릴게요.
				</p>
			</div>
		</StyledLandingTopSection>
	);
}

const StyledLandingTopSection = styled.section`
  height: 100vh;
  .blur {
    position: absolute;
    width: 800px;
    height: 800px;
    z-index: 1;
    &.blur01 {
      top: 100px;
      left: -400px;
    }
    &.blur02 {
      bottom: 100px;
      right: -400px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .landingGrid {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    > p {
      margin-top: 100px;
      color: #888;
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      line-height: 1.5;
      height: 0;
      overflow: visible;
    }
  }
  h2 {
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 100px;
    font-weight: 700;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    gap: 24px;
    p {
      span {
        color: #f96d69;
      }
    }
  }
  .landingTopSectionCards {
    position: absolute;
    width: 380px;
    height: 460px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    margin-left: 46px;
    li {
      position: absolute;
      width: 300px;
      height: 380px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &.item02 {
        margin-top: 40px;
        margin-left: 40px;
      }
      &.item03 {
        margin-top: 80px;
        margin-left: 80px;
      }
    }
  }

  @media all and (max-width: 1300px) {
    h2 {
      font-size: 60px;
      line-height: 1.2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
    .landingTopSectionCards {
      margin-left: 0;
      width: 300px;
      top: 65vh;
      li.item02 {
        margin-left: 0;
      }
      li.item03 {
        margin-left: 0;
      }
    }
    .landingGrid {
      padding-top: 100px;
      justify-content: flex-start;
      > p {
        margin-top: 40px;
        font-size: 20px;
      }
    }
  }
  @media all and (max-width: 768px) {
    .blur {
      display: none;
    }
    h2 {
      font-size: 48px;
    }
  }
  @media all and (max-width: 425px) {
    h2 {
      font-size: 11.87vw;
      line-height: 1.4;
    }
    .landingGrid {
      padding-top: 30.33vw;
      > p {
        margin-top: 21.33vw;
        font-size: 4.27vw;
      }
    }
    .landingTopSectionCards {
      width: 69.33vw;
      height: 107.3vw;
      top: 74.27vw;
      transform: translate(-50%, 0);
      li {
        width: 69.33vw;
        height: 88vw;
      }
      li.item02 {
        margin-top: 9.6vw;
      }
      li.item03 {
        margin-top: 19.2vw;
      }
    }
  }
`;
