import {FC, useState} from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import {I18nProvider} from "@/i18n"
import {Locale} from "@/i18n/types"
import {LocaleContext} from "@/contexts/localecontext"

import {Page} from "@/design-system/components/page"
import {About} from "@/pages/about"
import {Play} from "@/pages/play"
import {Credits} from "@/pages/credits"
import {NotFound} from "@/pages/not-found"

const router = createBrowserRouter([
	{
		path: "/",
		element: <About />,
	},
	{
		path: "/play",
		element: <Play />
	},
	{
		path: "/credits",
		element: <Credits />
	},
	{
		path: "/*",
		element: <NotFound />
	}
])

export const App: FC = () => {
	const [locale, setLocale] = useState<Locale>(Locale.English)

	return (
		<I18nProvider locale={locale}>
			<LocaleContext.Provider
				value={{setLocale: (locale: Locale) => setLocale(locale)}}>
				<Page title="Speedoku Royale">
					<RouterProvider router={router} />
				</Page>
			</LocaleContext.Provider>
		</I18nProvider>
	)
}
