import { shimmerStyle } from "@/styles/skeletonAnimation";
import { css } from "@emotion/react";

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
					<span className="isImg" />
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
				<span css={DonationDetailSkeletonBox} className="hide-768" />
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
  @media (max-width: 425px) {
    span {
      border-radius: 1.3vw;
    }
  }
`;

const DonationDetailSkeletonTop = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    height: 36px;
    width: 400px;
    &:first-of-type {
      height: 58px;
      width: 300px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 768px) {
    span {
      width: 52.08vw;
      height: 3.13vw;
      &:first-of-type {
        height: 5.86vw;
        width: 39.06vw;
        margin-bottom: 3.91vw;
      }
    }
  }
`;

const DonationDetailSkeletonContent = css`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  > div {
    width: 600px;
    .isImg {
      height: 600px;
      width: 100%;
    }
  }
  @media (max-width: 1300px) {
    gap: 40px;
    margin-top: 60px;
    > div {
      width: auto;
      flex: 1;
      .isImg {
        height: auto;
        aspect-ratio: 1/1;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 60px;
    > div {
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    margin-top: 9.41vw;
  }
`;
const DonationDetailSkeletonBox = css`
  height: 600px;
  width: 500px;
  @media (max-width: 1300px) {
    width: 40%;
    height: 50vw;
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
  @media (max-width: 768px) {
    margin-top: 6.13vw;
    span {
      height: 3.91vw;
    }
    .isShort {
      width: 60%;
    }
    .isMedium {
      width: 80%;
    }
    .isLong {
      width: 100%;
      height: 5.21vw;
    }
  }
  @media (max-width: 480px) {
    margin-top: 9.41vw;
  }
`;
