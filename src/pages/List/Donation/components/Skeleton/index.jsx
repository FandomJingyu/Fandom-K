import {
	container,
	credit,
	dDay,
	description,
	footer,
	footerUp,
	img,
	mainTitle,
	progress,
	subTitle,
	text,
} from "./style/CardSkeleton.styles";
/** @jsxImportSource @emotion/react */
import { button, content, pageNation } from "./style/Skeleton.styles";

function CardSkeleton() {
	return (
		<article css={container}>
			<div css={img} />
			<div css={description}>
				<div css={text}>
					<div css={subTitle} />
					<div css={mainTitle} />
				</div>

				<div css={footer}>
					<div css={footerUp}>
						<div css={credit} />
						<div css={dDay} />
					</div>
					<div css={progress} />
				</div>
			</div>
		</article>
	);
}

function DonationSkeleton() {
	return (
		<section>
			<div css={pageNation}>
				<div css={content}>
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
				</div>
				<div css={button} />
			</div>
		</section>
	);
}

export default DonationSkeleton;
