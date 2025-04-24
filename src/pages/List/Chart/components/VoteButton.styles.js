import { css } from "@emotion/react";

export const centerAlignStyle = css`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* 텍스트 중앙 정렬 */

  
   @media (max-width: 425px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 3.76vw 5.65vw 3.29vw 5.65vw;
    background: rgba(2, 0, 14, 0.8);
    z-index: 10;
  }
`;

export const CreditInfo = css`
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;
  margin-top: 8px;

  span {
    color: var(--orange-F96D69);
  }
`;
