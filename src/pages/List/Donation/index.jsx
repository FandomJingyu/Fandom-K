/** @jsxImportSource @emotion/react */
import { DONATIONS } from "../../../mocks/donations";
import Card from "./components/Card";

import btnLeft from "/images/btn-donation-arrow-left.svg";
import btnRight from "/images/btn-donation-arrow-right.svg";
import {
	donationContent,
	donationTitle,
	donationWrapper,
	pageNationLeft,
	pageNationRight,
	slider,
} from "./Donation.style";

function Donation() {
	const donations = DONATIONS;

	return (
		<section css={donationWrapper}>
			<h2 css={donationTitle}>후원을 기다리는 조공</h2>

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
		</section>
	);
}

export default Donation;
