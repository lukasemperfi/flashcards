export const getProgressPercent = (correct, repeat) => Math.round((correct * 100) / repeat) || 0

export const progressBarColor = (percent) => {
	if (percent < 50) { return '#ff4d4f' }
	if (percent > 49 && percent < 66) { return '#faad14' }
	if (percent > 65) { return '#00a82d' }
}