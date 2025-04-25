import { useCallback, useEffect, useState } from "react";
import { donationsAPI } from "../apis/donationsAPI";

// 커스텀 훅: 후원 데이터를 가져오며 상태 관리 담당
export const useDonations = () => {
	const [donations, setDonations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const LOCAL_STORAGE_KEY = "donationData";

	// API로 후원 데이터를 가져오는 함수
	const getDonation = useCallback(async () => {
		try {
			const response = await donationsAPI.getDonations(); // API 호출
			if (response?.list) {
				setDonations(response.list); // donations에 후원 목록 저장
				localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.list)); // 로컬 스토리지에 데이터 캐시
				setTimeout(() => {
					setLoading(false);
				}, 600); // 로딩 완료 전달
			} else throw new Error("응답이 없음"); // 데이터가 비어있는 경우 에러 처리
		} catch (e) {
			console.error("API 실패", e);
			// 일정 시간이 지난 후 에러 상태를 보여줄 수 있도록 설정 (사용자에게 데이터가 로딩시도가 있었다는 것을 확인시켜주기 위함)
			setTimeout(() => {
				setError(true);
				setLoading(false);
			}, 1000);
		}
	}, []);

	useEffect(() => {
		const stored = localStorage.getItem(LOCAL_STORAGE_KEY); // 로컬 스토리지에 있는 데이터 불러오기
		if (stored) {
			// 로컬 스토리지에 데이터가 존재한다면
			try {
				setDonations(JSON.parse(stored)); // 파싱하여 donations에 후원 목록 저장
				setTimeout(() => {
					setLoading(false);
				}, 1000); // 로딩 완료 처리
			} catch {} // 파싱 실패시 무시
		}
		getDonation(); // API 호출을 통해 데이터 최신화
	}, [getDonation]);

	return { donations, loading, error };
};
