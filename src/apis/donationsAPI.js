import { baseAPI } from "./axios";

export const donationsAPI = {
	// 조공 목록 조회
	getDonations: async (teamName) => {
		try {
			const response = await baseAPI.get(`/${teamName}/donations`);
			return response.data;
		} catch (error) {
			throw new Error("목록을 불러오는데 실패했습니다.");
		}
	},
};
