module.exports = (min, max, dp) => {
	dp = Math.pow(10, (dp||0));
	max = max * dp;
	min = min * dp;
	return Math.floor(Math.random() * (max - min + 1) + min) / dp;
}
