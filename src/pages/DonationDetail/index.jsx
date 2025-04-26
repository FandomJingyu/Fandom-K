import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { donationsAPI } from "../../apis/donationsAPI";
import LoadingError from "../../components/Error";
import DonationDetailInfo from "./components/DonationDetailInfo";
import DonationDetailSkeleton from "./components/DonationDetailSkeleton";
import DonationDetailText from "./components/DonationDetailText";
/** @jsxImportSource @emotion/react */

export default function DonationDetail() {
	const { id } = useParams();
	const [donation, setDonation] = useState(null);
	const [loading, setLoading] = useState(true);
	const [randomEmoji, setRandomEmoji] = useState("");
	const [error, setError] = useState(false);

	const getDonation = useCallback(async () => {
		try {
			const response = await donationsAPI.getDonations();
			if (response) {
				const foundDonation = response.list.find(
					(item) => item.id === Number.parseInt(id) || item.id === id,
				);
				setDonation(foundDonation || null);
			}
		} catch (error) {
			// 로딩 UI 잠시 유지
			setTimeout(() => {
				setError(true);
			}, 600); // 600초 정도 기다렸다가 에러 표시
		} finally {
			setLoading(false);
		}
	}, [id]);

	useEffect(() => {
		getDonation();
	}, [getDonation]);

	// 랜덤 이모지 - 초기 렌더링에서만 이모지를 선택
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

	return (
		<div className="mainGrid" css={DonationDetailStyle}>
			{loading ? (
				<DonationDetailSkeleton />
			) : error ? (
				<LoadingError />
			) : (
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
							<DonationDetailText donation={donation} loading={loading} />
						</div>
						<div css={DonationDetailInfoArea}>
							<DonationDetailInfo donation={donation} loading={loading} />
						</div>
					</div>
				</>
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
