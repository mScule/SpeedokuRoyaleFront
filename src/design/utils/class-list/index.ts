/**
 * @deprecated use classes instead for improved readability.
 */
export const classList = (classes: (string | undefined)[]): string => {
	let output: string = ""
	for (const c of classes) output += c == undefined ? "" : c + " "
	return output.trim()
}
