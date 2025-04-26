import "../Mypage/slider/slick-theme.css";
import "../Mypage/slider/slick.css";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { idolsAPI } from "../../apis/idolsAPI";
import Button from "../../components/Button/Button";
import LoadingError from "../../components/Error";
import { addButton, addIdol, myIdolList, myIdolWrapper } from "./Mypage.styles";
import SkeletonSlider from "./SkeletonSlider";
import IdolList from "./components/IdolList";
import { idolList } from "./components/IdolList/IdolList.styles";
import useWindowSize from "./hooks/useWindowSize";
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
	const windowWidth = useWindowSize();
	if (windowWidth < 1280) return null;
	return (
		<button // 빼기ㅜ -> 버튼 테그로 작성 하면 탭 인덱스, 온키 다운 안써도 들어있음
			className={className}
			style={{ ...style, ...prevArrowStyle }} //style 덮어 씌우기
			onClick={onClick}
			type="button"
		/>
	);
}

//슬라이더 오른쪽 화살표 버튼
function NextArrow(props) {
	const { className, style, onClick } = props;
	const windowWidth = useWindowSize();
	if (windowWidth < 1280) return null;
	return (
		<button
			className={className}
			style={{ ...style, ...nextArrowStyle }}
			onClick={onClick}
			type="button"
		/>
	);
}

//슬라이더 함수 세팅값
const settings = {
	initialSlide: 0,
	infinite: false,
	speed: 500,
	slidesToShow: 8,
	slidesToScroll: 2,
	rows: 2,
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 6,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 585,
			settings: {
				slidesToShow: 3,
			},
		},
	],
};

//슬라이드 2줄 사이 간격
const slideStyle = css`
	.slick-slide > div {
	padding-top: 16px;
	padding-bottom: 16px;
	}
`;

const Mypage = () => {
	const windowWidth = useWindowSize();
	const isMobile = windowWidth <= 425;

	// sliderkey로 화면을 불러올때 새로운 슬라이더 생성
	const [sliderKey, setSliderKey] = useState(0);

	// 로딩, 에러 처리 변수
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// api에서 온 아이돌을 담을 idols
	const [idols, setIdols] = useState([]);
	// 선택한 아이돌 담는 임시 statechl
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
			try {
				const result = await idolsAPI.getIdols(80); // 불러올 개수
				const idollist = result.list; // api에서 list만 가져오기
				if (idollist) {
					setIdols(idollist);
					setTimeout(() => {
						setLoading(false);
					}, 600);
				} else throw new Error("응답이 없음");
			} catch (e) {
				console.error(e);
				setTimeout(() => {
					setError(true);
					setLoading(false);
				}, 1000);
			}
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
			alert("아이돌이 선택되지 않았습니다."); // 그냥 추가하기 눌렀을 경우 보여줄 것
			return;
		}
		setMyIdol((prev) => {
			const updated = [...prev, ...checkedIdol];
			console.log("추가된 리스트", updated);
			localStorage.setItem("myIdols", JSON.stringify(updated)); // ==> set 함수 안에 로컬은 분리하는게 좋다(추후)
			return updated;
		});
		setCheckedIdol([]); // 선택된 아이돌 초기화
	};

	const handleRemoveIdol = (idol) => {
		setMyIdol((prev) => {
			const updated = prev.filter((id) => id !== idol.id);
			// console.log("없애기");
			localStorage.setItem("myIdols", JSON.stringify(updated));
			return updated;
		});
		setCheckedIdol((prev) => [...prev, idol]);
	};

	// breakpoint에서 새로고침 할 경우 슬라이더 원위치
	// key 값 변경을 통해 슬라이더 재랜더링하여서 원위치를 잡게 함
	useEffect(() => {
		setTimeout(() => {
			setSliderKey((prev) => prev + 1);
		}, 100);
	}, []);

	return (
		<div className={"mainGrid"}>
			<div css={myIdolWrapper}>
				<h2>내가 선택한 아이돌</h2>
				{selectedIdolList.length === 0 && (
					<h3>아직 아이돌이 선택되지 않았습니다</h3>
				)}
				<div css={myIdolList}>
					{selectedIdolList.map((idol) => (
						<IdolList
							key={idol.id}
							idol={idol}
							size={isMobile ? "70px" : "100px"}
							isMyIdol={true}
							onRemove={() => handleRemoveIdol(idol)}
						/>
					))}
				</div>
			</div>
			<div css={addIdol}>
				<h2>관심있는 아이돌을 추가해보세요!</h2>

				{loading ? (
					<SkeletonSlider />
				) : error ? (
					<LoadingError />
				) : (
					<Slider key={sliderKey} css={slideStyle} {...settings}>
						{remainIdols.map((idol) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>.
							<div key={idol.id} onClick={() => toggleCheckedIdol(idol.id)}>
								<IdolList
									idol={idol}
									size={isMobile ? "98px" : "128px"}
									isChecked={checkedIdol.includes(idol.id)}
								/>
							</div>
						))}
					</Slider>
				)}

				<div css={addButton}>
					{error ? (
						<></>
					) : (
						<Button size={"add"} onClick={handleAddIdol}>
							<img src="../public/images/plus_24px.svg" alt="플러스 이미지" />
							<span>추가하기</span>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Mypage;
