import { createContext, useContext, useEffect, useState } from "react";

// Context 생성
const CreditContext = createContext();

// Provider 정의
const CreditProvider = ({ children }) => {
	const [credit, setCredit] = useState(() => {
		const stored = localStorage.getItem("credit");
		return stored !== null ? Number(stored) : 10000; // 크레딧의 초기값은 10000으로 설정
	});

	// 크레딧값이 변경될 때마다 localStorage에 저장
	useEffect(() => {
		localStorage.setItem("credit", String(credit));
	}, [credit]);

	// Credit 상태 관리를 위한 함수들
	// add: 기존 크레딧에서 크레딧을 추가적으로 충전할 경우
	const addCredit = (amount) => setCredit((prev) => prev + amount);

	// deduct: 후원을 위해 크레딧을 사용한 경우
	const deductCredit = (amount) => setCredit((prev) => prev - amount);

	const value = {
		credit,
		addCredit,
		deductCredit,
	};

	return (
		<CreditContext.Provider value={value}>{children}</CreditContext.Provider>
	);
};

// 커스텀 훅
const useCredit = () => {
	const context = useContext(CreditContext);
	if (!context) {
		throw new Error("useCredit은 CreditProvider 내부에서 사용되어야 합니다.");
	}
	return context;
};

export { CreditProvider, useCredit };
