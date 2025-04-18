/** @jsxImportSource @emotion/react */

import { DONATIONS } from "../../../../../mocks/donations";
import {
	creditImg,
	descriptionSubtitle,
	descriptionTitle,
	donatioImgContainer,
	donationButton,
	donationCardContainer,
	donationDday,
	donationDescription,
	donationFooter,
	donationFooterLeft,
	donationImg,
	donationTitleContainer,
	imgWrapper,
	overlaySvg,
	targetDonation,
} from "./Card.style";

// {
//   status: true,
//   deadline: '2025-10-10T00:00:00.000Z',
//   createdAt: '2025-04-15T09:53:35.947Z',
//   receivedDonations: 500000,
//   targetDonation: 1000000,
//   idolId: 0,
//   subtitle: '강남역 10번 출구',
//   title: '민지 생일 축하',
//   id: 0,
//   idol: {
//     totalVotes: 1000,
//     profilePicture: '/mocks/mock01.png',
//     group: '뉴진스',
//     gender: 'female',
//     name: '민지',
//     id: 0,
//   }
// },

function Card() {
	const donations = DONATIONS[0];
	const idols = donations.idol;

	// 남은날짜 구하기
	const today = new Date();
	const deadline = new Date(donations.deadline);

	const diffTime = deadline - today;
	const dDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 일 단위로 변환

	return (
		<article css={donationCardContainer}>
			<div css={donatioImgContainer}>
				<div css={imgWrapper}>
					<img css={donationImg} src={idols.profilePicture} alt={idols.name} />
					<img
						css={overlaySvg}
						src="/images/donation-card-cover.svg"
						alt="아이돌 프로필 그라데이션 효과 사진"
					/>
				</div>
				<button type="button" css={donationButton}>
					후원하기
				</button>
			</div>

			<div css={donationDescription}>
				<div css={donationTitleContainer}>
					<h3 css={descriptionSubtitle}>{donations.subtitle}</h3>
					<h2 css={descriptionTitle}>{donations.title}</h2>
				</div>
				<div css={donationFooter}>
					<div css={donationFooterLeft}>
						<img css={creditImg} src="/images/credit.svg" alt="크레딧 사진" />
						<span css={targetDonation}>{donations.targetDonation}</span>
					</div>
					<span css={donationDday}>{dDay}일 남음</span>
				</div>
			</div>
		</article>
	);
}

export default Card;
