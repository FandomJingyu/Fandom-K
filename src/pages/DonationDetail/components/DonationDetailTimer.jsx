import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";

/** @jsxImportSource @emotion/react */

export default function DonationDetailTimer({ deadline }) {
	// *** 모집 기간 계산, ***
	// * 모집 기간이 지나면 후원 버튼 비활성화,
	// * 남은 시간 카운트다운
	const calculateTimeLeft = useCallback(() => {
		// deadline에서 현재시간 빼기
		const difference = +new Date(deadline) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	}, [deadline]);

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	useEffect(() => {
		// 초기 타임 설정
		setTimeLeft(calculateTimeLeft());

		// 1초마다 업데이트
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		// 컴포넌트 언마운트 시 타이머 정리
		return () => clearInterval(timer);
	}, [calculateTimeLeft]);

	// 시간 계산 결과가 0보다 크면 배열로 변환
	const timeLeftArray = Object.entries(timeLeft).map(([key, value]) => ({
		label: key,
		value: ["hours", "minutes", "seconds"].includes(key)
			? value.toString().padStart(2, "0")
			: value,
	}));
	return (
		<>
			<span>남은 시간</span>
			<p css={DonationDetailTimerStyle}>
				<strong>{timeLeftArray[0].value}</strong>&nbsp;Days &nbsp;&nbsp;
				<strong>{timeLeftArray[1].value}</strong>&nbsp;:&nbsp;
				<strong>{timeLeftArray[2].value}</strong>&nbsp;:&nbsp;
				<strong>{timeLeftArray[3].value}</strong>
			</p>
			<p>
				모집 기간 : <span>{deadline.split("T")[0]}</span>
			</p>
		</>
	);
}

const DonationDetailTimerStyle = css`
  strong:first-of-type {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);
  }
`;
