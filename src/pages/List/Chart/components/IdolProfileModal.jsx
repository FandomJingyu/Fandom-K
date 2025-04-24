/** @jsxImportSource @emotion/react */
import React from "react";
import Circle from "../../../../components/Circle";
import Modal from "../../../../components/Modal";
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
} from "./IdolProfileModal.styles";

const IdolProfileModal = ({ idol, onClose }) => {
	if (!idol) return null;

	return (
		<Modal isOpen={!!idol} onClose={onClose} type="default">
			<Profile>
				<ProfileWrapper>
					<CloseButton onClick={onClose}>
						<img src="/images/btn-modal-close.png" alt="닫기" />
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
