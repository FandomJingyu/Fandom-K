/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from "react";

import { donationTitle } from "./Donation.style";

import { donationsAPI } from "../../../apis/donationsAPI";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

function Donation() {
	const [donations, setDonations] = useState([]);
	const [loading, setLoading] = useState(true);

	/**
	 * 후원 데이터 비동기 호출
	 * - useCallback을 사용하여 getDonation 함수가 매 렌더링마다 새로 생성되지 않도록 방지
	 * - 의존성 배열에 있는 useEffect가 불필요하게 재실행되지 않게 하기 위함
	 */
	const getDonation = useCallback(async () => {
		const response = await donationsAPI.getDonations();
		if (response) {
			setDonations(response.list);
			setLoading(false);
		}
	}, []);

	/**
	 * 컴포넌트 마운트 시 후원 데이터 불러오기
	 */
	useEffect(() => {
		try {
			getDonation();
		} catch (e) {
			console.log("후원을 불러오는데 실패했습니다.", e);
		} finally {
			setLoading(false);
		}
	}, [getDonation]);

	return (
		<section>
			<h2 css={donationTitle}>후원을 기다리는 조공</h2>

			{loading && <div>로딩 중...</div>}

			{!loading && donations.length > 0 && (
				<Carousel
					items={donations}
					renderItem={(donation) => (
						<Card key={donation.id} donation={donation} />
					)}
				/>
			)}

			{!loading && donations.length === 0 && (
				<div>현재 진행 중인 후원이 없습니다.</div>
			)}
		</section>
	);
}

export default Donation;
