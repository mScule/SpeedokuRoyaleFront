export const clamp = (num: number, min: number, max: number): number => {
	let output = num
	if (output < min) output = min
	if (output > max) output = max
	return output
}
