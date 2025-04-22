/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import RadioButton from "../../../../../src/components/RadioButton"; // 여기에 맞는 RadioButton import
import Button from "../../../../components/Button/Button";
import Circle from "../../../../components/Circle";
import { useCredit } from "../../../../context/CreditContext";

// 스타일 import
import {
	CreditInfo,
	IdolInfo,
	IdolItem,
	IdolList,
	ModalWrapper,
	RadioContent,
} from "./ChartVote.styles";

export default function ChartVoteModal({ gender, idols, closeModal }) {
	const { credit, deductCredit } = useCredit();
	const [selectedIdolId, setSelectedIdolId] = useState(null);

	const handleVote = (e) => {
		e.preventDefault(); // 폼 제출 방지

		if (credit < 1000) {
			alert("크레딧이 부족합니다.");
			return;
		}

		if (!selectedIdolId) {
			alert("투표할 아이돌을 선택해주세요.");
			return;
		}

		// 크레딧 차감
		deductCredit(1000);

		// (선택) 투표 로직 추가
		console.log(`${gender} 아이돌 ${selectedIdolId} 투표 완료!`);

		// 모달 닫기
		closeModal();
	};

	const handleIdolSelect = (id) => {
		setSelectedIdolId(id);
	};

	return (
		<form onSubmit={handleVote} css={ModalWrapper}>
			{/* 스크롤 가능한 아이돌 리스트 */}
			<div css={IdolList}>
				<ul>
					{idols.map((idol, index) => (
						<li key={idol.id} css={IdolItem}>
							{/* 라디오 버튼 감싸기 */}
							<RadioButton
								value={idol.id}
								checked={selectedIdolId === idol.id}
								onChange={handleIdolSelect}
								className="vote"
							>
								<div css={RadioContent}>
									<Circle
										size="50px"
										imageUrl={idol.profilePicture}
										alt={idol.name}
										loading="lazy"
										decoding="async"
									/>
									<div css={IdolInfo}>
										<span className="rank">{index + 1}</span>
										<span className="group">{idol.group}</span>
										<span className="artist-name">{idol.name}</span>
									</div>
								</div>
							</RadioButton>
						</li>
					))}
				</ul>
			</div>

			<Button type="submit" size="vote-lg">
				투표하기
			</Button>

			<p css={CreditInfo}>
				투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
			</p>
		</form>
	);
}
