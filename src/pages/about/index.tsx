import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {Article} from "@/design/components/article"
import {Translate, useTranslate} from "@/i18n"
import { Link } from "react-router-dom"

/**
 * Component holding the contents of About page.
 *
 * @author Vilhelm
 */
export const About: FC = () => {
	const translate = useTranslate()

	return (
		<Navigateable title={translate("title-about")}>
			<Article title={translate("title-speedoku-royale")}>
				<p>
					<Translate id="article-speedoku-royale" />
				</p>
			</Article>
			<Article title={translate("title-how-to-play")}>
				<p>
					<Translate id="article-how-to-play" />
				</p>
			</Article>
			<Article title={translate("title-links")}>
				<Link to="docs"><Translate id="title-links" /></Link>
			</Article>
		</Navigateable>
	)
}
