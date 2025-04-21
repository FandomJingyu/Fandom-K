import React, { useEffect, useState, useMemo } from "react";
import { idolsAPI } from "../../../apis/idolsAPI";
import Button from "../../../components/Button/Button";
import Circle from "../../../components/Circle";
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
	Votes,
} from "./Chart.styles";

const ITEMS_PER_PAGE = 10;

const Chart = () => {
	const [idols, setIdols] = useState([]);
	const [activeTab, setActiveTab] = useState("female");
	const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchIdols = async () => {
			try {
				setLoading(true);
				const res = await idolsAPI.getIdols(100);
				const allIdols = res.list;

				setIdols(allIdols);
			} catch (e) {
				console.error("아이돌 불러오기 실패", e);
			} finally {
				setLoading(false);
			}
		};

		fetchIdols();
	}, []);

	const femaleIdols = useMemo(
		() => idols.filter((i) => i.gender === "female"),
		[idols],
	);
	const maleIdols = useMemo(
		() => idols.filter((i) => i.gender === "male"),
		[idols],
	);
	const isFemale = activeTab === "female";
	const visibleList = isFemale
		? femaleIdols.slice(0, visibleCount)
		: maleIdols.slice(0, visibleCount);

	const leftColumnList = visibleList.filter((_, index) => index % 2 === 0);
	const rightColumnList = visibleList.filter((_, index) => index % 2 !== 0);

	const handleMore = () => {
		setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
	};

	return (
		<ChartContainer>
			<ChartHeaderWrap>
				<ChartTitle>이달의 차트</ChartTitle>
				<ChartButtonWrap>
					<Button size="vote-chart">차트 투표하기</Button>
				</ChartButtonWrap>
			</ChartHeaderWrap>

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
											<span className="rank">{index * 2 + 1}</span>
											<span className="group">{idol.group}</span>
											<span className="artist-name">{idol.name}</span>
										</RankAndName>
									</ProfileInfo>
									<Votes>{idol.totalVotes}</Votes>
								</ListItem>
							))}
						</ChartColumn>

						<ChartColumn>
							{rightColumnList.map((idol, index) => (
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
											<span className="rank">{index * 2 + 2}</span>
											<span className="group">{idol.group}</span>
											<span className="artist-name">{idol.name}</span>
										</RankAndName>
									</ProfileInfo>
									<Votes>{idol.totalVotes}</Votes>
								</ListItem>
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
