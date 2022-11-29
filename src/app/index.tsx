import {FC, useEffect, useContext} from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import {I18nProvider} from "@/i18n"
import {Locale} from "@/i18n/types"

import {LocaleContext} from "@/contexts/locale-context"
import {PreferenceContext} from "@/contexts/preference-context"

import {Page} from "@/design-system/components/page"
import {About} from "@/pages/about"
import {Play} from "@/pages/play"
import {Credits} from "@/pages/credits"
import {NotFound} from "@/pages/not-found"
import {Preference} from "@/types/preference"

const router = createBrowserRouter([
	{
		path: "/",
		element: <About />,
		errorElement: <NotFound />
	},
	{
		path: "/play",
		element: <Play />
	},
	{
		path: "/credits",
		element: <Credits />
	}
])

export const App: FC = () => {
	const preferences = useContext(PreferenceContext)

	const setLang = () => {
		const htmlDocument = document.documentElement
		htmlDocument.setAttribute(
			"lang",
			`${preferences[Preference.Locale].get()}`
		)
	}

	const setTheme = () => {
		const htmlDocument = document.documentElement
		htmlDocument.setAttribute(
			"data-theme",
			`${preferences[Preference.Theme].get()}`
		)
	}

	useEffect(() => {
		setLang()
		setTheme()
	}, [
		preferences[Preference.Locale].get(),
		preferences[Preference.Theme].get()
	])

	return (
		<I18nProvider locale={preferences[Preference.Locale].get()}>
			<LocaleContext.Provider
				value={{
					setLocale: (locale: Locale) =>
						preferences[Preference.Locale].set(locale)
				}}>
				<Page title="Speedoku Royale">
					<RouterProvider router={router} />
				</Page>
			</LocaleContext.Provider>
		</I18nProvider>
	)
}
