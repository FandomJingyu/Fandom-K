import { idolsAPI } from "@/apis/idolsAPI";
import { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 10;
const TABLET_ITEMS_PER_PAGE = 5;
const MOBILE_ITEMS_PER_PAGE = 5;

const getIsMobile = () => window.matchMedia("(max-width: 425px)").matches;
const getIsTablet = () =>
	window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches;

const useChart = () => {
	const [idols, setIdols] = useState([]);
	const [activeTab, setActiveTab] = useState("female");
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchIdols = async () => {
			try {
				setLoading(true);
				const res = await idolsAPI.getIdols(100);
				setIdols(res.list);
			} catch (e) {
				console.error("아이돌 불러오기 실패", e);
			} finally {
				setLoading(false);
			}
		};
		fetchIdols();
	}, []);

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

	const isFemale = activeTab === "female";
	const visibleList = (isFemale ? femaleIdols : maleIdols).slice(
		0,
		visibleCount,
	);

	const handleMore = () => {
		if (getIsMobile()) setVisibleCount((prev) => prev + MOBILE_ITEMS_PER_PAGE);
		else if (getIsTablet())
			setVisibleCount((prev) => prev + TABLET_ITEMS_PER_PAGE);
		else setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
	};

	const handleTabChange = (tab) => {
		setActiveTab(tab);
		if (getIsMobile()) setVisibleCount(MOBILE_ITEMS_PER_PAGE);
		else if (getIsTablet()) setVisibleCount(TABLET_ITEMS_PER_PAGE);
		else setVisibleCount(ITEMS_PER_PAGE);
	};

	return {
		idols,
		setIdols,
		activeTab,
		loading,
		visibleList,
		handleMore,
		handleTabChange,
		femaleIdols,
		maleIdols,
	};
};

export default useChart;
