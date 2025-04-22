/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from "react";

import btnLeft from "/images/btn-donation-arrow-left.svg";
import btnRight from "/images/btn-donation-arrow-right.svg";
import {
	donationContent,
	donationPageNation,
	donationTitle,
	pageNationLeft,
	pageNationRight,
} from "./Donation.style";

import { donationsAPI } from "../../../apis/donationsAPI";
import Card from "./components/Card";

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
		}
	}, [getDonation]);

	return (
		<section>
			<h2 css={donationTitle}>후원을 기다리는 조공</h2>

			<div css={donationPageNation}>
				<button type="button" css={pageNationLeft}>
					<img src={btnLeft} alt="이전" />
				</button>

				{/* 카드 리스트만 따로 감쌈 */}
				<div css={donationContent}>
					{donations.map((donation) => (
						<Card key={donation.id} donation={donation} />
					))}
				</div>

				<button type="button" css={pageNationRight}>
					<img src={btnRight} alt="이후" />
				</button>
			</div>
		</section>
	);
}

export default Donation;
