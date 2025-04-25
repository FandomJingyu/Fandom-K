/** @jsxImportSource @emotion/react */
import { v4 as uuidv4 } from "uuid";
import { IdolItem, IdolList, RadioContent } from "../VoteIdolList.styles";
import {
	SkeletonCircle,
	SkeletonInfo,
	SkeletonName,
	SkeletonRank,
	SkeletonRankAndName,
	SkeletonVotes,
} from "./VoteIdolSkeleton.styles"; // 아이돌 리스트 스타일을 import

export default function VoteIdolSkeleton({ count = 6 }) {
	return (
		<ul css={IdolList}>
			{Array.from({ length: count }).map(() => (
				<li key={uuidv4()} css={IdolItem}>
					{" "}
					{/* uuid로 고유한 key 부여 */}
					<div css={RadioContent}>
						<div css={SkeletonCircle} />
						<div css={SkeletonInfo}>
							<div css={SkeletonRankAndName}>
								<div css={SkeletonRank} />
								<div css={SkeletonName} />
							</div>
							<div css={SkeletonVotes} />
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
