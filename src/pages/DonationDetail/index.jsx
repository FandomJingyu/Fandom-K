import { css } from "@emotion/react";
import DonationDetailInfo from "./components/DonationDetailInfo";
import DonationDetailText from "./components/DonationDetailText";
/** @jsxImportSource @emotion/react */

export default function DonationDetail() {
	return (
		<div className="mainGrid" css={DonationDetailStyle}>
			<div css={DonationDetailTop}>
				<h2>
					제니 <span>(블랙핑크)</span>
				</h2>
				<div>
					<p>'30번째 생일 축하'&nbsp;-&nbsp;</p>
					<p>합정역 광고</p>
				</div>
			</div>
			<div css={DonationDetailContent}>
				<div className="contentArea">
					<div className="profile">
						<img src="/mocks/mock04.png" alt="" />
					</div>
					<DonationDetailText />
				</div>
				<div className="infoArea">
					<DonationDetailInfo />
				</div>
			</div>
		</div>
	);
}

const DonationDetailStyle = css`
  padding-block: 80px;
  color: #fff;
  &::after {
    content: '';
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 58.9%, #000 100%);
  }
`;

const DonationDetailTop = css`
  text-align: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 48px;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    font-size: 30px;
  }
`;

const DonationDetailContent = css`
  position: relative;
  height: 100%;
  margin-top: 100px;
  display: flex;
  gap: 100px;
  .contentArea {
    width: 600px;
    flex: none;
    .profile {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  .infoArea {
    flex: 1;
  }
`;
