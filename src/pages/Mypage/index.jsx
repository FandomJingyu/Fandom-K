import "../Mypage/slider/slick-theme.css";
import "../Mypage/slider/slick.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { idolsAPI } from "../../apis/idolsAPI";
import Button from "../../components/Button/Button";
import {
	addButton,
	addIdol,
	myIdol,
	myIdolList,
	mypage,
} from "./Mypage.styles";
import IdolList from "./components/IdolList";
/** @jsxImportSource @emotion/react */

// ---------- slider 함수 관련 -------------
// 오른쪽 화살표 스타일
const nextArrowStyle = {
	display: "flex",
	background: "rgba(27, 27, 27, 0.8)",
	width: "29px",
	height: "135px",
	borderRadius: "4px",
	justifyContent: "center",
	alignItems: "center",
	right: "-57px",
	zIndex: 1,
};

//왼쪽 화살표 스타일
const prevArrowStyle = {
	display: "flex",
	background: "rgba(27, 27, 27, 0.8)",
	width: "29px",
	height: "135px",
	borderRadius: "4px",
	justifyContent: "center",
	alignItems: "center",
	left: "-57px",
	zIndex: 1,
};

//슬라이더 왼쪽 화살표 버튼
function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, ...prevArrowStyle }} //style 덮어 씌우기
			onClick={onClick}
			tabIndex={0} // 포커스 가능하게 만듦
			role="button" // 스크린리더 인식
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " " || e.key === "ArrowLeft") {
					onClick(e);
				}
			}}
		/>
	);
}

//슬라이더 오른쪽 화살표 버튼
function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, ...nextArrowStyle }}
			onClick={onClick}
			tabIndex={0}
			role="button"
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
					onClick(e);
				}
			}}
		/>
	);
}

//슬라이더 함수 세팅값
const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 8,
	rows: 2,
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
};

const Mypage = () => {
	// api에서 온 아이돌을 담을 idols
	const [idols, setIdols] = useState([]);

	// 처음에 한 번 idols 불러오기
	useEffect(() => {
		const fetchData = async () => {
			const result = await idolsAPI.getIdols(19); // 불러올 개수
			const idollist = result.list; // api에서 list만 가져오기
			setIdols(idollist);
		};
		fetchData();
	}, []);

	return (
		<div css={mypage}>
			<div css={myIdol}>
				<h2>내가 선택한 아이돌</h2>
				<div css={myIdolList} className="small">
					<IdolList />
				</div>
			</div>
			<div css={addIdol}>
				<h2>관심있는 아이돌을 추가해보세요!</h2>
				{/* 슬라이더 사용 */}
				<Slider {...settings}>
					{idols.map((idol) => (
						<div key={idol.id}>
							<IdolList idol={idol} />
						</div>
					))}
				</Slider>
				<div css={addButton}>
					<Button size={"add"}>
						<img src="../public/images/plus_24px.svg" alt="플러스 이미지" />
						<span>추가하기</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Mypage;
