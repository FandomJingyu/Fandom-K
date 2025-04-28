import CheckIdol from "@/components/CheckIdol";
/** @jsxImportSource @emotion/react */
import Circle from "@/components/Circle";
import RadioButton from "@/components/RadioButton";
import {
	IdolDetails,
	IdolInfo,
	IdolItem,
	IdolList,
	IdolName,
	IdolVote,
	RadioContent,
	Rank,
} from "./VoteIdolList.styles";

// 천 단위 구분 기호 추가 함수
const formatVotes = (votes) => {
	return new Intl.NumberFormat().format(votes); // 천 단위 구분 기호 추가
};

export default function VoteIdolList({ idols, selectedIdolId, onSelectIdol }) {
	return (
		<>
			<ul css={IdolList}>
				{idols.map((idol, index) => (
					<li key={idol.id} css={IdolItem}>
						<RadioButton
							value={idol.id}
							checked={selectedIdolId === idol.id}
							onChange={() => onSelectIdol(idol.id)}
							className="vote"
						>
							<div css={RadioContent}>
								<Circle
									size="70px"
									imageUrl={idol.profilePicture}
									alt={idol.name}
									loading="lazy"
									decoding="async"
								>
									<CheckIdol
										isChecked={selectedIdolId === idol.id}
										size={70}
										checkSize={18}
									/>
								</Circle>
								<div css={IdolInfo}>
									<span css={Rank}>{index + 1}</span>
									<div css={IdolDetails}>
										<div css={IdolName}>
											<span>{idol.group}</span>
											<span>{idol.name}</span>
										</div>
										<span css={IdolVote}>{formatVotes(idol.totalVotes)}표</span>
									</div>
								</div>
							</div>
						</RadioButton>
					</li>
				))}
			</ul>
		</>
	);
}
