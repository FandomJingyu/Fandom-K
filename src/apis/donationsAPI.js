import { baseAPI } from "./axios";

export const donationsAPI = {
	// 조공 목록 조회
	getDonations: async (pageSize = 20) => {
		try {
			const response = await baseAPI.get(
				`/15-3/donations?pageSize=${pageSize}`,
			);
			return response.data;
		} catch (error) {
			throw new Error("목록을 불러오는데 실패했습니다.");
		}
	},
};
