/** @jsxImportSource @emotion/react */

import { progressContainer, progressContent } from "./ProgressBar.styles";

/**
 * ProgressBar 컴포넌트
 *
 * 달성률 전달받아 시각적으로 표시하는 프로그레스 바
 *
 * @param {number} props.progress - 현재 달성률
 */
function ProgressBar({ progress }) {
	return (
		<div css={progressContainer}>
			<div css={progressContent(progress)} />
		</div>
	);
}

export default ProgressBar;
