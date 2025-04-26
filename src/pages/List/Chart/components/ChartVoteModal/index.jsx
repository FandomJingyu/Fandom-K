/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LoadingError from "../../../../../components/Error";
import { useChartVoteModal } from "../../../../../hooks/useChartVoteModal";
import VoteIdolSkeleton from "./Skeleton";
import VoteButton from "./VoteButton";
import VoteIdolList from "./VoteIdolList";

export default function ChartVoteModal({ gender, closeModal }) {
	const {
		idols,
		selectedIdolId,
		handleVote,
		handleIdolSelect,
		loading,
		error,
	} = useChartVoteModal(gender, closeModal);

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
			<VoteButton />
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
