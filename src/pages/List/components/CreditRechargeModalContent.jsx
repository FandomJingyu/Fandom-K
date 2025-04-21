import { useState } from "react";
import creditImg from "../../../../public/images/credit.svg";
import RadioButton from "../../../../src/components/RadioButton";
import { useCredit } from "../../../context/CreditContext";

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
			<div>
				{credits.map((credit) => (
					<RadioButton
						key={credit}
						value={credit}
						checked={select === credit}
						onChange={handleSelect}
						className="charge"
					>
						<img src={creditImg} alt="크레딧 이미지" />
						{credit}
					</RadioButton>
				))}
			</div>
			<button type="submit" disabled={select === null}>
				충전하기
			</button>
		</form>
	);
}
