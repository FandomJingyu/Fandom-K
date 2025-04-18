/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import githubLogo from "../../../public/icons/github-mark-white.svg";

const footerStyles = css`
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

const footerFontStyles = css`
  color: #ffffff; /* 색상 수정 */
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const githubLogoStyles = css`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  gap: 8px;
`;

const Footer = () => {
	const handleGithubClick = () => {
		window.open("https://github.com/FandomJingyu/Fandom-K", "_blank");
	};

	return (
		<footer css={footerStyles}>
			<div className="mainGrid">
				<span css={footerFontStyles}>©codeit - 2025</span>
				<span css={footerFontStyles}>15기 3조 FandomJingyu</span>
				<button
					css={buttonStyles}
					type="button"
					onClick={handleGithubClick}
					aria-label="GitHub repository link"
				>
					<img
						css={githubLogoStyles}
						src={githubLogo}
						alt="GitHub 레포지토리로 이동"
					/>
					<span css={footerFontStyles}>GitHub</span>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
