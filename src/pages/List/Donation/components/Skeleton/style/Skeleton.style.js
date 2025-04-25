/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { shimmerStyle } from "../../../../../../styles/skeletonAnimation";

export const pageNation = css`
  position: relative;
  `;

export const content = css`
  display: flex;
  margin-top: 34px;
  gap: 24px;

  @media (max-width: 426px){
    gap: 1.88vw;
  };
`;

export const button = css`
  width: 40px;
  height: 78px;
  flex-shrink: 0;

  border-radius: 4px;

  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);

  ${shimmerStyle}

  @media (max-width: 1365px) {
    display: none;
  }
`;
