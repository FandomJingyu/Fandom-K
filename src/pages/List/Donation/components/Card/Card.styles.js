/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * 카드 전체 컨테이너
 * - 세로 방향 정렬
 * - 가운데 정렬
 * - 크기 고정
 */
export const donationCardContainer = css`
  display: flex;
  width: 282px;
  height: 402px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 426px) {
    width: 158px;
    height: 303px;
  };
`;

/**
 * 이미지 영역 컨테이너
 * - 버튼 및 오버레이를 절대 위치로 배치하기 위한 기준 요소
 */
export const donationImgContainer = css`
  position: relative;
  width: 282px;
  height: 293px;

  @media (max-width: 426px) {
    width: 158px;
    height: 206px;
  };
`;

/**
 * 프로필 이미지 + 오버레이를 감싸는 wrapper
 * - border-radius 및 overflow 처리
 */
export const imgWrapper = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

/**
 * 프로필 이미지
 * - 전체 채우기 + 라운드
 */
export const donationImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  z-index: 1;
`;

/**
 * 이미지 위에 겹쳐지는 SVG 오버레이
 */
export const overlaySvg = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 2;
`;

/**
 * 후원하기 버튼
 * - 이미지 하단에 절대 위치로 배치
 * - 배치 제외 나머지는 공통 컴포넌트로 대체 예정
 */
export const donationButton = css`
  position: absolute;
  bottom: 30px;
  left: 22px;

  z-index: 3;

  font-size: 13px;

  @media (max-width: 426px) {
    bottom: 4vw;
    left: 1.87vw;
  };
`;

/**
 * 카드 하단 텍스트 영역 전체
 * - 수직 정렬
 */
export const donationDescription = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

/**
 * 제목 영역 (서브제목 + 제목)
 */
export const donationTitleContainer = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (max-width: 426px) {
    gap: 1.6vw;
  };
`;

/**
 * 장소(서브제목) 스타일
 * - 작은 회색 텍스트
 * - 투명도 적용
 */
export const descriptionSubtitle = css`
  color: #FFF;

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.165px;

  opacity: 0.4;

  @media (max-width: 426px) {
    font-size: 2.82vw;
  };
`;

/**
 * 제목(조공 제목) 텍스트 스타일
 */
export const descriptionTitle = css`
  color: var(--white-F7F7F8, #F7F7F8);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 426px) {
    font-size: 3.05vw;
  };
`;

/**
 * 하단 정보 전체 영역
 * - 세로 정렬로 D-day, 진행률 등 순차적으로 배치
 */
export const donationFooter = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * 하단 정보 라인 (크레딧 + D-day)
 * - 좌우로 나란히 배치
 */
export const donationFooterUp = css`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 4px;

  @media (max-width: 426px) {
    margin-bottom: 0.27vw;
  };
`;

/**
 * 크레딧 영역 (아이콘 + 금액)
 * - 아이콘 옆에 텍스트 배치
 */
export const donationFooterLeft = css`
  display: flex;
  align-items: center;
`;

/**
 * 크레딧 아이콘 이미지
 */
export const creditImg = css`
  width: 12px;
  height: 12px;
`;

/**
 * 목표 금액 텍스트 스타일
 */
export const targetDonation = css`
  color: var(--orange-F96D69);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.165px;

  @media (max-width: 426px) {
    font-size: 2.67vw;
  };
`;

/**
 * D-Day 남은 일 수 텍스트
 * - 오른쪽 정렬 스타일
 */
export const donationDday = css`
  color: var(--white-F7F7F8);
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.165px;

  @media (max-width: 426px) {
    font-size: 2.67vw;
  };
`;
