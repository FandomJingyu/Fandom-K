import { useCallback, useEffect, useState } from "react";
import { donationsAPI } from "../apis/donationsAPI";

const LOCAL_STORAGE_KEY = "donationData"; // 로컬 스토리지 키
const SKELETON_DISPLAY_MIN_TIME = 600; // 최소 로딩 스켈레톤 표시 시간
const ERROR_DISPLAY_DELAY = 600; // 에러 표시 지연 시간

// 로컬 스토리지에서 데이터 불러오기
const loadData = () => {
	try {
		const data = localStorage.getItem(LOCAL_STORAGE_KEY);
		return data ? JSON.parse(data) : null; // 데이터가 존재하면 파싱하여 반환, 없으면 null
	} catch (e) {
		console.log("로컬 스토리에서 데이터를 불러오는데 실패했습니다.", e);
	}
};

// 로컬 스토리지에 데이터 저장하기
const saveData = (data) => {
	try {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data)); // 데이터를 문자열로 변환하여 저장
	} catch (e) {
		console.error("로컬 스토리지 저장 실패", e);
	}
};

// 커스텀 훅: 후원 데이터를 가져오며 상태 관리 담당
export const useDonations = () => {
	const [donations, setDonations] = useState([]); // 후원 데이터 목록
	const [loading, setLoading] = useState(true); // 로딩 상태
	const [error, setError] = useState(false); // 에러 상태

	// 로컬 스토리지에서 초기 데이터 불러오기
	const loadInitialData = useCallback(() => {
		// 함수가 매 렌더링마다 새로 만들어지는 것을 방지하기 위해 useCallback 사용
		const stored = loadData();
		if (stored) {
			setDonations(stored); // 후원 목록 없데이트
			setTimeout(() => setLoading(false), SKELETON_DISPLAY_MIN_TIME);
		}
	}, []);

	useEffect(() => {
		loadInitialData(); // 로컬 저장소 초기화

		const getDonations = async () => {
			try {
				const response = await donationsAPI.getDonations(); // API 호출
				if (response?.list) {
					setDonations(response.list); // 받아온 후원 데이터 저장
					saveData(response.list); // 로컬 스토리지에도 데이터 저장
					setTimeout(() => setLoading(false), SKELETON_DISPLAY_MIN_TIME); // 최소 로딩 시간 후 로딩 종료
				} else {
					throw new Error("데이터가 존재하지 않습니다."); // 데이터가 없을 경우 에러 발생
				}
			} catch (e) {
				console.error("API 호출 실패:", e);
				setTimeout(() => {
					setError(true); // 에러 표시
					setLoading(false); // 로딩 종료
				}, ERROR_DISPLAY_DELAY);
			}
		};

		getDonations(); // API로 후원 데이터 가져오기
	}, [loadInitialData]);

	return { donations, loading, error };
};
