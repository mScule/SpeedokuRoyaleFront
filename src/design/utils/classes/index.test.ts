import {classes} from "./index"

/**
 * Test makes sure that the classes function behaves correctly. That is,
 * that it can take dynamic number of parameters and these can be strings,
 * nulls, and undefined values.
 *
 * If the classes behaves correctly, it will return class string that can be
 * used as value for className in any React Component that supports it.
 *
 * @author Vilhelm
 */
test("classes()", () => {
	const styleClasses: string = classes(
		"small",
		null,
		"green",
		undefined,
		"box"
	).className

	expect(styleClasses).toEqual("small green box")
})
