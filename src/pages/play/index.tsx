import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate} from "@/i18n"

export const Play: FC = () => {
	const translate = useTranslate()

	return (
		<Navigateable title={translate("title-play")}>
			<></>
		</Navigateable>
	)
}
