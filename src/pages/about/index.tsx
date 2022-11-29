import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {Article} from "@/design-system/components/article"
import {Translate, useTranslate} from "@/i18n"

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
		</Navigateable>
	)
}
