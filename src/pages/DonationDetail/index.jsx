import LoadingError from "@/components/Error";
import { useDonations } from "@/hooks/useDonation";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonationDetailInfo from "./components/DonationDetailInfo";
import DonationDetailSkeleton from "./components/DonationDetailSkeleton";
import DonationDetailText from "./components/DonationDetailText";
/** @jsxImportSource @emotion/react */

export default function DonationDetail() {
	const { id } = useParams();
	const {
		donations,
		loading: donationsLoading,
		error: donationsError,
	} = useDonations();
	const [donation, setDonation] = useState(null);
	const [randomEmoji, setRandomEmoji] = useState("");

	useEffect(() => {
		if (!donationsLoading && donations.length > 0) {
			const foundDonation = donations.find(
				(item) => item.id === Number.parseInt(id) || item.id === id,
			);
			setDonation(foundDonation || null);
		}
	}, [donations, donationsLoading, id]);

	useEffect(() => {
		const emojiKeys = Object.keys(emojis);
		const selectedEmoji =
			emojis[emojiKeys[Math.floor(Math.random() * emojiKeys.length)]];
		setRandomEmoji(selectedEmoji);
	}, []);

	const emojis = {
		heart: "💖",
		star: "⭐",
		sparkle: "✨",
		fire: "🔥",
		sparkles: "🎆",
		party: "🎉",
		gift: "💝",
		ribbon: "🎀",
	};

	const isLoading =
		donationsLoading || (!donationsError && !donation && donations.length > 0);
	const hasError =
		donationsError || (!donationsLoading && !donation && donations.length > 0);

	return (
		<div className="mainGrid" css={DonationDetailStyle}>
			{isLoading ? (
				<DonationDetailSkeleton />
			) : hasError ? (
				<LoadingError />
			) : donation ? (
				<>
					<div css={DonationDetailTop}>
						<h2>
							{randomEmoji}
							{donation.idol.name} <span>({donation.idol.group})</span>
							{randomEmoji}
						</h2>
						<p>
							{donation.subtitle}&nbsp;-&nbsp;{donation.title}
						</p>
					</div>
					<div css={DonationDetailContent}>
						<div css={DonationDetailContentArea}>
							<div className="profile">
								<img
									src={donation.idol.profilePicture}
									alt={donation.idol.name}
								/>
							</div>
							<DonationDetailText donation={donation} />
						</div>
						<div css={DonationDetailInfoArea}>
							<DonationDetailInfo donation={donation} />
						</div>
					</div>
				</>
			) : (
				<LoadingError message="해당 후원 정보를 찾을 수 없습니다." />
			)}
		</div>
	);
}

const DonationDetailStyle = css`
  padding-block: 80px;
  color: #fff;
  &::after {
    content: '';
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 58.9%, #000 100%);
  }
  @media all and (max-width: 1300px) {
    padding-block: 60px;
    &::after {
      height: 80px;
    }
  }
  @media all and (max-width: 425px) {
    padding-block: 9.41vw;
  }
  
`;

const DonationDetailTop = css`
  text-align: center;
  h2 {
    font-size: 48px;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-weight: bold;
    font-size: 30px;
    line-height: 1.2;
  }
  @media all and (max-width: 1300px) {
    h2 {
      font-size: 38px;
    }
    p {
      font-size: 24px;
    }
  }
  @media all and (max-width: 425px) {
    h2 {
      font-size: 7.06vw;
      margin-bottom: 4.71vw;
    }
    p {
      font-size: 5.18vw;
    }
  }
`;

const DonationDetailContent = css`
  position: relative;
  height: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 1300px) {
    justify-content: center;
    gap: 40px;
    margin-top: 60px;
  }
  @media all and (max-width: 1024px) {
    gap: 4vw;
  }
  @media all and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
  @media all and (max-width: 425px) {
    margin-top: 9.41vw;
  }
`;

const DonationDetailContentArea = css`
  width: 600px;
  flex: none;
  .profile {
    width: 100%;
    height: 600px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  @media all and (max-width: 1300px) {
    width: auto;
    flex: 1;
    .profile {
      height: auto;
      aspect-ratio: 1/1;
    }
  }
`;

const DonationDetailInfoArea = css`
  /* flex: 1; */
  flex: none;
  width: 500px;
  @media all and (max-width: 1300px) {
    width: 40%;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    position: absolute;
    top: 100vw;
    left: 0;
  }
  @media all and (max-width: 425px) {
    top: 94vw;
  }
`;
