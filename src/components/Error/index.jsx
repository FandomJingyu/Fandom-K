/** @jsxImportSource @emotion/react */

import {
	black,
	button,
	description,
	errorWrapper,
	icon,
	iconWrapper,
	title,
} from "./Error.style";

const ERROR_MESSAGE = {
	donation: "후원 목록을",
	chart: "아이돌 목록을",
	mypage: "아이돌을",
};

/**
 * 에러 발생 시 사용자에게 메시지를 보여주는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {"donation"|"chart"|"myPage"|string} [props.error="페이지를"] - 에러가 발생한 영역을 식별하는 키 값.
 *        `ERROR_MESSAGE` 객체의 키값 중 하나를 전달하면 해당 메시지가 자동으로 전달됩니다.
 *        정의되지 않은 값이 들어오면 그대로 출력됩니다.
 * @returns 오류 메시지와 다시 시도 버튼
 */
function LoadingError({ error = "페이지를" }) {
	const errorMessage = ERROR_MESSAGE[error] || error;

	const handleReload = () => {
		location.reload();
	};
	return (
		<div css={errorWrapper}>
			<div css={iconWrapper}>
				<div css={black}>
					<div css={icon}>!</div>
				</div>
			</div>
			<h1 css={title}>문제가 발생했습니다.</h1>
			<p css={description}>{errorMessage} 불러오는데 실패했습니다.</p>
			<button onClick={handleReload} css={button} type="button">
				다시 시도하기
			</button>
		</div>
	);
}

export default LoadingError;
