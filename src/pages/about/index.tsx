import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {Article} from "@/design/components/article"
import {Translate, useTranslate} from "@/i18n"
import {Column} from "@/design/components/column"

import Manual from "./pdf/manual.pdf"
import TechnicalDocument from "./pdf/technical-document.pdf"

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
			<Article title={translate("title-docs")}>
				<p>
					<Translate id="article-docs" />
				</p>

				<Column>
					<a href={Manual}>
						<Translate id="link-manual" />
					</a>
					<a href={TechnicalDocument}>
						<Translate id="link-technical-docs" />
					</a>
					<a href="https://users.metropolia.fi/~jonathme/SpeedokuRoyaleDocs2.0/html/index.html">
						<Translate id="link-unity-docs" />
					</a>
					<a href="https://users.metropolia.fi/~vilhelmn/SpeedokuRoyale%20Doxygen%20Documentation/md__speedoku_royale_server__r_e_a_d_m_e.html">
						<Translate id="link-server-docs" />
					</a>
				</Column>
			</Article>
		</Navigateable>
	)
}
