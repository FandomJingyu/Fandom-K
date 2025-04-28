import styled from "@emotion/styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function LandingMiddleSection() {
	// LandingMiddleSection 애니메이션
	useEffect(() => {
		const ctx =
			window.innerWidth < 768
				? gsap.context(() => {
						// 모바일 디바이스에서 각 article에 대한 애니메이션
						const articles = document.querySelectorAll(
							".landingMiddleSection article",
						);

						for (const article of articles) {
							const fadeInRight = article.querySelector(".fade-in-right");
							const fadeInUp = article.querySelectorAll(".fade-in-up");

							if (fadeInRight || fadeInUp) {
								gsap
									.timeline({
										scrollTrigger: {
											trigger: article,
											start: "top 50%",
											end: "bottom 50%",
										},
									})
									.fromTo(
										fadeInUp,
										{
											y: 30,
											opacity: 0,
										},
										{
											y: 0,
											opacity: 1,
											duration: 0.5,
										},
									)
									.fromTo(
										fadeInRight,
										{
											x: 100,
											opacity: 0,
										},
										{
											x: 0,
											opacity: 1,
											duration: 0.5,
										},
									);
							}
						}
					})
				: gsap.context(() => {
						const anim = gsap.timeline({
							scrollTrigger: {
								trigger: ".landingMiddleSection",
								start: "top top",
								end: "+=300%",
								pin: true,
								scrub: 1,
								id: "sec02Trigger",
							},
						});

						gsap.set(".landingMiddleSection article:nth-of-type(2)", {
							y: "100%",
						});
						gsap.set(".landingMiddleSection article:nth-of-type(3)", {
							y: "100%",
						});

						// 네비게이션 초기 설정
						const navButtons = document.querySelectorAll(
							".landingMiddleSectionNav button",
						);
						navButtons[0].classList.add("active");

						// 네비게이션 활성화
						const st = ScrollTrigger.create({
							trigger: ".landingMiddleSection",
							start: "top top",
							end: "+=300%",
							onUpdate: (self) => {
								const progress = self.progress;
								for (const btn of navButtons) {
									btn.classList.remove("active");
								}

								if (progress < 0.33) {
									navButtons[0].classList.add("active");
								} else if (progress < 0.66) {
									navButtons[1].classList.add("active");
								} else {
									navButtons[2].classList.add("active");
								}
							},
						});

						// 네비게이션 클릭 이벤트
						navButtons.forEach((btn, index) => {
							btn.addEventListener("click", () => {
								const targetProgress = index * 0.5;
								const targetScroll =
									st.start + (st.end - st.start) * targetProgress;

								gsap.to(window, {
									scrollTo: targetScroll,
									duration: 1,
									ease: "power2.inOut",
								});
							});
						});

						anim
							.to(".landingMiddleSection article:nth-of-type(2)", {
								y: 0,
								delay: 0.5,
								duration: 1,
								ease: "power1.inOut",
							})
							.to(".landingMiddleSection article:nth-of-type(3)", {
								y: 0,
								duration: 1,
								ease: "power1.inOut",
							})
							.to(".landingMiddleSection", {
								delay: 0.2,
							});
					});

		return () => ctx.revert();
	}, []);

	return (
		<StyledLandingMiddleSection className="landingMiddleSection">
			<nav className="landingMiddleSectionNav">
				<button type="button" />
				<button type="button" />
				<button type="button" />
			</nav>
			<article>
				<div className="landingGrid">
					<h3 className="fade-in-up">
						<strong>마음</strong>이 <br className="hide-768" />
						닿는 순간, <br />
						<strong>응원</strong>이 <br className="hide-768" />
						시작돼요
						<span className="is-floating">
							<img src="/images/landing/landing_icon01.png" alt="" />
						</span>
					</h3>
					<div className="landing-mockup fade-in-right">
						<img src="/images/landing/landing_mock01.png" alt="" />
					</div>
					<p className="fade-in-up">
						좋아하는 아티스트에게 직접 후원하고
						<br />
						팬심을 행동으로 보여주세요.
						<br />
						투명한 후원 내역과 간편한 참여로
						<br />
						진짜 응원을 이어갑니다.
					</p>
				</div>
			</article>
			<article>
				<div className="landingGrid">
					<h3 className="fade-in-up">
						이번 달 <br className="hide-768" />
						<strong>가장 빛난 별</strong>은 <br />
						누구?
						<span className="is-sparkling">
							<img src="/images/landing/landing_icon02.png" alt="" />
						</span>
					</h3>
					<div className="landing-mockup fade-in-right">
						<img src="/images/landing/landing_mock02.png" alt="" />
					</div>
					<p className="fade-in-up">
						팬들의 사랑을 가장 많이 받은
						<br />
						이달의 아티스트를 소개합니다!
						<br />
						당신의 크레딧 응원으로 아티스트를
						<br />
						가장 빛난 별로 만들어주세요.
					</p>
				</div>
			</article>
			<article>
				<div className="landingGrid">
					<h3 className="fade-in-up">
						내 마음 속
						<span className="is-pulsing hide-425">
							<img src="/images/landing/landing_icon03.png" alt="" />
						</span>
						<br className="hide-768" />
						<strong>나만의 아티스트</strong> <br />
						소식까지&nbsp;
						<br className="hide-768" />
						빠르게
						<span className="is-pulsing hide-default show-425">
							<img src="/images/landing/landing_icon03.png" alt="" />
						</span>
					</h3>
					<div className="landing-mockup fade-in-right">
						<img src="/images/landing/landing_mock03.png" alt="" />
					</div>
					<p className="fade-in-up">
						내가 좋아하는 아티스트 소식만 골라보고 <br />
						새로운 콘텐츠와 스케줄도 한눈에!
						<br />
						나만의 맞춤 피드로 더 똑똑하게,
						<br />더 깊이 있게 팬 활동을 즐기세요.
					</p>
				</div>
			</article>
		</StyledLandingMiddleSection>
	);
}
const StyledLandingMiddleSection = styled.section`
  position: relative;

  article {
    background-color: #02000e;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    &:nth-of-type(2) {
      background-color: #09061d;
    }
  }
  .landingGrid {
    padding-inline: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    h3 {
      color: #fff;
      font-size: 65px;
      line-height: 1.5;
      letter-spacing: -1.3px;
      span {
        display: inline-block;
        margin-left: 10px;
        width: 72px;
        height: 72px;
        position: relative;
        img {
          width: 100%;
        }
        &.is-floating {
          animation: icon-float 1.5s ease-in-out infinite;
        }
        &.is-sparkling {
          animation: icon-sparkle 1.5s ease-in-out infinite;
        }
        &.is-pulsing {
          animation: icon-pulse 1s ease-in-out infinite;
        }
      }
    }
    p {
      width: 420px;
      color: #aaa;
      font-size: 26px;
      font-weight: 400;
      line-height: 1.5;
    }
  }
  .landing-mockup {
    width: 390px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 70vh;
    }
  }
  .landingMiddleSectionNav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: calc(50% - 900px);
    transform: translateY(-50%);
    z-index: 10;
    gap: 8px;
    button {
      display: block;
      cursor: pointer;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid rgba(249, 109, 105, 0.502);
      transition: all 0.3s ease-in-out;
      background-color: transparent;
      padding: 0;
      &.active {
        background-color: #f96d69;
        border-color: #f96d69;
      }
    }
  }
  @keyframes icon-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes icon-sparkle {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 0.9;
    }
    45% {
      opacity: 0.5;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
  @keyframes icon-pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes gradientMove {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -200% 0%;
    }
  }
  @media all and (max-width: 1880px) {
    .landingMiddleSectionNav {
      display: none;
    }
    .landingGrid {
      padding-inline: 80px;
      p {
        font-size: 24px;
        width: 350px;
      }
      h3 {
        font-size: 50px;
      }
    }
  }
  @media all and (max-width: 1300px) {
    .landingGrid {
      padding-inline: 20px;
      p {
        width: 300px;
        font-size: 20px;
      }
      h3 {
        font-size: 42px;
        span {
          width: 50px;
          height: 50px;
        }
      }
    }
    .landing-mockup {
      width: 20vw;
    }
  }
  @media all and (max-width: 1024px) {
    .landingGrid {
      padding-inline: 0;
      justify-content: center;
      gap: 30vw;
      p {
        font-size: 18px;
      }
      h3 {
        width: 300px;
        font-size: 36px;
      }
    }
  }
  @media all and (max-width: 768px) {
    height: auto !important;
    .landingGrid {
      gap: 20px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 100px;
      h3 {
        font-size: 32px;
        width: auto;
        span {
          width: 42px;
          height: 42px;
        }
      }
      p {
        width: auto;
      }
    }
    .landing-mockup {
      width: 40vw;
      top: 70%;
      img {
        max-height: 400px;
      }
    }
    article {
      position: static;
      height: 850px;
    }
  }
  @media all and (max-width: 425px) {
    span.show-425 {
      display: inline-block !important;
    }
    .landingGrid {
      padding-top: 21.33vw;
      gap: 5.33vw;
      h3 {
        font-size: 8.53vw;
        line-height: 1.5;
        span {
          width: 8.53vw;
          height: 8.53vw;
        }
      }
      p {
        font-size: 4.27vw;
      }
    }
    .landing-mockup {
      width: 56vw;
      top: 88.53vw;
      transform: translate(-50%, 0);
    }
    @keyframes icon-float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-2.67vw);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;
