/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "../../../public/icons/logo.svg";
import profile from "../../../public/images/profile-default.png";

const headerStyles = css`
  display: flex;
  height: 80px;
  padding: 24px 360px 24px 876px;
  justify-content: flex-end;
  align-items: center;
  gap: 484px;
  flex-shrink: 0;
`;

const logoStyles = css`
  width: 10.5rem;
  height: 2rem;
`;

const profileStyles = css`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  object-fit: cover;
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
