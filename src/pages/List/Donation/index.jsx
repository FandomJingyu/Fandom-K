/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from "react";

import { donationTitle } from "./Donation.style";

import { donationsAPI } from "../../../apis/donationsAPI";
import LodaingError from "../../../components/Error";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

function Donation() {
	const [donations, setDonations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	/**
	 * 후원 데이터 비동기 호출
	 * - useCallback을 사용하여 getDonation 함수가 매 렌더링마다 새로 생성되지 않도록 방지
	 * - 의존성 배열에 있는 useEffect가 불필요하게 재실행되지 않게 하기 위함
	 * - try-catch 블록으로 예외 처리를 통해 에러 발생 시 로그 출력
	 * - 에러 발생시 에러 상태 업데이트
	 */
	const getDonation = useCallback(async () => {
		try {
			const response = await donationsAPI.getDonations();
			if (response?.list) {
				setDonations(response.list);
				setLoading(false);
			} else {
				throw new Error("응답이 비어있습니다");
			}
		} catch (e) {
			console.error("후원을 불러오는데 실패했습니다.", e);
			// 로딩 UI 잠시 유지
			setTimeout(() => {
				setError(true);
				setLoading(false);
			}, 600); // 600초 정도 기다렸다가 에러 표시
		}
	}, []);

	/**
	 * 컴포넌트 마운트 시 후원 데이터 불러오기
	 * - 컴포넌트가 처음 렌더링될 때 getDonation 함수를 실행하여 서버에서 후원 데이터를 가져옴
	 * - 의존성 배열에 getDonation을 넣어, 해당 함수가 변경될 경우에만 재실행되도록 설정
	 */
	useEffect(() => {
		getDonation();
	}, [getDonation]);

	return (
		<section>
			<h2 css={donationTitle}>후원을 기다리는 조공</h2>

			{loading ? (
				<div>로딩 중...</div>
			) : error ? (
				<LodaingError />
			) : (
				<Carousel
					items={donations}
					renderItem={(donation) => (
						<Card key={donation.id} donation={donation} />
					)}
				/>
			)}
		</section>
	);
}

export default Donation;
