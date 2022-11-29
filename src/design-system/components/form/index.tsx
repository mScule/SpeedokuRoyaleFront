import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design-system/components/zone"

import "./form.css"

export const Form: FC<ZonedProps<HTMLProps<HTMLFormElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="form" title={title}>
		{children}
	</Zone>
)
