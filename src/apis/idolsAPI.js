import { baseAPI } from "./axios";

export const idolsAPI = {
	// 아이돌 목록 조회
	getIdols: async (pageSize, keyword = "") => {
		try {
			const response = await baseAPI.get(
				`/15-3/idols?pageSize=${pageSize}&keyword=${keyword}`,
			);
			return response.data;
		} catch (error) {
			throw new Error("목록을 불러오는데 실패했습니다.");
		}
	},
};
