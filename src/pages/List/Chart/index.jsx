import React, { useEffect, useState, useMemo } from "react";
import chartImg from "../../../../public/images/Chart.png";
import { idolsAPI } from "../../../apis/idolsAPI";
import Button from "../../../components/Button/Button";
import Circle from "../../../components/Circle";
import Modal from "../../../components/Modal";
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
import ChartVoteModal from "./components/ChartVoteModal";

const ITEMS_PER_PAGE = 10;
const TABLET_ITEMS_PER_PAGE = 5;
const MOBILE_ITEMS_PER_PAGE = 5;

const getIsMobile = () => window.matchMedia("(max-width: 425px)").matches;
const getIsTablet = () =>
	window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches;

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

	useEffect(() => {
		const handleResize = () => {
			if (getIsMobile()) setVisibleCount(MOBILE_ITEMS_PER_PAGE);
			else if (getIsTablet()) setVisibleCount(TABLET_ITEMS_PER_PAGE);
			else setVisibleCount(ITEMS_PER_PAGE);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
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
	const visibleList = (isFemale ? femaleIdols : maleIdols).slice(
		0,
		visibleCount,
	);

	const handleMore = () => {
		if (getIsMobile()) setVisibleCount((prev) => prev + MOBILE_ITEMS_PER_PAGE);
		else if (getIsTablet())
			setVisibleCount((prev) => prev + TABLET_ITEMS_PER_PAGE);
		else setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
	};

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
					<span className="rank">{index + 1}</span>
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
						setActiveTab("female");
						if (getIsMobile()) setVisibleCount(MOBILE_ITEMS_PER_PAGE);
						else if (getIsTablet()) setVisibleCount(TABLET_ITEMS_PER_PAGE);
						else setVisibleCount(ITEMS_PER_PAGE);
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
						setActiveTab("male");
						if (getIsMobile()) setVisibleCount(MOBILE_ITEMS_PER_PAGE);
						else if (getIsTablet()) setVisibleCount(TABLET_ITEMS_PER_PAGE);
						else setVisibleCount(ITEMS_PER_PAGE);
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
