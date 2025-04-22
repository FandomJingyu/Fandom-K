/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from "react";

import { donationTitle } from "./Donation.style";

import { donationsAPI } from "../../../apis/donationsAPI";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

function Donation() {
	const [donations, setDonations] = useState([]);
	const [loading, setLoading] = useState(true);

	const getDonation = useCallback(async () => {
		const response = await donationsAPI.getDonations();
		if (response) {
			setDonations(response.list);
			setLoading(false);
		}
	}, []);

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
