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
	const currentVariant = buttonVariants[variant];
	const mobileSize = buttonSizeMobile[size];

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
