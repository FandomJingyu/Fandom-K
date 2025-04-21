import { useState } from "react";
import RadioButton from "../../../../src/components/RadioButton";

export default function CreditRechargeModalContent({ myCredit }) {
	const credits = [100, 500, 1000]; // 라디오 버튼 test를 위한 크레딧 배열
	const [select, setSelect] = useState(null); // 라디오 버튼 test를 위한 state설정 (현재 선택된 값을 저장하는 state)

	return (
		<form>
			<div>
				{credits.map((credit) => (
					<RadioButton
						key={credit}
						value={credit}
						checked={select === credit}
						onChange={setSelect}
						className="charge"
					>
						{credit}
					</RadioButton>
				))}
			</div>
		</form>
	);
}
