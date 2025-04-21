/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * 슬라이더 위에 고정되어 나타나는 타이틀 스타일
 */
export const donationTitle = css`
margin-top: 50px;

color: #ffffff;
font-size: 24px;
font-weight: 700;`;

/**
 * 카드 리스트 영역
 * 수평으로 카드들을 나열하고 간격 부여
 * 슬라이더 라이브러리 적용시 flex해제 예정
 * 버튼 위치 조정을 위해 relative 속성 추가
 */
export const donationContent = css`
display: flex;
gap: 24px;

position: relative;

margin-top: 34px; /* 타이틀 아래 여백 */
`;

/**
 * 오른쪽 화살표 버튼 스타일
 * 왼쪽 여백을 두어 Card와 분리
 * donationContent(슬라이더 내부)를 기준으로 오른쪽으로 배치
 */
export const pageNationRight = css`
  width: 40px;
  height: 78.333px;
  flex-shrink: 0;

  position: absolute;
  right: -80px;
  top: 230px;

  margin-left: 30px;

  &:hover {
  background-color: #1B1B1B;
  border-radius: 4px;
  }

`;

/**
 * 왼쪽 화살표 버튼 스타일
 * 오른쪽 여백을 두어 Card와 분리
 * donationContent(슬라이더 내부)를 기준으로 왼쪽으로 배치
 */
export const pageNationLeft = css`
  width: 40px;
  height: 78.333px;
  flex-shrink: 0;

  position: absolute;
  left: -80px;
  top: 240px;

  margin-right: 30px;

  &:hover {
  background-color: #1B1B1B;
  border-radius: 4px;
  }
`;
