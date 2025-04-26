// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { idolsAPI } from "../apis/idolsAPI";
// import { votesAPI } from "../apis/voteApi";
// import { useCredit } from "../context/CreditContext";

// export const useChartVoteModal = (gender, closeModal) => {
// 	const [idols, setIdols] = useState([]); // 아이돌 목록을 로컬 상태로 관리
// 	const [selectedIdolId, setSelectedIdolId] = useState(null);
// 	const [loading, setLoading] = useState(true); // 아이돌 목록 로딩 상태
// 	const [error, setError] = useState(false);
// 	const { credit, deductCredit } = useCredit();

// 	// 컴포넌트가 마운트될 때 아이돌 목록을 받아오는 useEffect
// 	useEffect(() => {
// 		const fetchIdols = async () => {
// 			try {
// 				const response = await idolsAPI.getIdols(100); // 아이돌 목록 API 호출
// 				const filteredIdols = response.list.filter(
// 					(idol) => idol.gender === gender,
// 				);
// 				setIdols(filteredIdols); // 받아온 아이돌 목록을 상태에 저장
// 				setLoading(false); // 로딩 상태 종료
// 			} catch (error) {
// 				console.error(error);
// 				setError(true); // 에러 상태 설정
// 				toast.error("아이돌 목록을 불러오는 데 실패했습니다.");
// 				setLoading(false);
// 			}
// 		};

// 		fetchIdols();
// 	}, [gender]);

// 	const handleVote = async (e) => {
// 		e.preventDefault();

// 		if (!selectedIdolId) {
// 			toast.error("투표할 아이돌을 선택해주세요.");
// 			return;
// 		}

// 		if (credit < 1000) {
// 			toast.error("크레딧이 부족합니다.");
// 			return;
// 		}

// 		setLoading(true); // 투표 진행 시 로딩 시작

// 		try {
// 			deductCredit(1000);

// 			const selectedIdol = idols.find((idol) => idol.id === selectedIdolId);
// 			if (!selectedIdol) {
// 				throw new Error("아이돌을 찾을 수 없습니다.");
// 			}

// 			const voteResponse = await votesAPI.addVote(selectedIdolId);

// 			setIdols((prevIdols) =>
// 				prevIdols.map((idol) =>
// 					idol.id === selectedIdolId
// 						? { ...idol, totalVotes: voteResponse.idol.totalVotes }
// 						: idol,
// 				),
// 			);

// 			toast.success(`${selectedIdol.name}에게 투표 완료!`);
// 			closeModal?.();
// 			setSelectedIdolId(null);
// 		} catch (error) {
// 			console.error(error);
// 			setError(true);
// 			toast.error("투표에 실패했습니다. 다시 시도해주세요.");
// 		} finally {
// 			setLoading(false); // 로딩 상태 종료
// 		}
// 	};

// 	const handleIdolSelect = (id) => {
// 		setSelectedIdolId(id);
// 	};

// 	return {
// 		idols,
// 		selectedIdolId,
// 		handleVote,
// 		handleIdolSelect,
// 		loading,
// 		error,
// 	};
// };

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { idolsAPI } from "../apis/idolsAPI";
import { votesAPI } from "../apis/voteApi";
import { useCredit } from "../context/CreditContext";

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
