import {isStringEnumEntry} from "./index"

test("isStringEnumEntry()", () => {
	enum Weekday {
		Monday = "monday",
		Tuesday = "tuesday",
		Wednesday = "wednesday",
		Thursday = "thursday",
		Friday = "friday",
		Saturday = "saturday",
		Sunday = "sunday"
	}

	const day: string = "monday"
	const notDay: string = "Not a day"

	expect(isStringEnumEntry(day, Weekday)).toBe(true)
	expect(isStringEnumEntry(notDay, Weekday)).toBe(false)
})
