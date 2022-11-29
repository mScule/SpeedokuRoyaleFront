import {FC} from "react"
import {Link} from "react-router-dom"
import {Article} from "@/design-system/components/article"
import {Translate, useTranslate} from "@/i18n"

export const NotFound: FC = () => {
	const translate = useTranslate()

	return (
		<Article title={translate("title-not-found")}>
			<p><Translate id="article-page-not-found" /></p>
			<Link to="/">
				<Translate id="link-go-home" />
			</Link>
		</Article>
	)
}
