/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { shimmerStyle } from "../../../../../../styles/skeletonAnimation";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 282px;
  height: 402px;

  animation-delay: 0s;

  gap: 5px;

  @media (max-width: 426px) {
    width: 158px;
    height: 303px;
  }
  ;`;

export const img = css`
  width: 100%;
  height: 293px;

  border-radius: 8px;

  ${shimmerStyle}
`;

export const description = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const text = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (max-width: 426px) {
    gap: 1.6vw;
  }
  `;

export const subTitle = css`
  width: 73px;
  height: 18px;

  ${shimmerStyle}
  border-radius: 5px;
`;

export const mainTitle = css`
  width: 154px;
  height: 21px;

  ${shimmerStyle}
  border-radius: 5px;
`;

export const footer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const footerUp = css`
  width: 100%;

  display: flex;
  justify-content: space-between;  

  margin-bottom: 4px;

  @media (max-width: 426px) {
    margin-bottom: 0.27vw;  
  }
`;

export const credit = css`
  width: 50px;
  height: 18px;

  ${shimmerStyle}
  border-radius: 5px;
`;

export const dDay = css`
  width: 41px;
  height: 18px;

  ${shimmerStyle}
  border-radius: 5px;
`;

export const progress = css`  
  width: 100%;
  height: 1px;

  ${shimmerStyle}
  border-radius: 5px;
`;
