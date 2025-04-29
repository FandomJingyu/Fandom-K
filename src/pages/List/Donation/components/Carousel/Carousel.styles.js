/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * 슬라이드 트랙
 * - 아이템 가로 배치
 * - startIndex에 따라 X축 이동
 */
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
  
  @media (max-width: 426px) {
    margin-top: 3.76vw;
    gap: 1.88vw;
  };
`;

/**
 * 뷰포트 영역
 * - 가로 스크롤 영역
 * - 스크롤 숨김 처리
 */
export const sliderViewport = css`
  overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	width: 100%;

	&::-webkit-scrollbar {
		display: none;
	};
`;
