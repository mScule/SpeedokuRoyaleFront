/**
 * Function that takes in dynamic amount of parameters of type string,
 * undefined, and null. Function creates class attribute string and returns it
 * straight to the className attribute for the React Component where it's
 * called.
 *
 * @params string | undefined | null
 * @author Vilhelm
 */
export const classes = (...classes: (string | undefined | null)[]) => {
	let classString: string = ""
	classes.forEach(
		c => (classString += c === undefined || c === null ? "" : c + " ")
	)
	return {className: classString.trim()}
}
