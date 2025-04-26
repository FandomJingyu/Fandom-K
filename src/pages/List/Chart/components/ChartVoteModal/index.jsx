import LoadingError from "@/components/Error";
import useSafeSubmit from "@/hooks/useSafeSubmit";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useChartVoteModal } from "../hooks/useChartVoteModal";
import VoteIdolSkeleton from "./Skeleton";
import VoteButton from "./VoteButton";
import VoteIdolList from "./VoteIdolList";

export default function ChartVoteModal({
	gender,
	closeModal,
	idols,
	setIdols,
}) {
	const { selectedIdolId, handleVote, handleIdolSelect, loading, error } =
		useChartVoteModal(gender, closeModal, idols, setIdols);

	const { isSubmitting, safeSubmit } = useSafeSubmit(handleVote);

	return (
		<form onSubmit={safeSubmit} css={VoteFormStyles}>
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
			<VoteButton isSubmitting={isSubmitting} />
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
