/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

// 쉐이더 애니메이션
export const shimmer = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`;

// 기본 색상
export const baseColor = "#181D26";
export const highlightColor = "rgba(255, 255, 255, 0.12)";

// 공통 스타일
export const shimmerStyle = css`
  background: ${baseColor};
  background-image: linear-gradient(
    90deg,
    ${baseColor} 0%,
    ${highlightColor} 40%,
    ${highlightColor} 60%,
    ${baseColor} 100%
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;

  animation-name: ${shimmer};
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;
