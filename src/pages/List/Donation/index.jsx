/** @jsxImportSource @emotion/react */

import { donationTitle } from "./Donation.style";

import { donationsAPI } from "../../../apis/donationsAPI";
import LodaingError from "../../../components/Error";
import { useDonations } from "../../../hooks/useDonation";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

function Donation() {
	const { donations, loading, error } = useDonations();

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
