/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import radioFalse from "/images/radio-false.svg";
import radioTrue from "/images/radio-true.svg";

// 투표 모달창 스타일 정의
const voteRadioButton = css`
  display: flex;
  justify-content: space-between;
  width: 477px;
  height: 70px;
`;

// 크레딧 모달창 스타일 정의 & 선택된 경우 border 색상 변경
const chargeRadioButton = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 295px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid var(--white-F7F7F8);

  &.selected {
    border: 1px solid var(--orange-F96D69);
  }
`;

// 라디오 버튼 스타일 정의
const radioIcon = css`
  width: 16px;
  height: 16px;
`;

/**
 * 공통 RadioButton 컴포넌트
 *
 * @param {any} value - 이 버튼이 나타내는 고유 값 (예: voteId 또는 크레딧 수)
 * @param {boolean} checked - 선택 여부 (상위 컴포넌트에서 현재 선택된 값과 비교해 전달)
 * @param {function} onChange - 클릭 시 호출될 콜백 함수 (value를 인자로 전달)
 * @param {React.ReactNode} children - 버튼 내부에 렌더링될 콘텐츠 (아이돌 정보 또는 크레딧 금액 등)
 * @param {"vote" | "charge"} className - 버튼 타입 ("vote"는 아이돌 투표, "charge"는 크레딧 선택에 사용)
 */

function RadioButton({ value, checked, onChange, children, className }) {
	const styleObj = {
		vote: voteRadioButton,
		charge: chargeRadioButton,
	};

	return (
		<div
			css={styleObj[className]}
			className={checked ? "selected" : ""}
			onClick={() => onChange(value)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					onChange(value);
				}
			}}
		>
			<div>{children}</div>
			<img
				src={checked ? radioTrue : radioFalse}
				alt="라디오 단일 선택 버튼"
				css={radioIcon}
			/>
		</div>
	);
}

export default RadioButton;
