import BLACKPINK from "/images/BLACKPINK.jpg";
import BoyNextDoor from "/images/BoyNextDoor.jpg";
import IVE from "/images/IVE.jpg";
import NMIX from "/images/NMIX.jpg";
import NewJeans from "/images/NewJeans.jpg";
import SHINEE from "/images/SHINEE.jpg";
import Seventeen from "/images/Seventeen.jpg";
import aespa from "/images/aespa.jpg";
import Logo from "/images/landing/logo.svg";

/** @jsxImportSource @emotion/react */
import {
	button,
	buttons,
	container,
	description,
	imgContainer,
	imgIdol,
	logo,
	overlay,
	text,
	title,
} from "./NotFound.styles";

import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();

	const imgSrc = [
		SHINEE,
		IVE,
		NMIX,
		NewJeans,
		Seventeen,
		aespa,
		BLACKPINK,
		BoyNextDoor,
	];

	const randomImg = imgSrc[Math.floor(Math.random() * imgSrc.length)];

	return (
		<main css={container}>
			<div css={imgContainer}>
				<img css={imgIdol} src={randomImg} alt="" />
				<div css={overlay} />
			</div>
			<div css={text}>
				<img css={logo} src={Logo} alt="팬덤케이 로고" />
				<h1 css={title}>페이지를 찾을 수 없습니다.</h1>
				<p css={description}>입력하신 주소가 맞는지 다시 확인해주세요.</p>
			</div>

			<div css={buttons}>
				<button css={button} onClick={() => navigate(-1)} type="button">
					이전 페이지로
				</button>
				<button css={button} onClick={() => navigate("/")} type="button">
					랜딩 페이지로
				</button>
			</div>
		</main>
	);
}

export default NotFound;
