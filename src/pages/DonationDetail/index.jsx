import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { donationsAPI } from "../../apis/donationsAPI";
import DonationDetailInfo from "./components/DonationDetailInfo";
import DonationDetailText from "./components/DonationDetailText";
/** @jsxImportSource @emotion/react */

export default function DonationDetail() {
	const { id } = useParams();
	const [donation, setDonation] = useState(null);
	const [loading, setLoading] = useState(true);

	const getDonation = useCallback(async () => {
		try {
			const response = await donationsAPI.getDonations();
			if (response) {
				const foundDonation = response.list.find(
					(item) => item.id === Number.parseInt(id) || item.id === id,
				);
				setDonation(foundDonation || null);
				setLoading(false);
			}
		} catch (error) {
			console.error("후원을 불러오는데 실패했습니다.", error);
		} finally {
			setLoading(false);
		}
	}, [id]);

	useEffect(() => {
		getDonation();
	}, [getDonation]);

	return (
		<div className="mainGrid" css={DonationDetailStyle}>
			{loading ? (
				<div>로딩중...</div>
			) : (
				<>
					<div css={DonationDetailTop}>
						<h2>
							{donation.idol.name} <span>({donation.idol.group})</span>
						</h2>
						<div>
							<p>{donation.subtitle}&nbsp;-&nbsp;</p>
							<p>{donation.title}</p>
						</div>
					</div>
					<div css={DonationDetailContent}>
						<div className="contentArea">
							<div className="profile">
								<img
									src={donation.idol.profilePicture}
									alt={donation.idol.name}
								/>
							</div>
							<DonationDetailText
								donation={donation}
								idol={donation.idol}
								loading={loading}
							/>
						</div>
						<div className="infoArea">
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
`;

const DonationDetailTop = css`
  text-align: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 48px;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    font-size: 30px;
  }
`;

const DonationDetailContent = css`
  position: relative;
  height: 100%;
  margin-top: 100px;
  display: flex;
  gap: 100px;
  .contentArea {
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
  }
  .infoArea {
    flex: 1;
  }
`;
