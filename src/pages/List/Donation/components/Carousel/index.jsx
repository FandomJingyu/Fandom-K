/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import btnLeft from "/images/btn-donation-arrow-left.svg";
import btnRight from "/images/btn-donation-arrow-right.svg";
import {
	donationPageNation,
	pageNationLeft,
	pageNationRight,
} from "../../Donation.style";
import { sliderTrack, sliderViewport } from "./Carousel.style";

/**
 * 캐러셀(슬라이더) 컴포넌트
 *
 * @component
 * @param {Array<Object>} props.items - 렌더링할 아이템 배열
 * @param {number} [props.visibleCount=4] - 한 번에 보여지는 아이템 개수
 * @param {number} [props.step=4] - 좌우 이동 시 한 번에 이동할 아이템 개수
 * @param {(item: Object) => React.ReactNode} props.renderItem - 각 아이템을 렌더링할 함수
 */
function Carousel({ items, visibleCount = 4, step = 4, renderItem }) {
	const [startIndex, setStartIndex] = useState(0);

	// 다음 슬라이드로 이동
	const handleNext = () => {
		if (startIndex + visibleCount < items.length) {
			setStartIndex((prev) => prev + step);
		}
	};

	// 이전 슬라이드로 이동
	const handlePrev = () => {
		if (startIndex - step >= 0) {
			setStartIndex((prev) => prev - step);
		}
	};

	return (
		<div css={donationPageNation}>
			{startIndex > 0 && (
				<button type="button" css={pageNationLeft} onClick={handlePrev}>
					<img src={btnLeft} alt="이전" />
				</button>
			)}

			<div css={sliderViewport}>
				<div css={sliderTrack(startIndex, visibleCount)}>
					{items.map((item) => (
						<div key={item.id}>{renderItem(item)}</div>
					))}
				</div>
			</div>

			{startIndex + visibleCount < items.length && (
				<button type="button" css={pageNationRight} onClick={handleNext}>
					<img src={btnRight} alt="다음" />
				</button>
			)}
		</div>
	);
}

export default Carousel;
