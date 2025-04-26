/** @jsxImportSource @emotion/react */
import Button from "@/components/Button/Button";
import useIsMobile from "@/hooks/useIsMobile";
import { CreditInfo, centerAlignStyle } from "./VoteButton.styles";

export default function VoteButton({ isSubmitting }) {
	const isMobile = useIsMobile();
	const buttonSize = isMobile ? "vote-md" : "vote-lg";

	return (
		<div css={centerAlignStyle}>
			<Button
				type="submit"
				size={buttonSize}
				fullWidth={true}
				disabled={isSubmitting}
			>
				{isSubmitting ? "제출 중..." : "투표하기"}
			</Button>
			<p css={CreditInfo}>
				투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
			</p>
		</div>
	);
}
