/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import logo from "/icons/logo.svg";
import profile from "/jingyu/jingyu_profile.jpg";
import { headerStyles, logoStyles, profileStyles } from "./Header.styles";

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
