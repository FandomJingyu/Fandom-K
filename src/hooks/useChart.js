import { idolsAPI } from "@/apis/idolsAPI";
import { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 10;
const TABLET_ITEMS_PER_PAGE = 5;
const MOBILE_ITEMS_PER_PAGE = 5;

const getIsMobile = () => window.matchMedia("(max-width: 425px)").matches;
const getIsTablet = () =>
	window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches;

export const useChart = () => {
	const [idols, setIdols] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE); // ✅ useState 유지

	useEffect(() => {
		const fetchIdols = async () => {
			try {
				setLoading(true);
				const res = await idolsAPI.getIdols(100);
				setIdols(res.list);
			} catch (err) {
				console.error("아이돌 불러오기 실패", err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchIdols();
	}, []);

	// ✅ 오직 최초 1회만 visibleCount 초기화
	useEffect(() => {
		if (getIsMobile()) setVisibleCount(MOBILE_ITEMS_PER_PAGE);
		else if (getIsTablet()) setVisibleCount(TABLET_ITEMS_PER_PAGE);
		else setVisibleCount(ITEMS_PER_PAGE);
	}, []);

	// ✅ 더보기 버튼 로직
	const handleMore = () => {
		if (getIsMobile() || getIsTablet()) {
			setVisibleCount((prev) => prev + 5);
		} else {
			setVisibleCount((prev) => prev + 10);
		}
	};

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

	return {
		loading,
		error,
		idols,
		femaleIdols,
		maleIdols,
		setIdols,
		visibleCount,
		setVisibleCount,
		handleMore, // ✅ Chart.jsx에서 사용
	};
};
