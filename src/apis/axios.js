import axios from "axios";

export const baseAPI = axios.create({
	baseURL: "https://fandom-k-api.vercel.app",
	headers: {
		"Content-Type": "application/json",
	},
});
