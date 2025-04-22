/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 슬라이드 트랙 스타일
export const sliderTrack = (
	startIndex,
	visibleCount,
	itemWidth = 282,
	gap = 24,
) => css`
	display: flex;
	transition: transform 0.8s ease-in-out;
	transform: translateX(-${(itemWidth + gap) * startIndex}px);
	gap: 24px;
  margin-top: 34px;
`;

// 뷰포트 스타일 (보이는 영역)
export const sliderViewport = css`
  overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	width: 100%;

	&::-webkit-scrollbar {
		display: none;
	}
`;
