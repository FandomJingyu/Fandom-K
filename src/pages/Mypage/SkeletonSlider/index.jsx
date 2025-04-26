import { css } from "@emotion/react";
import { useRef } from "react";
import { shimmerStyle } from "../../../styles/skeletonAnimation";
import useWindowSize from "../hooks/useWindowSize";
/** @jsxImportSource @emotion/react */

const SkeletonSlider = () => {
	const windowWidth = useWindowSize();
	const columnCount =
		windowWidth <= 585
			? 3
			: windowWidth <= 1024
				? 4
				: windowWidth <= 1280
					? 6
					: 8; // slick slider와 맞춰서 사이즈 나눔
	const itemsToRender = columnCount * 2; // 2줄만 보여주기 위해 작성

	const itemId = useRef(
		Array.from({ length: 16 }, (_, i) => `skeleton-item-${i}-${Date.now()}`), // 키값으로 고유값 생성
	);

	return (
		<>
			<div css={skeletonWrapper}>
				{Array.from({ length: itemsToRender }).map((_, index) => (
					<SkeletonSlide key={itemId[index]} />
				))}
			</div>
		</>
	);
};

const SkeletonSlide = () => {
	return (
		<div css={skeletonSlider}>
			<div css={sliderFace} />
			<div css={sliderName} />
			<div css={sliderGroup} />
		</div>
	);
};

const skeletonSlider = css`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

const sliderFace = css`
	width: 100%;
	aspect-ratio: 1/1;
	border-radius: 50%;
	${shimmerStyle}
`;

const sliderName = css`
	width: 30%;
	height: 20px;
	${shimmerStyle}
`;

const sliderGroup = css`
	width: 50%;
	height: 20px;
	${shimmerStyle}
`;

const skeletonWrapper = css`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
	overflow: hidden;
	grid-template-rows: repeat(2, auto);

	@media (max-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
	}

	@media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 585px) {
    grid-template-columns: repeat(3, 1fr);
	}
`;

export default SkeletonSlider;
