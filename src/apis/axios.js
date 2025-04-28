import axios from "axios";

export const baseAPI = axios.create({
	baseURL: "https://fandom-k-api.vercel.app",
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000, // 요청 하나당 최대 10초
});

const MAX_RETRY_TIME = 30000; // 총 30초 동안 재시도
const RETRY_DELAY = 1000; // 재시도 간격 1초

// 요청 인터셉터
baseAPI.interceptors.request.use(
	(config) => {
		// 요청이 보내지기 전에 작업 수행
		return config;
	},
	(error) => {
		// 요청 에러 발생 시 처리
		return Promise.reject(error);
	},
);

// 응답 인터셉터
baseAPI.interceptors.response.use(
	(response) => {
		// 응답이 정상일 때
		return response;
	},
	async (error) => {
		const config = error.config;

		// 설정 정보가 없거나 이미 재시도 중이면 그대로 에러 반환
		if (!config || config.__isRetryRequest) {
			return Promise.reject(error);
		}

		// 최초 시도 시 설정
		config.__isRetryRequest = true;
		config.__retryCount = config.__retryCount || 0;
		config.__startTime = config.__startTime || Date.now();

		// 경과 시간이 30초 미만이면 재시도
		if (Date.now() - config.__startTime < MAX_RETRY_TIME) {
			await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
			return baseAPI(config); // 재요청
		}

		// 30초 경과 시 에러 반환
		return Promise.reject(error);
	},
);
