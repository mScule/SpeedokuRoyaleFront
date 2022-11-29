import {Locale} from "@/i18n/types"
import {isStringEnumEntry} from "../is-string-enum-entry"

export const getSystemLocale = (): Locale => {
	const systemLocales: readonly string[] = navigator.languages

	let selected: Locale = Locale.English

	for (const language of systemLocales) {
		const withoutSpecifier = language.split("-")[0]
		if (isStringEnumEntry(withoutSpecifier, Locale)) {
			selected = withoutSpecifier as Locale
			break
		}
	}

	return selected
}
