import React, { useEffect, useState } from "react";
import Portal from "./Portal";
import createModalPortalManager from "./modalPortalManager";

const modalPortalManager = createModalPortalManager();

/**
 * Modal Portal 컴포넌트
 */
const ModalPortal = ({ children }) => {
	const [modalRoot, setModalRoot] = useState(null);

	useEffect(() => {
		const root = modalPortalManager.mountRoot();
		setModalRoot(root);

		return () => {
			modalPortalManager.unmountRoot();
		};
	}, []);

	return <Portal targetElement={modalRoot}>{children}</Portal>;
};

export default ModalPortal;
