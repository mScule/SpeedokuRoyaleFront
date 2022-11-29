import React, {Fragment} from "react"
import {IntlProvider} from "react-intl"

import {Locale} from "@/i18n/types"
import {messages} from "./messages"

type ProviderProps = {
	locale: Locale
	children: JSX.Element | JSX.Element[] | string | string[]
}

const Provider: React.FC<ProviderProps> = ({
	locale = Locale.English,
	children
}) => (
	<IntlProvider
		locale={locale}
		textComponent={Fragment}
		messages={messages[locale] as unknown as Record<string, string>}>
		{children}
	</IntlProvider>
)

export default Provider
