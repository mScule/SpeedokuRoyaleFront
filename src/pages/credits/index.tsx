import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate} from "@/i18n"

/**
 * Component holding the contents of Credits page.
 *
 * @author Vilhelm
 */
export const Credits: FC = () => {
	const translate = useTranslate()

	return (
		<Navigateable title={translate("title-credits")}>
			<ul>
				<li>Sylvester Salo</li>
				<li>Julia Köykkä</li>
				<li>Jonathan Methuen</li>
				<li>Vilhelm Niemi</li>
			</ul>
		</Navigateable>
	)
}
