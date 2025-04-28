import {
	buttonSizeMobile,
	buttonSizes,
	buttonVariants,
} from "./Button.styles.js";
import { getButtonStyles } from "./Button.styles.js";

/** @jsxImportSource @emotion/react */

const Button = ({
	type = "button",
	size = "donate-lg",
	variant = "primary",
	disabled = false,
	fullWidth = false,
	onClick,
	children,
}) => {
	const currentSize = buttonSizes[size];
	const currentVariant = buttonVariants[variant];
	const mobileSize = buttonSizeMobile[size];

	return (
		<>
			<button
				type={type}
				css={getButtonStyles(
					currentSize,
					currentVariant,
					disabled,
					mobileSize,
					fullWidth,
				)}
				disabled={disabled}
				onClick={onClick}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
