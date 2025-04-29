import Button from "@/components/Button/Button";
import Circle from "@/components/Circle";
import LoadingError from "@/components/Error";
import Modal from "@/components/Modal";
import { useChart } from "@/hooks/useChart";
import ChartVoteModal from "@/pages/List/Chart/components/ChartVoteModal";
import IdolProfileModal from "@/pages/List/Chart/components/IdolProfileModal";
import { idolProfiles } from "@/pages/List/Chart/components/IdolProfiles";
import React, { useState } from "react";

import {
	ChartButtonWrap,
	ChartContainer,
	ChartHeaderWrap,
	ChartIdol,
	ChartIdolLeft,
	ChartIdolRight,
	ChartList,
	ChartTitle,
	ListItem,
	MoreButton,
	Overlay,
	ProfileInfo,
	RankAndName,
	SkeletonListItem,
	SkeletonName,
	SkeletonProfile,
	SkeletonRankAndName,
	SkeletonVotes,
	VoteChart,
	Votes,
} from "@/pages/List/Chart/Chart.styles";

const Chart = () => {
	const [activeTab, setActiveTab] = useState("female");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedIdol, setSelectedIdol] = useState(null);

	const {
		loading,
		error,
		femaleIdols,
		maleIdols,
		setIdols,
		visibleCount,
		setVisibleCount,
	} = useChart();

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const isFemale = activeTab === "female";
	const visibleList = (isFemale ? femaleIdols : maleIdols).slice(
		0,
		visibleCount,
	);

	const handleMore = () => {
		if (window.matchMedia("(max-width: 425px)").matches) {
			setVisibleCount((prev) => prev + 5);
		} else if (
			window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches
		) {
			setVisibleCount((prev) => prev + 5);
		} else {
			setVisibleCount((prev) => prev + 10);
		}
	};

	const handleIdolClick = (idol) => {
		const mockData = idolProfiles[idol.name];
		if (mockData) {
			setSelectedIdol({ ...idol, ...mockData });
		} else {
			setSelectedIdol(idol);
		}
	};

	const IdolItem = ({ idol, index }) => (
		<ListItem
			key={idol.id}
			onClick={() => handleIdolClick(idol)}
			style={{ cursor: "pointer" }}
		>
			<ProfileInfo>
				<Circle
					size="70px"
					imageUrl={idol.profilePicture}
					alt={idol.name}
					loading={index < 4 ? "eager" : "lazy"}
					decoding="async"
				/>
				<RankAndName>
					<span className="rank">{index + 1}</span>
					<span className="group">{idol.group}</span>
					<span className="artist-name">{idol.name}</span>
				</RankAndName>
			</ProfileInfo>
			<Votes>{idol.totalVotes}</Votes>
		</ListItem>
	);

	// ✨ for문으로 스켈레톤 10개 생성하는 함수
	const renderSkeletonItems = () => {
		const items = [];
		for (let i = 0; i < 10; i++) {
			items.push(
				<SkeletonListItem key={`skeleton-${i}`}>
					<ProfileInfo>
						<SkeletonProfile />
						<SkeletonRankAndName>
							<SkeletonName />
						</SkeletonRankAndName>
					</ProfileInfo>
					<SkeletonVotes />
				</SkeletonListItem>,
			);
		}
		return items;
	};

	return (
		<>
			<ChartContainer>
				<ChartHeaderWrap>
					<ChartTitle>이달의 차트</ChartTitle>
					<ChartButtonWrap>
						<Button size="vote-chart" onClick={openModal}>
							<VoteChart>
								<img src="/images/Chart.png" alt="차트 투표 이미지" />
								차트 투표하기
							</VoteChart>
						</Button>
					</ChartButtonWrap>
				</ChartHeaderWrap>

				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					type={isFemale ? "voteWoman" : "voteMan"}
					isMobileFullScreen={true}
				>
					<ChartVoteModal
						gender={activeTab}
						idols={isFemale ? femaleIdols : maleIdols}
						setIdols={setIdols}
						closeModal={closeModal}
					/>
				</Modal>

				<ChartIdol style={{ marginBottom: "20px" }}>
					<ChartIdolLeft
						onClick={() => {
							if (!isFemale) {
								setActiveTab("female");
								if (window.matchMedia("(max-width: 425px)").matches) {
									setVisibleCount(5);
								} else if (
									window.matchMedia("(min-width: 426px) and (max-width: 768px)")
										.matches
								) {
									setVisibleCount(5);
								} else {
									setVisibleCount(10);
								}
							}
						}}
						style={{
							cursor: "pointer",
							fontWeight: isFemale ? 700 : 400,
							backgroundColor: isFemale ? "#ffffff1a" : "transparent",
							borderBottom: isFemale ? "1px solid #ffffff" : "none",
							transition: "all 0.3s ease",
						}}
					>
						이달의 여자 아이돌
					</ChartIdolLeft>

					<ChartIdolRight
						onClick={() => {
							if (isFemale) {
								setActiveTab("male");
								if (window.matchMedia("(max-width: 425px)").matches) {
									setVisibleCount(5);
								} else if (
									window.matchMedia("(min-width: 426px) and (max-width: 768px)")
										.matches
								) {
									setVisibleCount(5);
								} else {
									setVisibleCount(10);
								}
							}
						}}
						style={{
							cursor: "pointer",
							fontWeight: !isFemale ? 700 : 400,
							backgroundColor: !isFemale ? "#ffffff1a" : "transparent",
							borderBottom: !isFemale ? "1px solid #ffffff" : "none",
							transition: "all 0.3s ease",
						}}
					>
						이달의 남자 아이돌
					</ChartIdolRight>
				</ChartIdol>

				{error ? (
					<LoadingError error="chart" />
				) : loading ? (
					<ChartList>{renderSkeletonItems()}</ChartList>
				) : (
					<>
						<ChartList>
							{visibleList.map((idol, index) => (
								<IdolItem key={idol.id} idol={idol} index={index} />
							))}
						</ChartList>

						{visibleList.length <
							(isFemale ? femaleIdols.length : maleIdols.length) && (
							<MoreButton>
								<Button size="load-more" onClick={handleMore}>
									더 보기
								</Button>
							</MoreButton>
						)}
					</>
				)}
			</ChartContainer>

			{selectedIdol && (
				<Overlay onClick={() => setSelectedIdol(null)}>
					<button
						type="button"
						onClick={(e) => e.stopPropagation()}
						style={{ all: "unset", cursor: "pointer" }}
					>
						<IdolProfileModal
							idol={selectedIdol}
							onClose={() => setSelectedIdol(null)}
						/>
					</button>
				</Overlay>
			)}
		</>
	);
};

export default Chart;
