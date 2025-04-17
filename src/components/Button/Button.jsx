import {
	buttonSizeMobile,
	buttonSizes,
	buttonVariants,
} from "./Button.styles.js";
import { getButtonStyles } from "./Button.styles.js";

/** @jsxImportSource @emotion/react */

const Button = ({
	size = "donate-lg",
	variant = "primary",
	disabled = false,
	onClick,
	children,
}) => {
	const currentSize = buttonSizes[size];
	const currentVariant = disabled
		? buttonVariants.disabled
		: buttonVariants[variant];
	const mobileSize = buttonSizeMobile[size];

	//onClick 함수 예시
	// const handleOnClick = () => {
	//     console.log(1)
	// }

	return (
		<div>
			<button
				type="button"
				css={getButtonStyles(currentSize, currentVariant, disabled, mobileSize)}
				disabled={disabled}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
