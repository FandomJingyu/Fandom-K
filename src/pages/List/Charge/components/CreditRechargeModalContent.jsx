import Button from "@/components/Button/Button";
import RadioButton from "@/components/RadioButton";
import { useCredit } from "@/context/CreditContext";
// src/components/Modal/Modal.styles.js
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { toast } from "react-toastify";
import creditIcon from "/icons/icon_credit.svg";
import {
	RadioStyles,
	buttonSpacing,
	radioContentStyles,
} from "../styles/CreditRechargeModalContent.styles";

export default function CreditRechargeModalContent({ myCredit, closeModal }) {
	const credits = [100, 500, 1000]; // 라디오 버튼 test를 위한 크레딧 배열
	const [select, setSelect] = useState(null); // 라디오 버튼 test를 위한 state설정 (현재 선택된 값을 저장하는 state)
	const { addCredit } = useCredit(); // 크래딧 충전하는 값을 더하는 훅

	// 제출 시 선택된 값 부모 컴포넌트로 전달
	const handleSubmit = (e) => {
		e.preventDefault();
		if (select !== null) {
			// 선택된 크레딧 값 처리 로직 (로컬스토리지 저장 등)
			addCredit(select);
			closeModal(); // 모달 닫기
		}
	};

	// 라디오 버튼의 선택 상태를 설정하는 함수
	const handleSelect = (value) => {
		setSelect(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			{credits.map((credit) => (
				<div key={credit} css={RadioStyles}>
					<RadioButton
						value={credit}
						checked={select === credit}
						onChange={handleSelect}
						className="charge"
					>
						<div css={radioContentStyles}>
							<img src={creditIcon} alt="크레딧 이미지" />
							{credit}
						</div>
					</RadioButton>
				</div>
			))}

			<div css={buttonSpacing}>
				<Button
					type="submit"
					size="recharge"
					variant="primary"
					disabled={select === null}
					fullWidth
					onClick={() =>
						toast.success(`🎉 ${select.toLocaleString()} 크레딧 충전 완료!`)
					}
				>
					충전하기
				</Button>
			</div>
		</form>
	);
}
