import {createContext} from "react"
import {Locale} from "@/i18n/types"

interface LocaleContextProps {
	setLocale: (locale: Locale) => void
}

/**
 * Context for providing the selected locale for children components.
 *
 * @deprecated Should be replaced with the Preference context at some point.
 * @author Vilhelm
 */
export const LocaleContext = createContext<LocaleContextProps>({
	setLocale: (_locale: Locale) => {
		throw new Error("Function not implemented.")
	}
})
