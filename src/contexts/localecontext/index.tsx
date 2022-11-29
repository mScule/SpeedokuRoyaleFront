import {Locale} from "@/i18n/types"
import {createContext, Dispatch, SetStateAction} from "react"

interface LocaleContextProps {
	setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextProps>({
	setLocale: (locale: Locale) => {
		throw new Error("No locale provider set")
	}
})
