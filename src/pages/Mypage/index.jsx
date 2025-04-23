import "../Mypage/slider/slick-theme.css";
import "../Mypage/slider/slick.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { idolsAPI } from "../../apis/idolsAPI";
import Button from "../../components/Button/Button";
import CheckIdol from "../../components/CheckIdol";
import {
	addButton,
	addIdol,
	myIdolList,
	myIdolWrapper,
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
	slidesToScroll: 2,
	rows: 2,
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
};

const Mypage = () => {
	// api에서 온 아이돌을 담을 idols
	const [idols, setIdols] = useState([]);
	// 선택한 아이돌 담는 임시 state
	const [checkedIdol, setCheckedIdol] = useState([]);
	// 내가 선택한 아이돌 (id만 저장)
	const [myIdol, setMyIdol] = useState([]);
	// 내가 선택한 아이돌과 같은 아이디를 같는 요소를 새롭게 만들어줌
	const selectedIdolList = idols.filter((idol) => myIdol.includes(idol.id));
	// idols 목록에서 선택된 아이돌을 제외한 남은 아이돌
	const remainIdols = idols.filter((idol) => !myIdol.includes(idol.id));

	// 처음에 한 번 idols 불러오기
	useEffect(() => {
		const fetchData = async () => {
			const result = await idolsAPI.getIdols(30); // 불러올 개수
			const idollist = result.list; // api에서 list만 가져오기
			setIdols(idollist);
		};
		fetchData();
	}, []);

	// 아이돌 선택하는 함수
	const toggleCheckedIdol = (idolId) => {
		setCheckedIdol((prev) => {
			const updated = prev.includes(idolId)
				? prev.filter((id) => id !== idolId)
				: [...checkedIdol, idolId];
			console.log(updated);
			return updated;
		});
	};

	// 로컬에 저장된 myIdol 불러오기
	useEffect(() => {
		const stored = localStorage.getItem("myIdols");
		if (stored) {
			setMyIdol(JSON.parse(stored));
		}
	}, []);

	// 추가하기 클릭시 추가된 아이돌 로컬에 저장하는 함수
	const handleAddIdol = () => {
		if (checkedIdol.length === 0) {
			console.log("선택되지 않았습니다."); // 그냥 추가하기 눌렀을 경우 보여줄 것
			return;
		}
		setMyIdol((prev) => {
			const updated = [...prev, ...checkedIdol];
			console.log("추가된 리스트", updated);
			localStorage.setItem("myIdols", JSON.stringify(updated));
			return updated;
		});
		setCheckedIdol([]); // 선택된 아이돌 초기화
	};

	const handleRemoveIdol = (idol) => {
		setMyIdol((prev) => {
			const updated = prev.filter((id) => id !== idol.id);
			console.log("없애기");
			localStorage.setItem("myIdols", JSON.stringify(updated));
			return updated;
		});
		setCheckedIdol((prev) => [...prev, idol]);
	};

	return (
		<div css={mypage}>
			<div css={myIdolWrapper}>
				<h2>내가 선택한 아이돌</h2>
				<div css={myIdolList} className="small">
					{selectedIdolList.map((idol) => (
						<IdolList
							key={idol.id}
							idol={idol}
							size="98px"
							sizeType="small"
							isMyIdol={true}
							onRemove={() => handleRemoveIdol(idol)}
						/>
					))}
				</div>
			</div>
			<div css={addIdol}>
				<h2>관심있는 아이돌을 추가해보세요!</h2>
				{/* 슬라이더 사용 */}
				<Slider {...settings}>
					{remainIdols.map((idol) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div key={idol.id} onClick={() => toggleCheckedIdol(idol.id)}>
							<IdolList
								idol={idol}
								size="128px"
								isChecked={checkedIdol.includes(idol.id)}
							/>
						</div>
					))}
				</Slider>
				<div css={addButton}>
					<Button size={"add"} onClick={handleAddIdol}>
						<img src="../public/images/plus_24px.svg" alt="플러스 이미지" />
						<span>추가하기</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Mypage;
