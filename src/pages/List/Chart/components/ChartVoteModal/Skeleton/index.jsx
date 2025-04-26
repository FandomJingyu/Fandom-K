import useIsMobile from "@/hooks/useIsMobile";
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
	const isMobile = useIsMobile();
	const skeletonCount = isMobile ? 9 : count; // 모바일이면 9개, 아니면 기본값 6개

	return (
		<ul css={IdolList}>
			{Array.from({ length: skeletonCount }).map(() => (
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
