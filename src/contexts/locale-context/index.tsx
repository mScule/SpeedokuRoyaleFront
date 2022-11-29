import {createContext} from "react"
import {Locale} from "@/i18n/types"

interface LocaleContextProps {
	setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextProps>({
	setLocale: (_locale: Locale) => {
		throw new Error("Function not implemented.")
	}
})
