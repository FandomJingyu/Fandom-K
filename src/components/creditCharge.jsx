import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function CreditCharge() {
	const [credit, setCredit] = useState(0);

	useEffect(() => {
		setCredit(Number(36000).toLocaleString());
	}, []);

	return (
		<StyledCreditCharge>
			<div>
				<p>내 크레딧</p>
				<div className="credit">
					<img src="/icons/icon_credit.svg" alt="credit" />
					<span>{credit}</span>
				</div>
			</div>
			<button type="button">충전하기</button>
		</StyledCreditCharge>
	);
}

const StyledCreditCharge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 78px;
  height: 130px;
  border: 1px solid rgba(241, 238, 249, 0.8);
  border-radius: 8px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 400;
  }
  .credit {
    display: flex;
    align-items: center;
    gap: 4px;
    span {
      color: rgba(255, 255, 255, 0.87);
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
    }
  }
  button {
    color: var(--orange-F96D69);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
  }
`;
