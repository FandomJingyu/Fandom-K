export default function withPostPosition(word, josa) {
	if (!word) return "";
	const lastChar = word[word.length - 1];
	const code = lastChar.charCodeAt(0);
	const hasBatchim = (code - 44032) % 28 !== 0;

	const josaMap = {
		은는: hasBatchim ? "은" : "는",
		이가: hasBatchim ? "이" : "가",
		을를: hasBatchim ? "을" : "를",
		으로: hasBatchim ? "으로" : "로",
		라는이라는: hasBatchim ? "이라는" : "라는",
	};

	return word + (josaMap[josa] || "");
}
