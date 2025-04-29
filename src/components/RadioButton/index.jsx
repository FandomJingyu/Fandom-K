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
	padding-top: 8px;

	@media (max-width: 425px) {
    width: 100%;
  }
`;

// 크레딧 모달창 스타일 정의 & 선택된 경우 border 색상 변경 (input display:none으로 설정해서 className을 지정해 border색상 변경)
const chargeRadioButton = (checked) => css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 62px;
  border-radius: 8px;
  border: 1px solid ${checked ? "var(--orange-F96D69)" : "var(--white-F7F7F8)"};
`;

// input 자체는 화면에 표시되지 않도록 숨김 처리
const inputStyle = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
`;

// 라벨 내부 콘텐츠 영역 스타일
const contentWrapper = (className) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: ${className === "vote" ? "0" : "0 23px 0 16px"};
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
		charge: chargeRadioButton(checked),
	};

	const id = `radio-${value}`; // 선택된 값에 따라 고유 ID 설정 (라벤 연결용)

	return (
		<label htmlFor={id} css={styleObj[className]}>
			{/* 실제 라디오 버튼은 숨겨져 있고, onChange로 선택 이벤트 처리 */}
			<input
				css={inputStyle}
				type="radio"
				id={id}
				name="radio-group"
				checked={checked}
				onChange={() => onChange(value)}
			/>

			{/* 라벨 내부 콘텐츠: children + 선택 상태에 따라 아이콘 변경 */}
			<div css={contentWrapper(className)}>
				<div>{children}</div>
				<img
					src={checked ? radioTrue : radioFalse}
					alt="라디오 단일 선택 버튼"
					css={radioIcon}
				/>
			</div>
		</label>
	);
}

export default RadioButton;
