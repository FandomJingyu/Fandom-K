// src/components/Modal/Modal.styles.js
import { css } from "@emotion/react";

export const rootStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const backdropStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const modalStyles = css`
  position: relative;
  min-width: 340px;
  min-height: 320px;
  padding: 24px 16px 32px 16px;
  gap: 8px;
  background-color: var(--black-181D26);
  border-radius: 12px;
  
`;

export const modalHeaderStyles = css`
  display : flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  h2 {
    color: var(--white-F7F7F8);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const buttonStyles = css`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;
