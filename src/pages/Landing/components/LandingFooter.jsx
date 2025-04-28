import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

export default function LandingFooter() {
	const btnRef = useRef(null);

	useEffect(() => {
		btnRef.current?.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});

		return () => {
			btnRef.current?.removeEventListener("click");
		};
	}, []);

	return (
		<StyledLandingFooter>
			<div className="landingGrid">
				<div className="footer-logo">
					<img src="/images/landing/logo_f.svg" alt="Fandom-K" />
					<p>All your K-pop love, in one place</p>
				</div>
				<div className="footer-copy">
					<button type="button" className="top-btn">
						<img src="/images/landing/top_btn.png" alt="top" />
					</button>
					<p className="copy">&copy; FandomJingyu.2025 All rights reserved.</p>
				</div>
			</div>
		</StyledLandingFooter>
	);
}

const StyledLandingFooter = styled.div`
  padding-block: 52px;
  .landingGrid {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      p {
        color: #666;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }
  .footer-logo {
    gap: 20px;
    align-items: flex-start;
    img {
      height: 30px;
    }
  }
  .footer-copy {
    justify-content: space-between;
    align-items: flex-end;
  }
  .top-btn {
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    img {
      width: 100%;
    }
  }

  @media all and (max-width: 768px) {
    padding-block: 30px;
    .landingGrid {
      flex-direction: column;
      justify-content: flex-start;
      > div {
        p {
          font-size: 16px;
        }
      }
      .footer-copy {
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
    .top-btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  @media all and (max-width: 425px) {
    padding-block: 6.13vw;
    .landingGrid {
      > div {
        p {
          font-size: 3.2vw;
        }
      }
      .footer-logo {
        gap: 5.33vw;
        img {
          width: 31.47vw;
        }
      }
    }
    .top-btn {
      width: 8.53vw;
      height: 8.53vw;
    }
  }
`;
