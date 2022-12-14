import {FC} from "react"
import {Link} from "react-router-dom"
import {Page} from "@/design/components/page"
import {Article} from "@/design/components/article"
import {Translate, useTranslate} from "@/i18n"

/**
 * Component holding the contents of NotFound page.
 *
 * @author Vilhelm
 */
export const NotFound: FC = () => {
	const translate = useTranslate()

	return (
		<Page>
			<Article title={translate("title-not-found")}>
				<p>
					<Translate id="article-page-not-found" />
				</p>
				<Link to="/">
					<Translate id="link-go-home" />
				</Link>
			</Article>
		</Page>
	)
}
