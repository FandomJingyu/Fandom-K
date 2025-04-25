import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { idolsAPI } from "../apis/idolsAPI";
import { votesAPI } from "../apis/voteApi";
import { useCredit } from "../context/CreditContext";

const ITEMS_PER_PAGE = 10;
const TABLET_ITEMS_PER_PAGE = 5;
const MOBILE_ITEMS_PER_PAGE = 5;

const getIsMobile = () => window.matchMedia("(max-width: 425px)").matches;
const getIsTablet = () =>
	window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches;

export const useChartIdols = () => {
	const [idols, setIdols] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [activeTab, setActiveTab] = useState("female");
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
	const { credit, deductCredit } = useCredit();
	const [selectedIdolId, setSelectedIdolId] = useState(null);

	const fetchIdols = useCallback(async () => {
		try {
			setLoading(true);
			const res = await idolsAPI.getIdols(100);
			setIdols(res.list);
		} catch (e) {
			console.error("아이돌 불러오기 실패", e);
			setError(true);
		} finally {
			setLoading(false);
		}
	}, []); // setIdols 제거

	useEffect(() => {
		fetchIdols();
	}, [fetchIdols]);

	useEffect(() => {
		const handleResize = () => {
			if (getIsMobile()) setVisibleCount(MOBILE_ITEMS_PER_PAGE);
			else if (getIsTablet()) setVisibleCount(TABLET_ITEMS_PER_PAGE);
			else setVisibleCount(ITEMS_PER_PAGE);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const femaleIdols = useMemo(() => {
		return idols
			.filter((i) => i.gender === "female")
			.sort((a, b) => b.totalVotes - a.totalVotes);
	}, [idols]);

	const maleIdols = useMemo(() => {
		return idols
			.filter((i) => i.gender === "male")
			.sort((a, b) => b.totalVotes - a.totalVotes);
	}, [idols]);

	const visibleList = useMemo(() => {
		return (activeTab === "female" ? femaleIdols : maleIdols).slice(
			0,
			visibleCount,
		);
	}, [activeTab, femaleIdols, maleIdols, visibleCount]);

	const handleTabChange = useCallback((tab) => {
		setActiveTab(tab);
		if (getIsMobile()) setVisibleCount(MOBILE_ITEMS_PER_PAGE);
		else if (getIsTablet()) setVisibleCount(TABLET_ITEMS_PER_PAGE);
		else setVisibleCount(ITEMS_PER_PAGE);
	}, []);

	const handleMore = useCallback(() => {
		const currentList = activeTab === "female" ? femaleIdols : maleIdols;
		const itemsPerPage = getIsMobile()
			? MOBILE_ITEMS_PER_PAGE
			: getIsTablet()
				? TABLET_ITEMS_PER_PAGE
				: ITEMS_PER_PAGE;
		if (visibleCount < currentList.length) {
			setVisibleCount((prev) => prev + itemsPerPage);
		}
	}, [activeTab, femaleIdols, maleIdols, visibleCount]);

	const handleVote = useCallback(async () => {
		if (credit < 1000) {
			toast.error("크레딧이 부족합니다.");
			return;
		}

		if (!selectedIdolId) {
			toast("투표할 아이돌을 선택해주세요.");
			return;
		}

		deductCredit(1000);

		try {
			const selectedIdol = idols.find((idol) => idol.id === selectedIdolId);
			if (!selectedIdol) {
				toast.error("아이돌을 찾을 수 없습니다.");
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
			setSelectedIdolId(null); // 투표 후 선택된 아이돌 초기화 (선택 유지를 원하면 제거)
			toast.success(`${selectedIdol.name}에게 투표 완료!`);
		} catch (error) {
			console.error("투표 API 에러:", error);
			toast.error("투표에 실패했습니다. 다시 시도해주세요.");
		}
	}, [credit, deductCredit, idols, selectedIdolId]); // setIdols 제거

	const handleIdolSelect = useCallback((id) => {
		setSelectedIdolId(id);
	}, []);

	return {
		idols,
		loading,
		error,
		activeTab,
		visibleList,
		handleTabChange,
		handleMore,
		handleVote,
		selectedIdolId,
		handleIdolSelect,
		femaleIdols,
		maleIdols,
	};
};
