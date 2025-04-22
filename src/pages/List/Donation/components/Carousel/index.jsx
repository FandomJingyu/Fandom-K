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

function Carousel({ items, visibleCount = 4, step = 4, renderItem }) {
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		if (startIndex + visibleCount < items.length) {
			setStartIndex((prev) => prev + step);
		}
	};

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
