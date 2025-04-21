import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

//슬라이더 함수 세팅값
const settings = {
	infinite: true,
	speed: 500,
	// slidesPerRow: 8,
	slidesToShow: 8,
	rows: 2,
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
