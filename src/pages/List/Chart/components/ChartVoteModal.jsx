/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState } from "react";
import { votesAPI } from "../../../../apis/voteApi";
import { useCredit } from "../../../../context/CreditContext";
import VoteButton from "./voteButton";
import VoteIdolList from "./voteIdolLIst";

export default function ChartVoteModal({ idols, setIdols, closeModal }) {
	const { credit, deductCredit } = useCredit();
	const [selectedIdolId, setSelectedIdolId] = useState(null);

	const handleVote = async (e) => {
		e.preventDefault();

		if (credit < 1000) {
			alert("크레딧이 부족합니다.");
			return;
		}

		if (!selectedIdolId) {
			alert("투표할 아이돌을 선택해주세요.");
			return;
		}

		deductCredit(1000);

		try {
			const selectedIdol = idols.find((idol) => idol.id === selectedIdolId);
			if (!selectedIdol) {
				alert("아이돌을 찾을 수 없습니다.");
				return;
			}

			const voteResponse = await votesAPI.addVote(selectedIdolId);

			setIdols((prevIdols) =>
				prevIdols.map((idol) =>
					idol.id === selectedIdolId
						? { ...idol, totalVotes: voteResponse.idol.totalVotes }
						: idol,
				),
			);

			closeModal();
		} catch (error) {
			console.error("투표 API 에러:", error);
			alert("투표에 실패했습니다. 다시 시도해주세요.");
		}
	};

	const handleIdolSelect = (id) => {
		setSelectedIdolId(id);
	};

	return (
		<form onSubmit={handleVote} css={VoteFormStyles}>
			<VoteIdolList
				idols={idols}
				selectedIdolId={selectedIdolId}
				onSelectIdol={handleIdolSelect}
			/>
			<VoteButton onSubmit={handleVote} css={yourButtonStyle} />
		</form>
	);
}

const VoteFormStyles = css`
   
  max-height: 100vh;
  overflow-y: hidden;
  position: relative;    // 또는 fixed/absolute 등 상황에 맞게

	@media (max-width: 425px) {
		height: 100vh;
	}
`;

const yourButtonStyle = css`
  // @media (max-width: 425px) {
  //   position: fixed;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   padding: 16px 0;
  //   background-color: rgba(2, 0, 14, 0.8);  // 반투명 배경
  //   z-index: 1;
  // }

`;
