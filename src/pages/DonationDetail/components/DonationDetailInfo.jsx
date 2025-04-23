export default function DonationDetailInfo() {
	return (
		<form className="infoAreaScroll">
			<div className="infoAreaScrollItem">
				<span>모인 금액</span>
				<p>
					<strong>100,000</strong> /&nbsp;100,000 크레딧
				</p>
			</div>
			<div className="infoAreaScrollItem">
				<span>남은 시간</span>
				<p>
					<strong>110</strong>&nbsp;Days <strong>10</strong>&nbsp;:&nbsp;
					<strong>10</strong>&nbsp;:&nbsp;<strong>52</strong>
				</p>
				<p>
					모집 기간 : <span>2025.08.11</span>
				</p>
			</div>
			<div className="infoAreaScrollItem">
				<span>
					내 크레딧 : 10,000 <button type="button">+</button>
				</span>
				<div className="input">
					<input type="text" name="" id="" placeholder="크레딧 입력" />
				</div>
				<ul>
					<li>
						<button type="button">+100</button>
					</li>
					<li>
						<button type="button">+500</button>
					</li>
					<li>
						<button type="button">+1,000</button>
					</li>
					<li>
						<button type="button">전액</button>
					</li>
				</ul>
			</div>
			<Button
				css={DonationDetailButton}
				type="button"
				size="donate-lg"
				variant="primary"
			>
				후원하기
			</Button>
		</form>
	);
}
