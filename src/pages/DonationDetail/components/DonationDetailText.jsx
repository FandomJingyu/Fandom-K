import withPostPosition from "@/utils/postPosition";
import { css } from "@emotion/react";

/** @jsxImportSource @emotion/react */
export default function DonationDetail({ donation, loading }) {
	const { idol, targetDonation, deadline, subtitle, title } = donation;

	const idolWithGa = idol ? withPostPosition(idol.name, "이가") : "";
	const idolWithEun = idol ? withPostPosition(idol.name, "은는") : "";
	const idolWithLaneun = idol ? withPostPosition(idol.name, "라는이라는") : "";
	const donationWithEul = donation
		? withPostPosition(donation.subtitle, "을를")
		: "";
	return (
		<div className="text" css={DonationDetailTextStyle}>
			{loading ? (
				<div>로딩중...</div>
			) : (
				<>
					<dl>
						<dt>
							✨💖 역.대.급. 사건 발생! <br />
							{idol.name}({idol.group}) 데뷔 1주년, 합정역에 {idol.name} 강림
							💖✨
						</dt>
						<dd>
							{idolWithGa} 뭐다? 존재 자체가 명절임 😭
							<br />
							이건 그냥… 🎉 국가공휴일 지정 가야 돼 🎉 <br />
							🕊️ {idolWithGa} 강림하던 그 순간 세상의 조도는 조절 당했고 우리
							눈은 그녀만을 트래킹하기 시작했다 👁️💫
							<br />
							그날 이후 우린 알게 되었죠. <br />🧠 "아… {idolWithEun} 그냥
							아이돌이 아니라 종교다…"
							<br />
							<br />
							🪩무대 위에선 카리스마 풀충전 <br />
							🐣팬들 앞에선 애교 떡칠
							<br />
							갭차이 보고 진짜 의자에서 슬라이드했잖아요… 의자야 미안해 😭
						</dd>
					</dl>
					<dl>
						<dt>
							🧨 이렇게 존예로운 날 그냥 넘길 수 있냐고! <br />🎉 우린{" "}
							{idol.name}의 1주년을 제대로, 작정하고, 뽝! 터지게 축하할 거예요
						</dt>
						<dd>
							📍{donationWithEul} {idol.name}존으로 물들인다? → ㄹㅇ 가능 📺
							초대형 디지털 광고
							<br />+ 팬들의 한땀한땀 축하 메시지! 👀 지나가는 사람들 전부
							<br />
							“누구세요...? 저 사람 왜 이렇게 예뻐요...?” 자동 입덕 예약 👑
						</dd>
					</dl>
					<dl>
						<dt>📢후원정보 대방출🔥</dt>
						<dd>
							🔹 목표 금액 : {targetDonation.toLocaleString()}원
							<br />🔹 후원 기간 : ~ {deadline.split("T")[0]}
							<br />🔹 후원 메시지 : {idol.name} 존예해요!
						</dd>
					</dl>
					<dl>
						<dt>💝후원 특전도 FLEX 간다!</dt>
						<dd>
							📸 광고 인증샷—"이 광고 내가 만들었잖아" 가능 <br />🎀 한정판{" "}
							{idol.name}
							굿즈—포토카드, 슬로건 등 쏜다! <br />📜 후원자 명단 광고에 박제
							(닉네임 숨기고 싶은 사람 미리 말해줘요!)
						</dd>
					</dl>
					<dl>
						<dt>⚡{idol.name}의 1년 = 우리가 만든 기적 ⚡</dt>
						<dd>
							단순한 시간이 아니라 <br />🌟{idolWithLaneun} 이름 아래, 우리가
							함께한 서사집🌟
							<br />
							<br />이 아름다운 서포트… 함께해주실 거죠? <br />
							💖진짜 {idol.name}좋아하면 손모으고 후원하러 가자💖
						</dd>
					</dl>
					<ul>
						<li>#{idol.name}</li>
						<li>#{idol.name}_굿즈</li>
						<li>#{idol.group}</li>
						<li>#{idol.group}_조공</li>
						<li>
							#{subtitle}_{idol.name}
						</li>
						<li>#{subtitle}</li>
						<li>#{title}</li>
					</ul>
				</>
			)}
		</div>
	);
}

const DonationDetailTextStyle = css`
  margin-top: 100px;
  dl {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 30px;
  }
  dt {
    font-size: 22px;
    margin-bottom: 10px;
  }
  ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      font-size: 16px;
      padding: 5px 10px;
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      color: #fff;
    }
  }
  @media all and (max-width: 768px) {
    margin-top: calc(84vw + 50px);
    dl {
      font-size: 2.34vw;
      margin-bottom: 3.91vw;
    }
    dt {
      font-size: 2.86vw;
      margin-bottom: 1.3vw;
    }
    ul {
      gap: 1.3vw;
      margin-bottom: 3.91vw;
      li {
        font-size: 2.08vw;
        padding: 0.65vw 1.3vw;
        border-radius: 0.65vw;
      }
    }
  }
  @media all and (max-width: 425px) {
    margin-top: 125.65vw;
		 dl {
      font-size: 3.53vw;
      margin-bottom: 9.41vw;
    }
    dt {
      font-size: 4.24vw;
      margin-bottom: 1.88vw;
    }
    ul {
      gap: 2.35vw;
      li {
        font-size: 2.82vw;
        padding: 1.3vw 2.6vw;
        border-radius: 1.3vw;
      }
    }
  }
`;
