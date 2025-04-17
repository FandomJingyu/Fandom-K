import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const infiniteCarousel = ({
	trigger,
	duration,
	reverse,
	pauseOnHover,
	direction = "vertical",
}) => {
	const triggers = document.querySelectorAll(trigger);
	const timelines = [];

	for (const trigger of triggers) {
		// 컨테이너 스타일 초기화
		trigger.style.overflow = "hidden";
		trigger.style.visibility = "visible";

		const items = trigger.querySelector(".carousel-items") || trigger;
		const itemElements = trigger.querySelectorAll(".item");
		const item = [...itemElements];

		// 방향에 따른 크기 계산
		const itemSizeArr = item.map((item) => {
			item.style.position = "absolute";
			return direction === "vertical" ? item.clientHeight : item.clientWidth;
		});

		let totalSize = 0;

		// 아이템 위치 계산 및 설정
		for (const [idx, size] of itemSizeArr.entries()) {
			if (idx === 0) {
				totalSize = itemSizeArr[itemSizeArr.length - 1];
			} else if (itemSizeArr[idx - 1]) {
				totalSize = totalSize + itemSizeArr[idx - 1];
			}

			// 방향에 따른 위치 설정
			if (direction === "vertical") {
				gsap.set(item[idx], {
					y: totalSize,
				});
			} else {
				gsap.set(item[idx], {
					x: totalSize,
				});
			}
		}

		// 컨테이너 스타일 설정
		items.style.position = "relative";
		if (direction === "vertical") {
			items.style.width = `${item[0].offsetWidth}px`;
			items.style.top = `-${Math.max(...itemSizeArr)}px`;
		} else {
			items.style.height = `${item[0].offsetHeight}px`;
			items.style.left = `-${Math.max(...itemSizeArr)}px`;
		}

		// 애니메이션 설정
		const tl = gsap.timeline();
		timelines.push(tl);

		const animationProps = {
			ease: "none",
			repeat: -1,
		};

		// 방향에 따른 애니메이션 속성 설정
		if (direction === "vertical") {
			animationProps.y = () => (reverse ? `-=${totalSize}` : `+=${totalSize}`);
			animationProps.modifiers = {
				y: gsap.utils.unitize((y) => {
					return reverse
						? y < 0
							? (Number.parseFloat(y) % totalSize) + totalSize
							: y
						: Number.parseFloat(y) % totalSize;
				}),
			};
		} else {
			animationProps.x = () => (reverse ? `-=${totalSize}` : `+=${totalSize}`);
			animationProps.modifiers = {
				x: gsap.utils.unitize((x) => {
					return reverse
						? x < 0
							? (Number.parseFloat(x) % totalSize) + totalSize
							: x
						: Number.parseFloat(x) % totalSize;
				}),
			};
		}

		// 애니메이션 실행
		tl.to(item, duration * item.length, animationProps);

		// 호버 이벤트 설정
		if (pauseOnHover) {
			const handleMouseOver = () => tl.pause();
			const handleMouseLeave = () => tl.play();

			trigger.addEventListener("mouseover", handleMouseOver);
			trigger.addEventListener("mouseleave", handleMouseLeave);
		}
	}

	// cleanup 함수 반환
	return () => {
		for (const tl of timelines) {
			tl.kill();
		}
	};
};
