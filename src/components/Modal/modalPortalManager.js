function createModalPortalManager() {
	let activeModalCount = 0;
	/**
	 * @type {HTMLElement | null}
	 */
	let modalRoot = null;

	const createPortalRootElement = () => {
		modalRoot = document.createElement("div");
		modalRoot.setAttribute("id", "modal-root");
		document.body.appendChild(modalRoot);
	};

	const removePortalRootElement = () => {
		if (modalRoot) {
			document.body.removeChild(modalRoot);
		}

		modalRoot = null;
	};

	/**
	 * @returns {HTMLElement}
	 */
	const mountRoot = () => {
		if (activeModalCount === 0) {
			createPortalRootElement();
		}

		activeModalCount++;
		return modalRoot;
	};

	/**
	 * @returns {void}
	 */
	const unmountRoot = () => {
		if (activeModalCount > 0) {
			activeModalCount--;
		}

		if (activeModalCount === 0) {
			removePortalRootElement();
		}
	};

	return {
		mountRoot,
		unmountRoot,
	};
}

export default createModalPortalManager;
