import { useState } from "react";

const useSafeSubmit = (onSubmit) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const safeSubmit = async (e) => {
		e.preventDefault(); // 폼 제출 기본 동작 막기
		if (isSubmitting) return;
		setIsSubmitting(true);

		try {
			await onSubmit(e);
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return { isSubmitting, safeSubmit };
};

export default useSafeSubmit;
