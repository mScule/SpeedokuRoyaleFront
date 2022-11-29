import {FC, ReactNode, useContext} from "react"
import {Link} from "react-router-dom"

import "./nav-bar.css"
import {classList} from "@/design-system/utils/class-list"

import {ReactComponent as MenuIcon} from "bootstrap-icons/icons/hash.svg"
import {ReactComponent as ThemeIcon} from "bootstrap-icons/icons/lightbulb.svg"
import {ReactComponent as DarkThemeIcon} from "bootstrap-icons/icons/moon.svg"
import {ReactComponent as LightThemeIcon} from "bootstrap-icons/icons/sun.svg"
import {ReactComponent as TranslateIcon} from "bootstrap-icons/icons/translate.svg"

import {Row} from "@/design-system/components/row"
import {Icon} from "@/design-system/components/icon"
import {Split} from "@/design-system/components/split"
import {NavBar} from "@/design-system/components/nav-bar"
import {Section} from "@/design-system/components/section"
import {TextButton} from "@/design-system/components/text-button"

import {Locale} from "@/i18n/types"
import {Translate} from "@/i18n"

import {PreferenceContext} from "@/contexts/preference-context"
import {Preference} from "@/types/preference"
import {Theme} from "@/types/theme"
import {IconButton} from "@/design-system/components/icon-button"

interface NavigateableProps {
	children: ReactNode
	title: string
}

export const Navigateable: FC<NavigateableProps> = ({title, children}) => {
	const preferences = useContext(PreferenceContext)

	const themePrefs = preferences[Preference.Theme]
	const localePrefs = preferences[Preference.Locale]

	const setEnglish = () => localePrefs.set(Locale.English)
	const setFinnish = () => localePrefs.set(Locale.Finnish)
	const setJapanese = () => localePrefs.set(Locale.Japanese)

	const setDark = () => themePrefs.set(Theme.Dark)
	const setLight = () => themePrefs.set(Theme.Light)

	return (
		<>
			<NavBar className="nav-bar space-between">
				<Row className="align-center">
					<Icon caption="menu" size="medium">
						<MenuIcon />
					</Icon>
					<Link to="/">
						<Translate id="title-about" />
					</Link>
					<Split size="medium" orientation="vertical" />
					<Link to="/play">
						<Translate id="title-play" />
					</Link>
					<Split size="medium" orientation="vertical" />
					<Link to="/credits">
						<Translate id="title-credits" />
					</Link>
				</Row>
				<Row className="align-center">
					<Icon caption="light theme" size="medium">
						<ThemeIcon />
					</Icon>
					<IconButton slim size="medium" onClick={setLight}>
						<LightThemeIcon />
					</IconButton>
					<Split size="medium" orientation="vertical" />
					<IconButton slim size="medium" onClick={setDark}>
						<DarkThemeIcon />
					</IconButton>
					<Icon caption="translate" size="medium">
						<TranslateIcon />
					</Icon>
					<TextButton onClick={setEnglish}>{Locale.English}</TextButton>
					<Split size="medium" orientation="vertical" />
					<TextButton onClick={setFinnish}>{Locale.Finnish}</TextButton>
					<Split size="medium" orientation="vertical" />
					<TextButton onClick={setJapanese}>{Locale.Japanese}</TextButton>
				</Row>
			</NavBar>
			<Section
				className={classList(["border-radius-medium", "padding-small"])}
				title={title}>
				{children}
			</Section>
		</>
	)
}
