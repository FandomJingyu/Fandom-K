/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

/**
 * 슬라이더 위에 고정되어 나타나는 타이틀 스타일
 */
export const donationTitle = css`
  margin-top: 50px;

  color: #ffffff;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 426px) {
    font-size: 4.27vw;
    margin-top: 10.67vw;
  };
`;

export const donationPageNation = css`
position: relative;`;

/**
 * 오른쪽 화살표 버튼 스타일
 * 왼쪽 여백을 두어 Card와 분리
 * donationContent(슬라이더 내부)를 기준으로 오른쪽으로 배치
 */
export const pageNationRight = css`
  width: 40px;
  height: 78px;
  flex-shrink: 0;

  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);

  margin-left: 30px;

  &:hover {
  background-color: #1B1B1B;
  border-radius: 4px;
  };

  @media (max-width: 1365px) {
    display: none;
  };

`;

/**
 * 왼쪽 화살표 버튼 스타일
 * 오른쪽 여백을 두어 Card와 분리
 * donationContent(슬라이더 내부)를 기준으로 왼쪽으로 배치
 */
export const pageNationLeft = css`
  width: 40px;
  height: 78px;
  flex-shrink: 0;

  position: absolute;
  left: -80px;
  top: 50%;
  transform: translateY(-50%);

  margin-right: 30px;

  &:hover {
    background-color: #1B1B1B;
    border-radius: 4px;
  };

  @media (max-width: 1365px) {
    display: none;
  };
`;
