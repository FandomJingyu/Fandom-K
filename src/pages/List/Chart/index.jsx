import React, { useEffect, useState, useMemo } from "react";
import { idolsAPI } from "../../../apis/idolsAPI";
import Button from "../../../components/Button/Button";
import Circle from "../../../components/Circle";
import Modal from "../../../components/Modal";

import {
	ChartButtonWrap,
	ChartColumn,
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
import ChartVoteModal from "./components/ChartVoteModal";

import chartImg from "../../../../public/images/Chart.png";

const ITEMS_PER_PAGE = 10;

const Chart = () => {
	const [idols, setIdols] = useState([]);
	const [activeTab, setActiveTab] = useState("female");
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	useEffect(() => {
		const fetchIdols = async () => {
			try {
				setLoading(true);
				const res = await idolsAPI.getIdols(100);
				setIdols(res.list);
			} catch (e) {
				console.error("아이돌 불러오기 실패", e);
			} finally {
				setLoading(false);
			}
		};
		fetchIdols();
	}, []);

	const femaleIdols = useMemo(() => {
		return idols
			.filter((i) => i.gender === "female")
			.sort((a, b) => b.totalVotes - a.totalVotes);
	}, [idols]);

	const maleIdols = useMemo(() => {
		return idols
			.filter((i) => i.gender === "male")
			.sort((a, b) => b.totalVotes - a.totalVotes);
	}, [idols]);

	const isFemale = activeTab === "female";
	const visibleList = isFemale
		? femaleIdols.slice(0, visibleCount)
		: maleIdols.slice(0, visibleCount);

	const currentIdolList = isFemale ? femaleIdols : maleIdols;
	const leftColumnList = visibleList.filter((_, index) => index % 2 === 0);
	const rightColumnList = visibleList.filter((_, index) => index % 2 !== 0);

	const handleMore = () => setVisibleCount((prev) => prev + ITEMS_PER_PAGE);

	// IdolItem 컴포넌트를 별도로 분리하여 중복을 제거
	const IdolItem = ({ idol, index }) => (
		<ListItem key={idol.id}>
			<ProfileInfo>
				<Circle
					size="70px"
					imageUrl={idol.profilePicture}
					alt={idol.name}
					loading={index < 4 ? "eager" : "lazy"}
					decoding="async"
				/>
				<RankAndName>
					<span className="rank">{index + 1}</span> {/* 1-based index */}
					<span className="group">{idol.group}</span>
					<span className="artist-name">{idol.name}</span>
				</RankAndName>
			</ProfileInfo>
			<Votes>{idol.totalVotes}</Votes>
		</ListItem>
	);

	return (
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

			{/* 모달 내부에 선택된 크레딧 값을 업데이트할 함수 전달 */}
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				type={activeTab === "female" ? "voteWoman" : "voteMan"} // activeTab에 따라 type 설정
			>
				<ChartVoteModal
					gender={activeTab}
					idols={currentIdolList} // idols를 전달
					setIdols={setIdols} // setIdols는 하나의 상태 업데이트 함수 전달
					closeModal={closeModal}
				/>
			</Modal>

			<ChartIdol style={{ marginBottom: "20px" }}>
				<ChartIdolLeft
					onClick={() => {
						setActiveTab("female");
						setVisibleCount(ITEMS_PER_PAGE);
					}}
					style={{
						cursor: "pointer",
						fontWeight: isFemale ? 700 : 400,
						backgroundColor: isFemale ? "#ffffff1a" : "transparent",
					}}
				>
					이달의 여자 아이돌
				</ChartIdolLeft>
				<ChartIdolRight
					onClick={() => {
						setActiveTab("male");
						setVisibleCount(ITEMS_PER_PAGE);
					}}
					style={{
						cursor: "pointer",
						fontWeight: !isFemale ? 700 : 400,
						backgroundColor: !isFemale ? "#ffffff1a" : "transparent",
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
						<ChartColumn>
							{leftColumnList.map((idol, index) => (
								<IdolItem key={idol.id} idol={idol} index={index * 2} /> // 인덱스를 2배로 변경
							))}
						</ChartColumn>

						<ChartColumn>
							{rightColumnList.map((idol, index) => (
								<IdolItem key={idol.id} idol={idol} index={index * 2 + 1} /> // 인덱스를 2배 + 1로 변경
							))}
						</ChartColumn>
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
	);
};

export default Chart;
