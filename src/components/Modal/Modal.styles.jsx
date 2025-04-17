/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const modalOverlayStyles = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const modalContentStyles = css`
  margin: 0px;
  padding: 1.5rem 1rem 2rem 1rem;
  background: #181d26;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: stretch; /* ✅ center → stretch */
`;
export const headerStyles = css`
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 19.93rem;
  margin-bottom: 1.19rem;
  h2 {
    color: var(--white-F7F7F8, #f7f7f8);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const buttonStyles = css`
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;
