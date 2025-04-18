import githubLogo from "../../../public/icons/github-mark-white.svg";
/** @jsxImportSource @emotion/react */
import {
	buttonStyles,
	footerFontStyles,
	footerStyles,
	githubLogoStyles,
} from "./Footer.styles";

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
