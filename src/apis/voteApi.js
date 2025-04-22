import { baseAPI } from "./axios";

// 투표 생성 API
export const votesAPI = {
	addVote: async (idolId) => {
		try {
			const response = await baseAPI.post("/15-3/votes", { idolId });
			return response.data;
		} catch (error) {
			console.error("투표 생성에 실패했습니다.", error);
			throw new Error("투표 생성에 실패했습니다.");
		}
	},
};
