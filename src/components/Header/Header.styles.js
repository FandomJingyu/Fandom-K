/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const headerStyles = css`
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(2, 0, 14, 0.6); // 반투명 배경
  backdrop-filter: blur(10px); // 블러 효과
  -webkit-backdrop-filter: blur(10px); // Safari 대응

  .mainGrid {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }
`;

export const logoStyles = css`
  width: 10.5rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const profileStyles = css`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  object-fit: cover;
`;
