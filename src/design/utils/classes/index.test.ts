import {classes} from "./index"

test("classes()", () => {
	const styleClasses: string = classes(
		"box",
		"small",
		null,
		"green",
		undefined
	)

	expect(styleClasses).toEqual("box small green")
})
