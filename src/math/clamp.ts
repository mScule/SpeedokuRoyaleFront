/**
 * Simple clamping function.
 *
 * @param num Number to be clamped
 * @param min Min number
 * @param max Max number
 * @returns Clamped number
 * @author Vilhelm
 */
export const clamp = (num: number, min: number, max: number): number => {
	let output = num
	if (output < min) output = min
	if (output > max) output = max
	return output
}
