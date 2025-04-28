import { baseAPI } from "./axios";

export const donationsAPI = {
	// 조공 목록 조회
	getDonations: async (pageSize = 20) => {
		try {
			const response = await baseAPI.get(
				`/15-3/donations?&priorityIdolIds=5023&pageSize=${pageSize}`,
			);
			return response.data;
		} catch (error) {
			throw new Error("목록을 불러오는데 실패했습니다.");
		}
	},

	// 조공 후원 요청
	contribute: async (donationId, amount) => {
		try {
			const response = await baseAPI.put(
				`/15-3/donations/${donationId}/contribute`,
				{ amount },
			);
			return response.data;
		} catch (error) {
			throw new Error("후원에 실패했습니다.");
		}
	},
};
