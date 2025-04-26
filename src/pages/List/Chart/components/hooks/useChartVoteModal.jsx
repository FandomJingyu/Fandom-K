import { idolsAPI } from "@/apis/idolsAPI";
import { votesAPI } from "@/apis/voteApi";
import { useCredit } from "@/context/CreditContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useChartVoteModal = (
	gender,
	closeModal,
	idolsProp,
	setIdolsProp,
) => {
	const [selectedIdolId, setSelectedIdolId] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { credit, deductCredit } = useCredit();

	useEffect(() => {
		const fetchIdols = async () => {
			try {
				const response = await idolsAPI.getIdols(100);
				const filtered = response.list.filter((idol) => idol.gender === gender);
				setIdolsProp?.(filtered); // 외부 상태를 갱신
				setLoading(false);
			} catch (e) {
				setError(true);
				toast.error("아이돌 목록을 불러오는 데 실패했습니다.");
				setLoading(false);
			}
		};

		fetchIdols();
	}, [gender, setIdolsProp]);

	const handleVote = async (e) => {
		e.preventDefault();

		if (!selectedIdolId) {
			toast.error("투표할 아이돌을 선택해주세요.");
			return;
		}

		if (credit < 1000) {
			toast.error("크레딧이 부족합니다.");
			return;
		}

		setLoading(true);

		try {
			deductCredit(1000);
			const selected = idolsProp.find((idol) => idol.id === selectedIdolId);
			if (!selected) throw new Error("아이돌을 찾을 수 없습니다.");

			const voteResponse = await votesAPI.addVote(selectedIdolId);

			setIdolsProp((prev) =>
				prev.map((idol) =>
					idol.id === selectedIdolId
						? { ...idol, totalVotes: voteResponse.idol.totalVotes }
						: idol,
				),
			);

			toast.success(`${selected.name}에게 투표 완료!`);
			closeModal?.();
			setSelectedIdolId(null);
		} catch (e) {
			setError(true);
			toast.error("투표에 실패했습니다.");
		} finally {
			setLoading(false);
		}
	};

	const handleIdolSelect = (id) => {
		setSelectedIdolId(id);
	};

	return {
		selectedIdolId,
		handleVote,
		handleIdolSelect,
		loading,
		error,
	};
};
