import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design/components/zone"

import "./form.css"

/**
 * Component for html form element that holds the correct heading depth.
 *
 * @author Vilhelm
 */
export const Form: FC<ZonedProps<HTMLProps<HTMLFormElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="form" title={title}>
		{children}
	</Zone>
)
