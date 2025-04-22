/** @jsxImportSource @emotion/react */
import Button from "../../../../components/Button/Button";
import { CreditInfo, centerAlignStyle } from "./VoteButton.styles";

export default function VoteButton({ onSubmit }) {
	return (
		<div css={centerAlignStyle}>
			<Button type="submit" size="vote-lg" onClick={onSubmit}>
				투표하기
			</Button>
			<p css={CreditInfo}>
				투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
			</p>
		</div>
	);
}
