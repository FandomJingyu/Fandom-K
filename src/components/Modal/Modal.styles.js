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
			: `
    display: flex;
    justify-content: center;
    align-items: center;
  `
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

export const modalStyles = (isFullScreen) => css`
  position: relative;
  background-color: var(--black-181D26);
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

  padding: 24px 16px 32px 16px;
  gap: 8px;
  overflow-y: auto;
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
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    ${isFullScreen ? "position: absolute; left: 50%; transform: translateX(-50%);" : ""}
  }
`;

export const buttonStyles = (isFullScreen) => css`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  ${
		isFullScreen
			? `
    position: relative;
    margin-right: auto;
  `
			: `
    position: relative;
  `
	}
`;
