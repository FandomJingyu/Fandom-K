// VoteIdolSkeleton.styles.js.
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { shimmerStyle } from "../../../../../../styles/skeletonAnimation";

export const SkeletonCircle = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  ${shimmerStyle}
`;

export const SkeletonInfo = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkeletonRankAndName = css`
  display: flex;
  justify-content: space-between;
`;

export const SkeletonRank = css`
  width: 40px;
  height: 10px;
  ${shimmerStyle}
`;

export const SkeletonName = css`
  width: 100px;
  height: 10px;
  ${shimmerStyle}
`;

export const SkeletonVotes = css`
  width: 80px;
  height: 10px;
  ${shimmerStyle}
`;
