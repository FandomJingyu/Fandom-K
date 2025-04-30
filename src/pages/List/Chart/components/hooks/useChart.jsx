import { chartAPI } from "@/apis/charAPI";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 10;
const TABLET_ITEMS_PER_PAGE = 5;
const MOBILE_ITEMS_PER_PAGE = 5;

const getIsMobile = () => window.matchMedia("(max-width: 425px)").matches;
const getIsTablet = () =>
	window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches;

export const useChart = () => {
	const [femaleIdols, setFemaleIdols] = useState([]);
	const [maleIdols, setMaleIdols] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

	useEffect(() => {
		const fetchCharts = async () => {
			try {
				setLoading(true);

				const femaleRes = await chartAPI.getRanks("female", 100);
				const maleRes = await chartAPI.getRanks("male", 100);

				setFemaleIdols(femaleRes.idols);
				setMaleIdols(maleRes.idols);
			} catch (err) {
				console.error("차트 불러오기 실패", err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCharts();
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

	const handleMore = () => {
		if (getIsMobile()) setVisibleCount((prev) => prev + MOBILE_ITEMS_PER_PAGE);
		else if (getIsTablet())
			setVisibleCount((prev) => prev + TABLET_ITEMS_PER_PAGE);
		else setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
	};

	return {
		loading,
		error,
		femaleIdols,
		maleIdols,
		setFemaleIdols,
		setMaleIdols,
		visibleCount,
		setVisibleCount,
		handleMore,
	};
};
