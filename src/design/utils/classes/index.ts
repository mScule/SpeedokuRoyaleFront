export const classes = (...classes: (string | undefined | null)[]) => {
	let classString: string = ""
	classes.forEach(
		c => (classString += c === undefined || c === null ? "" : c + " ")
	)
	return classString.trim()
}
