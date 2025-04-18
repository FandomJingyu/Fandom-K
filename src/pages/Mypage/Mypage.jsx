import Button from "../../components/Button/Button";
import Circle from "../../components/Circle";
import {
	addButton,
	addIdol,
	addIdolList,
	addIdolListWrapper,
	myIdol,
	mypage,
} from "./Mypage.styles";
/** @jsxImportSource @emotion/react */

const Mypage = () => {
	return (
		<div css={mypage}>
			<div css={myIdol}>
				<h2>내가 선택한 아이돌</h2>
				<div>선택된 아이돌 리스트</div>
			</div>
			<div css={addIdol}>
				<h2>관심있는 아이돌을 추가해보세요!</h2>

				<div css={addIdolListWrapper}>
					<button type="button">{"<"}</button>
					<div css={addIdolList}>아이돌 추가하기 리스트</div>
					<button type="button">{">"}</button>
				</div>
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
