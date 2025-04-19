import Button from "../../components/Button/Button";
import IdolList from "./IdolList";
import {
	addButton,
	addIdol,
	addIdolList,
	addIdolListWrapper,
	myIdol,
	myIdolList,
	mypage,
} from "./Mypage.styles";

/** @jsxImportSource @emotion/react */

const Mypage = () => {
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

				<div css={addIdolListWrapper}>
					<button type="button" className="left">
						{"<"}
					</button>
					<div css={addIdolList} className="">
						<IdolList />
					</div>
					<button type="button" className="right">
						{">"}
					</button>
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
