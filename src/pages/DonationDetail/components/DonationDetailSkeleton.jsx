import { css } from "@emotion/react";
import { shimmerStyle } from "../../../styles/skeletonAnimation";

/** @jsxImportSource @emotion/react */
export default function DonationDetailSkeleton() {
	return (
		<div css={DonationDetailSkeletonStyle}>
			<div css={DonationDetailSkeletonTop}>
				<span />
				<span />
			</div>
			<div css={DonationDetailSkeletonContent}>
				<div>
					<span css={DonationDetailSkeletonBox} className="isImg" />
					<div css={DonationDetailSkeletonSentences}>
						<span className="isLong" />
						<span className="isShort" />
						<span className="isMedium" />
						<span className="isShort" />
						<br />
						<span className="isLong" />
						<span className="isShort" />
						<span className="isMedium" />
						<br />
						<span className="isLong" />
						<span className="isShort" />
						<span className="isMedium" />
					</div>
				</div>
				<span css={DonationDetailSkeletonBox} />
			</div>
		</div>
	);
}

const DonationDetailSkeletonStyle = css`
  span {
    display: block;
    border-radius: 10px;
    ${shimmerStyle}
  }
`;

const DonationDetailSkeletonTop = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  span {
    height: 36px;
    width: 400px;
    &:first-child {
      height: 58px;
      width: 300px;
      margin-bottom: 20px;
    }
  }
`;

const DonationDetailSkeletonContent = css`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;
const DonationDetailSkeletonBox = css`
  height: 600px;
  width: 500px;
  &.isImg {
    width: 600px;
  }
`;
const DonationDetailSkeletonSentences = css`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    height: 30px;
  }
  .isShort {
    width: 50%;
  }
  .isMedium {
    width: 70%;
  }
  .isLong {
    width: 100%;
    height: 40px;
  }
`;
