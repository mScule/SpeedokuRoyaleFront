import {FC, ReactNode, useContext} from "react"
import {Link} from "react-router-dom"

import "./nav-bar.css"
import {classList} from "@/design-system/utils/class-list"

import {ReactComponent as MenuIcon} from "bootstrap-icons/icons/hash.svg"
import {ReactComponent as TranslateIcon} from "bootstrap-icons/icons/translate.svg"

import {Row} from "@/design-system/components/row"
import {Icon} from "@/design-system/components/icon"
import {Split} from "@/design-system/components/split"
import {NavBar} from "@/design-system/components/nav-bar"
import {Section} from "@/design-system/components/section"
import {TextButton} from "@/design-system/components/text-button"
import {LocaleContext} from "@/contexts/localecontext"

import {Locale} from "@/i18n/types"
import {Translate} from "@/i18n"

interface NavigateableProps {
	children: ReactNode
	title: string
}

export const Navigateable: FC<NavigateableProps> = ({title, children}) => {
	const {setLocale} = useContext(LocaleContext)

	const setEnglish = () => setLocale(Locale.English)
	const setFinnish = () => setLocale(Locale.Finnish)
	const setJapanese = () => setLocale(Locale.Japanese)

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
					<Icon caption="translate" size="medium">
						<TranslateIcon />
					</Icon>
					<TextButton onClick={setEnglish}>en</TextButton>
					<Split size="medium" orientation="vertical" />
					<TextButton onClick={setFinnish}>fi</TextButton>
					<Split size="medium" orientation="vertical" />
					<TextButton onClick={setJapanese}>jp</TextButton>
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
