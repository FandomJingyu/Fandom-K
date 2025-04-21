import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Portal 컴포넌트
 */
const Portal = ({ children, targetElement }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted || !targetElement) {
		return null;
	}

	return createPortal(children, targetElement);
};

export default Portal;
