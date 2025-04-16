import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "../../../public/icons/logo.svg";
import profile from "../../../public/images/profile-default.png";

const headerStyles = css`
  display: inline-flex;
  height: 80px;
  padding: 24px 360px 24px 876px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 484px;
  flex-shrink: 0;
`;

const logoStyles = css`
  width: 167.918px;
  height: 32px;
`;

const profileStyles = css`
  width: 50px;
  height: 76px;
  flex-shrink: 0;
`;

const Header = () => {
	return (
		<header css={headerStyles}>
			<Link to="/list">
				<img css={logoStyles} src={logo} alt="Fandom-K 로고" />
			</Link>
			<Link to="/mypage">
				<img css={profileStyles} src={profile} alt="프로필 이미지" />
			</Link>
		</header>
	);
};

export default Header;
