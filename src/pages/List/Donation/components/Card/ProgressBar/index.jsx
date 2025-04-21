/** @jsxImportSource @emotion/react */

import { progressContainer, progressContent } from "./ProgressBar.style";

/**
 * ProgressBar 컴포넌트
 *
 * 받은 후원금(`receive`)과 목표 금액(`target`)을 기반으로
 * 진행률을 계산해 시각적으로 표시하는 프로그레스 바
 *
 * @param {number} props.receive - 현재까지 받은 후원 금액
 * @param {number} props.target - 목표 후원 금액
 */
function ProgressBar({ receive, target }) {
	const progress = Math.min((receive / target) * 100, 100); // 100% 초과 방지

	return (
		<div css={progressContainer}>
			<div css={progressContent(progress)} />
		</div>
	);
}

export default ProgressBar;
