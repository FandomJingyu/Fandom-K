/** @jsxImportSource @emotion/react */
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
} from "./Card.style"; // 스타일 import

import Button from "../../../../../components/Button/Button";

/**
 * 단일 후원 카드 컴포넌트
 *
 * @param {Object} donation - 후원 데이터 객체
 * @returns JSX
 */
function Card({ donation }) {
	const idol = donation.idol; // 아이돌 정보 분리 추출

	// 남은 날짜 구하기
	const today = new Date();
	const deadline = new Date(donation.deadline);

	const diffTime = deadline - today;
	const dDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 일 단위로 변환

	return (
		<article css={donationCardContainer}>
			{/* 상단 이미지 영역 */}
			<div css={donatioImgContainer}>
				<div css={imgWrapper}>
					{/* 아이돌 프로필 이미지 */}
					<img css={donationImg} src={idol.profilePicture} alt={idol.name} />
					{/* 그라데이션 SVG 오버레이 */}
					<img
						css={overlaySvg}
						src="/images/donation-card-cover.svg"
						alt="아이돌 프로필 그라데이션 효과 사진"
					/>
				</div>

				{/* 후원하기 버튼 */}
				<div css={donationButton}>
					<Button size="donate-md">후원하기</Button>
				</div>
			</div>

			{/* 카드 하단 텍스트 영역 */}
			<div css={donationDescription}>
				{/* 제목 영역 (장소, 제목 등) */}
				<div css={donationTitleContainer}>
					<h4 css={descriptionSubtitle}>{donation.subtitle}</h4>
					<h3 css={descriptionTitle}>{donation.title}</h3>
				</div>

				{/* 하단 정보 (크레딧, D-day) */}
				<div css={donationFooter}>
					<div css={donationFooterLeft}>
						{/* 크레딧 아이콘 및 목표 금액 */}
						<img css={creditImg} src="/images/credit.svg" alt="크레딧 사진" />
						<span css={targetDonation}>{donation.targetDonation}</span>
					</div>
					{/* 남은 날짜 */}
					<span css={donationDday}>{dDay}일 남음</span>
				</div>
			</div>
		</article>
	);
}

export default Card;
