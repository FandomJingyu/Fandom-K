import Circle from "@/components/Circle";
import Modal from "@/components/Modal";
import {
	CircleContainer,
	CloseButton,
	DetailLabel,
	DetailValue,
	EnglishName,
	GroupLogo,
	Logo,
	Profile,
	ProfileDetail,
	ProfileHeader,
	ProfileInfo,
	ProfileName,
	ProfileWrapper,
	Role,
	Separator,
	SubInfo,
	VoteCount,
	VoteLabel,
	VoteSection,
} from "@/pages/List/Chart/components/IdolProfileModal.styles"; // ✨ styles 파일도 절대경로로 변경
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";

const IdolProfileModal = ({ idol, onClose }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 425);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!idol) return null;

	return (
		<Modal isOpen={!!idol} onClose={onClose} type="default">
			<Profile>
				<ProfileWrapper>
					<CloseButton onClick={onClose}>
						{isMobile ? (
							<img
								src="/icons/icon-arrow-left.svg"
								alt="뒤로가기"
								className="back"
							/>
						) : (
							<img
								src="/images/btn-modal-close.png"
								alt="닫기"
								className="close"
							/>
						)}
					</CloseButton>

					<ProfileHeader>
						<ProfileName>
							{idol.name}
							<GroupLogo src={idol.groupLogo} alt={`${idol.group} 로고`} />
						</ProfileName>
						<SubInfo>
							<EnglishName>{idol.englishName}</EnglishName>
							<Separator>·</Separator>
							<Role>가수</Role>
						</SubInfo>
					</ProfileHeader>

					<ProfileInfo>
						<CircleContainer>
							<Circle size="170px" imageUrl={idol.profilePicture} />
						</CircleContainer>
						<ProfileDetail>
							<DetailLabel>출생:</DetailLabel>
							<DetailValue>{idol.birth || "-"}</DetailValue>
							<DetailLabel>고향:</DetailLabel>
							<DetailValue>{idol.hometown || "-"}</DetailValue>
							<DetailLabel>취미:</DetailLabel>
							<DetailValue>{idol.hobby || "-"}</DetailValue>
							<DetailLabel>MBTI:</DetailLabel>
							<DetailValue>{idol.mbti || "-"}</DetailValue>
							<DetailLabel>그룹:</DetailLabel>
							<DetailValue>{idol.group}</DetailValue>
							<DetailLabel>소속사:</DetailLabel>
							<DetailValue>{idol.agency || "-"}</DetailValue>
						</ProfileDetail>
					</ProfileInfo>

					<VoteSection>
						<VoteLabel>투표수</VoteLabel>
						<VoteCount>{idol.totalVotes?.toLocaleString() || "0"}</VoteCount>
					</VoteSection>

					<Logo>
						{idol.instagram && (
							<a
								href={idol.instagram}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="/images/Instagram.png" alt="Instagram" />
							</a>
						)}
						{idol.fancam && (
							<a href={idol.fancam} target="_blank" rel="noopener noreferrer">
								<img src="/images/Youtube.png" alt="YouTube" />
							</a>
						)}
					</Logo>
				</ProfileWrapper>
			</Profile>
		</Modal>
	);
};

export default IdolProfileModal;
