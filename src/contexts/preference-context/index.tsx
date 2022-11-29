import {FC, createContext, useState, ReactNode} from "react"

import {Preference} from "@/types/preference"
import {Locale} from "@/i18n/types"
import {Theme} from "@/types/theme"
import {getSystemLocale} from "@/utils/get-system-locale"
import {getSystemTheme} from "@/utils/get-system-theme"

export interface PreferenceFeatures<T> {
	get: () => T
	set: (value: T) => void
}

interface PreferenceContextProps {
	[Preference.Locale]: PreferenceFeatures<Locale>
	[Preference.Theme]: PreferenceFeatures<Theme>
}

const initFeatures = <T,>(): PreferenceFeatures<T> => ({
	get: (): T => {
		throw new Error("Function not implemented.")
	},
	set: (_value: T): void => {
		throw new Error("Function not implemented.")
	}
})

export const PreferenceContext = createContext<PreferenceContextProps>({
	[Preference.Locale]: initFeatures<Locale>(),
	[Preference.Theme]: initFeatures<Theme>()
})

interface PreferenceProviderProps {
	children: ReactNode
}

const setLocalStorage = <T,>(preference: Preference, value: T) =>
	window.localStorage.setItem(`${preference}`, `${value}`)

const getLocalStorage = <T,>(preference: Preference, defaultValue: T) => {
	const item = window.localStorage.getItem(`${preference}`)
	return (item !== null ? item : defaultValue) as T
}

const usePreference = <T,>(preference: Preference, defaultValue: T) =>
	useState<T>(getLocalStorage<T>(preference, defaultValue))

export const PreferenceProvider: FC<PreferenceProviderProps> = ({
	children
}) => {
	const [locale, setLocale] = usePreference<Locale>(
		Preference.Locale,
		getSystemLocale()
	)
	const [theme, setTheme] = usePreference<Theme>(
		Preference.Theme,
		getSystemTheme()
	)

	const concrete = {
		[Preference.Locale]: {
			get: () => locale,
			set: (value: Locale) => {
				setLocalStorage<Locale>(Preference.Locale, value)
				setLocale(value)
			}
		},
		[Preference.Theme]: {
			get: () => theme,
			set: (value: Theme) => {
				setLocalStorage<Theme>(Preference.Theme, value)
				setTheme(value)
			}
		}
	}

	return (
		<PreferenceContext.Provider value={concrete}>
			{children}
		</PreferenceContext.Provider>
	)
}
