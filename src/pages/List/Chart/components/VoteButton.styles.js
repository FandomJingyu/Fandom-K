import { css } from "@emotion/react";

export const CreditInfo = css`
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;
  margin-top: 10px;

  span {
    color: var(--orange-F96D69);
  }
`;

export const centerAlignStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* 텍스트 중앙 정렬 */
  // width: 100%;
`;
