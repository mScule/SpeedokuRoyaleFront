import {classes} from "./index"

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
