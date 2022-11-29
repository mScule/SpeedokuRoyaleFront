import {FC} from "react"
import {FormattedMessage} from "react-intl"
import {useIntl} from "react-intl"
import Message from "@/i18n/types/message"

interface TranslateProps {
	id: keyof Message
	values?: any
}

export const Translate: FC<TranslateProps> = ({id, values}) => (
	<FormattedMessage id={id as string} values={{...values}} />
)

export const useTranslate = () => {
	const {formatMessage} = useIntl()
	const translate = (id: keyof Message, values?: any) => {
		return formatMessage({id: id}, values)
	}
	return translate
}
