/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const footerStyles = css`
  top: 0;
	left: 0;
  .mainGrid {
    display: flex;
    height: 160px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
`;

export const footerFontStyles = css`
  color: #ffffff; /* 색상 수정 */
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const githubLogoStyles = css`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  gap: 8px;
`;
