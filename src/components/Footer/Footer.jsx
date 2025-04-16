import { css } from "@emotion/react";
import githubLogo from "../../../public/icons/github-mark-white.svg";

const footerStyles = css`
  display: flex;
  height: 160px;
  padding: 32px 400px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const footerFontStyles = css`
  color: var(--Secondary-400, #9ca3af);
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
  padding: 8px 16px; /* 버튼 크기 조정 */
  background-color: transparent;
  border: none;
  cursor: pointer;
  gap: 8px; /* 이미지와 텍스트 간 간격 */
`;

const Footer = () => {
	const handleGithubClick = () => {
		window.open("https://github.com/FandomJingyu/Fandom-K", "_blank");
	};

	return (
		<footer css={footerStyles}>
			<span css={footerFontStyles}>©codeit - 2025</span>
			<span css={footerFontStyles}>15기 3조 FandomJingyu</span>
			<button
				css={buttonStyles}
				type="button"
				onClick={handleGithubClick}
				aria-label="GitHub repository link" // 접근성 추가
			>
				<img
					css={githubLogoStyles}
					src={githubLogo}
					alt="GitHub 레포지토리로 이동" // alt 속성 개선
				/>
				<span css={footerFontStyles}>GitHub</span>
			</button>
		</footer>
	);
};

export default Footer;
