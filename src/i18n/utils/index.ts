import Locale from "@/i18n/types/locale"

// Removes the extensive part of the language tag (en-US => en)
export const localePath = (locale: Locale): string =>
	(locale as string).split("-")[0]
