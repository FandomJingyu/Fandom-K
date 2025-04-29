/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * 에러 컴포넌트의 전체 레이아웃을 구성하는 wrapper 스타일
 * 수직 정렬과 가운데 정렬을 통해 중앙에 요소를 배치
 */
export const errorWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media(max-width: 476px) {
    gap: 6px;
  };
`;

/**
 * 느낌표 아이콘 border 원형 배경 스타일
 * 선형 그라데이션 배경과 원형 테두리를 적용하여 시각적으로 강조
 */
export const iconWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90px;
  height: 90px;
  margin-bottom: 16px; /* 'margin: button' 오타 수정 */
  background: linear-gradient(90deg, #F86F65 0%, #FE5493 100%);
  border-radius: 50%;
  z-index: 0;

  @media(max-width: 476px) {
  width: 60px;
  height: 60px;
  };
`;

/**
 * 아이콘의 내부 원형(검은색 배경) 스타일
 * iconWrapper 안에 정중앙에 위치하며, 내부 아이콘을 감싸는 역할
 */
export const black = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000000; 
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media(max-width: 476px) {
    width: 50px;
    height: 50px;
  }
`;

/**
 * 흰색 느낌표 아이콘 스타일입니다.
 */
export const icon = css`
  font-size: 50px;
  font-weight: 800;
  color: #ffffff;
  z-index: 2;

  @media(max-width: 476px) {
    font-size: 30px;
    font-weight: 800;
  }
`;

/**
 * 에러 제목 텍스트 스타일
 */
export const title = css`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;

  @media(max-width: 476px) {
    font-size: 16px;
    font-weight: 800;
  };
`;

/**
 * 에러 상세 설명 텍스트 스타일
 */
export const description = css`
  font-size: 15px;
  color: #ffffff;

  @media(max-width: 476px) {
    font-size: 13px;
  };
`;

/**
 * '다시 시도하기' 버튼 스타일
 */
export const button = css`
  width: 140px;
  height: 30px;

  background: linear-gradient(90deg, #F86F65 0%, #FE5493 100%); 
  border-radius: 20px;

  font-size: 12px;
  font-weight: 400;

  @media(max-width: 476px) {
    width: 100px;
    height: 25px;

    font-size: 10px;
  };
`;
