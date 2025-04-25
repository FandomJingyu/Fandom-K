/** @jsxImportSource @emotion/react */
import { donationTitle } from "./Donation.style";

import LoadingError from "../../../components/Error";
import { useDonations } from "../../../hooks/useDonation";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import DonationSkeleton from "./components/Skeleton";

function Donation() {
	const { donations, loading, error } = useDonations();

	return (
		<section>
			<h2 css={donationTitle}>후원을 기다리는 조공</h2>

			{loading ? (
				<div>
					<DonationSkeleton />
				</div>
			) : error ? (
				<LoadingError />
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
