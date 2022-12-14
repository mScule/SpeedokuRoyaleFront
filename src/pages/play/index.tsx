import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate} from "@/i18n"
import "./style.css"

/**
 * Component holding the contents of the page that contains the game itself.
 *
 * @author Vilhelm
 */
export const Play: FC = () => {
	const translate = useTranslate()

	return (
		<Navigateable title={translate("title-play")}>
			<iframe
				className="speedoku-royale"
				src="http://10.114.32.14/SpeedokuRoyaleWebGL/index.html"></iframe>
		</Navigateable>
	)
}
