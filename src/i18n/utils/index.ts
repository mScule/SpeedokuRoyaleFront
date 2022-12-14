import Locale from "@/i18n/types/locale"

/**
 * Removes the other part of the language tag (en-US => en).
 * @author Vilhelm
 */
export const localePath = (locale: Locale): string =>
	(locale as string).split("-")[0]
