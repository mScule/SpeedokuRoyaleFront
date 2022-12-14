import {Locale} from "@/i18n/types"
import {isStringEnumEntry} from "../is-string-enum-entry"

/**
 * Gets the locale that is selected in the users browser, and goes through it
 * until it finds some language from the supported locales.
 *
 * @author Vilhelm
 */
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
