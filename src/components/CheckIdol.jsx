/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// size: 아이돌 원 사이즈
// checkSize: 체크표시 사이즈
const CheckIdol = ({ isChecked, size, checkSize }) => {
	if (!isChecked) return null;

	return (
		<div css={checkWrapper(size)}>
			<div css={checkBackground(size)} />
			<img
				src="../public/icons/Checkmark.png"
				alt="체크표시"
				css={checkIconStyle(checkSize)}
			/>
		</div>
	);
};

const checkWrapper = (size) => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${size}px;
  height: ${size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* 아이콘과 배경이 위로 올라가도록 */
`;

const checkBackground = (size) => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(271deg, #F96E68 -9.84%, #FE578F 107.18%);
  border-radius: 50%;
  opacity: 0.5;
  z-index: 0; /* 배경이 아이콘 아래에 위치하도록 */
`;

const checkIconStyle = (checkSize) => css`
  position: relative;
  width: ${checkSize}px;
  height: ${checkSize}px;
  z-index: 1; /* 아이콘이 배경 위에 표시되도록 */
`;

export default CheckIdol;
