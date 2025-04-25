/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LoadingError from "../../../../../components/Error";
import { useChartIdols } from "../../../../../hooks/useChartIdols"; // 새로운 훅 import
import VoteIdolSkeleton from "./Skeleton";
import VoteButton from "./VoteButton";
import VoteIdolList from "./VoteIdolList"; // 자식 컴포넌트

export default function ChartVoteModal({ closeModal }) {
	const {
		loading,
		error,
		visibleList: idols, // 현재 탭에 맞는 아이돌 목록 사용
		handleVote,
		selectedIdolId,
		handleIdolSelect,
	} = useChartIdols();

	return (
		<form onSubmit={handleVote} css={VoteFormStyles}>
			{loading ? (
				<div>
					<VoteIdolSkeleton />
				</div>
			) : error ? (
				<LoadingError />
			) : (
				<VoteIdolList
					idols={idols}
					selectedIdolId={selectedIdolId}
					onSelectIdol={handleIdolSelect}
				/>
			)}
			<VoteButton onSubmit={handleVote} />
		</form>
	);
}

const VoteFormStyles = css`
  max-height: 100vh;
  overflow-y: hidden;
  position: relative;
  @media (max-width: 425px) {
    height: 100vh;
  }
`;
