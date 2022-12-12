import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate} from "@/i18n"
import {classes} from "@/design/utils/classes"
import "./style.css"

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
