import {FC, ReactNode, useContext} from "react"
import {Link} from "react-router-dom"

import "./nav-bar.css"
import {classes} from "@/design/utils/classes"

import {ReactComponent as MenuIcon} from "bootstrap-icons/icons/hash.svg"
import {ReactComponent as ThemeIcon} from "bootstrap-icons/icons/lightbulb.svg"
import {ReactComponent as DarkThemeIcon} from "bootstrap-icons/icons/moon.svg"
import {ReactComponent as LightThemeIcon} from "bootstrap-icons/icons/sun.svg"
import {ReactComponent as TranslateIcon} from "bootstrap-icons/icons/translate.svg"
import {SpeedokuLogo} from "@/components/speedoku-logo"

import {Row} from "@/design/components/row"
import {Icon} from "@/design/components/icon"
import {Split} from "@/design/components/split"
import {NavBar} from "@/design/components/nav-bar"
import {Section} from "@/design/components/section"
import {TextButton} from "@/design/components/text-button"

import {Locale} from "@/i18n/types"
import {Translate} from "@/i18n"

import {PreferenceContext} from "@/contexts/preference-context"
import {Preference} from "@/types/preference"
import {Theme} from "@/types/theme"
import {IconButton} from "@/design/components/icon-button"
import {Page} from "@/design/components/page"

interface NavigateableProps {
	children: ReactNode
	title: string
}

/**
 * Component that makes the navbar appear on the screen. It makes everything
 * else appear below it with margin that makes the page content centered.
 *
 * @author Vilhelm
 */
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
			<NavBar {...classes("space-evenly", "padding-small")}>
				<Row className="align-center">
					<SpeedokuLogo />
				</Row>

				<Split size="small" orientation="vertical" />

				<Row {...classes("medium", "align-center")}>
					<Icon caption="menu" size="medium">
						<MenuIcon />
					</Icon>

					<Link {...classes("uppercase", "nowrap")} to="/">
						<Translate id="title-about" />
					</Link>

					<Split size="small" orientation="vertical" />

					<Link {...classes("uppercase", "nowrap")} to="/play">
						<Translate id="title-play" />
					</Link>

					<Split size="small" orientation="vertical" />

					<Link {...classes("uppercase", "nowrap")} to="/credits">
						<Translate id="title-credits" />
					</Link>
				</Row>

				<Split size="small" orientation="vertical" />

				<Row {...classes("medium", "align-center", "padding-small")}>
					<Icon caption="light theme" size="medium">
						<ThemeIcon />
					</Icon>

					<IconButton slim size="medium" onClick={setLight}>
						<LightThemeIcon />
					</IconButton>

					<Split size="small" orientation="vertical" />

					<IconButton slim size="medium" onClick={setDark}>
						<DarkThemeIcon />
					</IconButton>
				</Row>

				<Split size="small" orientation="vertical" />

				<Row {...classes("medium", "align-center", "padding-small")}>
					<Icon caption="translate" size="medium">
						<TranslateIcon />
					</Icon>

					<TextButton className="uppercase" onClick={setEnglish}>
						English
					</TextButton>

					<Split size="small" orientation="vertical" />

					<TextButton className="uppercase" onClick={setFinnish}>
						Suomi
					</TextButton>

					<Split size="small" orientation="vertical" />

					<TextButton className="uppercase" onClick={setJapanese}>
						?????????
					</TextButton>
				</Row>
			</NavBar>

			<Page>
				<Section
					{...classes("border-radius-medium", "padding-small")}
					title={title}>
					{children}
				</Section>
			</Page>
		</>
	)
}
