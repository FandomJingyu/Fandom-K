/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "../../../public/icons/logo.svg";
import profile from "../../../public/images/profile-default.png";

const headerStyles = css`
  position: sticky;
	z-index: 99;
  top: 0;
	left: 0;
	width: 100%;
	.mainGrid {
		height: 80px;
	  display: flex;
	  align-items: center; 
    justify-content: flex-end;
	  position: relative; // 전역 속성으로 들어있음
	}
`;

const logoStyles = css`
  width: 10.5rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
			<div className="mainGrid">
				<Link to="/list">
					<img css={logoStyles} src={logo} alt="Fandom-K 로고" />
				</Link>
				<Link to="/mypage">
					<img css={profileStyles} src={profile} alt="프로필 이미지" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
