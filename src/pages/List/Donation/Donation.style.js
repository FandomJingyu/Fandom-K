/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * 전체 섹션을 감싸는 래퍼
 * 타이틀을 절대 위치로 배치할 수 있도록 relative 설정
 */
export const donationWrapper = css`
position: relative`;

/**
 * 슬라이더 위에 고정되어 나타나는 타이틀 스타일
 */
export const donationTitle = css`
left: 70px;

color: #ffffff;
font-family: Pretendard;
font-size: 24px;
font-weight: 700;`;

/**
 * 카드 리스트 영역
 * 수평으로 카드들을 나열하고 간격 부여
 * 슬라이더 라이브러리 적용시 flex해제 예정
 */
export const donationContent = css`
display: flex;
gap: 24px;

margin-top: 34px; /* 타이틀 아래 여백 */
`;

/**
 * 오른쪽 화살표 버튼 스타일
 * 왼쪽 여백을 두어 Card와 분리
 */
export const pageNationRight = css`
  width: 40px;
  height: 78.333px;
  flex-shrink: 0;

  margin-left: 30px;
`;

/**
 * 왼쪽 화살표 버튼 스타일
 * 오른쪽 여백을 두어 Card와 분리
 */
export const pageNationLeft = css`
  width: 40px;
  height: 78.333px;
  flex-shrink: 0;

  margin-right: 30px;
`;
