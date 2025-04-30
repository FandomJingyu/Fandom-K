// export const chartAPI = {
// 	getRanks: async (gender = "female", pageSize = "") => {
// 		try {
// 			const response = await baseAPI.get("/15-3/charts", {
// 				params: {
// 					gender,
// 					pageSize,
// 				},
// 			});
// 			return response.data;
// 		} catch (error) {
// 			throw new Error("목록을 불러오는데 실패했습니다.");
// 		}
// 	},
// };

import { baseAPI } from "./axios";

export const chartAPI = {
	getRanks: async (gender, pageSize = 10) => {
		try {
			const response = await baseAPI.get(
				`https://fandom-k-api.vercel.app/15-3/charts/${gender}`,
				{
					params: { gender, pageSize },
				},
			);
			return response.data;
		} catch (error) {
			console.error("차트 불러오기 실패", error);
			throw new Error("목록을 불러오는 데 실패했습니다.");
		}
	},
};
