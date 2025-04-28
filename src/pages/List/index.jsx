import { css } from "@emotion/react";
import CreditCharge from "./Charge/components/CreditCharge";
import Chart from "./Chart/index";
import Donation from "./Donation/index";
/** @jsxImportSource @emotion/react */

const List = () => {
	return (
		<>
			<div css={BlurStyle}>
				<img src="/images/landing/blur01.png" alt="blur" />
			</div>
			<div className="mainGrid">
				<CreditCharge />
				<Donation />
				<Chart />
			</div>
		</>
	);
};

export default List;
const BlurStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  transform: translate(-50%, -50%);
	z-index: 100;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
	@media (max-width: 768px) {
		width: 94.12vw;
		height: 94.12vw;
	}
`;
