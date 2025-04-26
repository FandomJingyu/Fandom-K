import Button from "@/components/Button/Button";
import Circle from "@/components/Circle";
import Modal from "@/components/Modal";
import styled from "@emotion/styled";
import React, { useState } from "react";
import chartImg from "/images/Chart.png";
import ChartVoteModal from "./components/ChartVoteModal";
import IdolProfileModal from "./components/IdolProfileModal";
import { idolProfiles } from "./components/IdolProfiles";
import useChart from "./components/hooks/useChart";

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
	ProfileInfo,
	RankAndName,
	VoteChart,
	Votes,
} from "./Chart.styles";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Chart = () => {
	const {
		idols,
		setIdols,
		activeTab,
		loading,
		visibleList,
		handleMore,
		handleTabChange,
		femaleIdols,
		maleIdols,
	} = useChart();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedIdol, setSelectedIdol] = useState(null);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

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

	return (
		<>
			<ChartContainer>
				<ChartHeaderWrap>
					<ChartTitle>이달의 차트</ChartTitle>
					<ChartButtonWrap>
						<Button size="vote-chart" onClick={openModal}>
							<VoteChart>
								<img src={chartImg} alt="차트 투표 이미지" />
								차트 투표하기
							</VoteChart>
						</Button>
					</ChartButtonWrap>
				</ChartHeaderWrap>

				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					type={activeTab === "female" ? "voteWoman" : "voteMan"}
					isMobileFullScreen={true}
				>
					<ChartVoteModal
						gender={activeTab}
						closeModal={closeModal}
						idols={activeTab === "female" ? femaleIdols : maleIdols}
						setIdols={setIdols}
					/>
				</Modal>

				<ChartIdol style={{ marginBottom: "20px" }}>
					<ChartIdolLeft
						onClick={() => handleTabChange("female")}
						style={{
							cursor: "pointer",
							fontWeight: activeTab === "female" ? 700 : 400,
							backgroundColor:
								activeTab === "female" ? "#ffffff1a" : "transparent",
							borderBottom:
								activeTab === "female" ? "1px solid #ffffff" : "none",
							transition: "all 0.3s ease",
						}}
					>
						이달의 여자 아이돌
					</ChartIdolLeft>
					<ChartIdolRight
						onClick={() => handleTabChange("male")}
						style={{
							cursor: "pointer",
							fontWeight: activeTab === "male" ? 700 : 400,
							backgroundColor:
								activeTab === "male" ? "#ffffff1a" : "transparent",
							borderBottom: activeTab === "male" ? "1px solid #ffffff" : "none",
							transition: "all 0.3s ease",
						}}
					>
						이달의 남자 아이돌
					</ChartIdolRight>
				</ChartIdol>

				{loading ? (
					<div style={{ color: "white", textAlign: "center" }}>
						불러오는 중...
					</div>
				) : (
					<>
						<ChartList>
							{visibleList.map((idol, index) => (
								<IdolItem key={idol.id} idol={idol} index={index} />
							))}
						</ChartList>

						{visibleList.length <
							(activeTab === "female"
								? femaleIdols.length
								: maleIdols.length) && (
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
