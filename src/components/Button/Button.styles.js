import { css } from "@emotion/react";

//emotion 함수 사용으로 동적관리 가능

export const getButtonStyles = (
	currentSize,
	currentVariant,
	disabled,
	mobileSize,
	fullWidth = false, // 너비 제어
) => css`
    width: ${fullWidth ? "100%" : currentSize.width || "auto"};
    height: ${currentSize.height};
    font-size: ${currentSize.fontSize};
    background: ${disabled ? "var(--gray-828282)" : currentVariant.background};
    color: ${disabled ? "var( --white-F7F7F8)" : currentVariant.color};    
    border: ${disabled ? "none" : currentVariant?.border || "none"};    
    border-radius: ${currentSize.borderradius || "3px"};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease; // 트랜지션 효과
    // 호버
    &:hover {
        opacity: ${disabled ? 1 : 0.85};
        transform: ${disabled ? "none" : "scale(1.02)"};
    }
    // 반응형 사이즈
    @media (max-width: 426px) {
    width: ${fullWidth ? "100%" : mobileSize?.width || currentSize.width};
    height: ${mobileSize?.height || currentSize.height};
    font-size: ${mobileSize?.fontSize || currentSize.fontSize};
    border-radius: ${mobileSize?.borderradius || currentSize.borderradius || "3px"};
    }
`;

const buttonSizes = {
	// 각 상황에 맞는 사이즈 사용
	"start-now": { width: "295px", height: "42px", fontSize: "14px" },
	"donate-lg": { height: "42px", fontSize: "14px" },
	"donate-md": { width: "234px", height: "40px", fontSize: "13px" },
	"donate-sm": { width: "142px", height: "31px", fontSize: "13px" },

	"vote-lg": { height: "42px", fontSize: "14px" },
	"vote-md": { height: "42px", fontSize: "14px" },

	check: { height: "42px", fontSize: "14px" },

	recharge: { height: "42px", fontSize: "14px" },

	"vote-chart": { width: "128px", height: "32px", fontSize: "13px" },

	"load-more": { width: "326px", height: "42px", fontSize: "14px" },

	add: {
		width: "255px",
		height: "48px",
		fontSize: "16px",
		borderradius: "24px",
	},
};

// 줄어드는 버튼만 반응형 구현
const buttonSizeMobile = {
	"start-now": { width: "230px", height: "48px", fontSize: "14px" },
	"donate-md": { width: "142px", height: "31px", fontSize: "10px" },
	"vote-lg": { height: "42px", fontSize: "14px" },
};

// 색상
const buttonVariants = {
	primary: {
		background:
			"linear-gradient(90deg, var(--orange-F96D69), var(--pink-FE5493))",
		color: "var(--white-F7F7F8)",
	},
	dark: {
		background: "var(--white-F7F7F8-10)",
		color: "var(--white-F7F7F8)",
		border: "1px solid #F1EEF9CC",
	},
};

export { buttonSizes, buttonVariants, buttonSizeMobile };
