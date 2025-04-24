import { css } from "@emotion/react";

export const rootStyles = (isFullScreen) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  ${
		isFullScreen
			? `
      display: block;
      `
			: `display: flex; 
      justify-content: center; 
      align-items: center; `
	}
`;

export const backdropStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const modalStyles = (isFullScreen, type) => css`
  position: relative;
  background-color: ${isFullScreen ? "var(--black-02000E)" : "var(--black-181D26)"};
  gap: 8px;
  padding: ${
		type === "credit"
			? "24px 16px 32px 16px" // credit 타입일 경우
			: "24px 16px 12px 16px" // 그 외에는 기본 패딩
	};
  
  ${
		isFullScreen
			? `
    width: 100%;
    height: 100%;
    border-radius: 0;
    `
			: `
    min-width: 340px;
    min-height: 320px;
    border-radius: 12px;
    `
	}
`;

export const modalHeaderStyles = (isFullScreen) => css`
  display: flex;
  align-items: center;
  justify-content: ${isFullScreen ? "flex-start" : "space-between"};
  margin-bottom: 24px;
  position: relative;

  h2 {
    color: var(--white-F7F7F8);
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    ${isFullScreen && "position: absolute; left: 50%; transform: translateX(-50%);"}
  }
`;

export const buttonStyles = (isFullScreen) => css`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative; 

  img {
    width: 24px;
    height: 24px;
  }

  ${isFullScreen && "margin-right: auto;"}
`;
