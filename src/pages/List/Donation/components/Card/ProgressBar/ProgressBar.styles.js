/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * 프로그레스 바의 전체 컨테이너 스타일
 *
 * - 너비는 100%로 설정되어 부모 요소를 꽉 채움
 * - 높이는 얇은 선처럼 보이도록 설정
 * - 배경색은 흰색으로 설정되어, 진행 바의 배경 역할
 */
export const progressContainer = css`
  width: 100%;
  height: 1px;
  flex-shrink: 0;

  background-color: #ffffff;
`;

/**
 * 프로그레스 바 내부 채워지는 영역 스타일
 *
 * @param {number} progress - 현재 진행률 (0 ~ 100)
 *
 * - 너비는 전달받은 `progress` 값에 따라 결정됨
 * - 부모 컨테이너 높이에 맞춤
 * - 배경색은 CSS 변수 `--orange-F96D69` 사용
 */
export const progressContent = (progress) => css`
  width:${progress}%;
  height: 100%;
  background-color: var(--orange-F96D69);
`;
