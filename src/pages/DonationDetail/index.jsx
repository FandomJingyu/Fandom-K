import { css } from "@emotion/react";

export default function DonationDetail() {
	return (
		<div className="mainGrid">
			<div className="donationDetailTop">
				<h2 css={title}>
					로제 <span>(블랙핑크)</span>
				</h2>
				<div>
					<p css={subTitle}>'30번째 생일 축하'</p>
					<p css={subTitle}>합정역 광고</p>
				</div>
			</div>
		</div>
	);
}

const title = css`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const subTitle = css`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;
