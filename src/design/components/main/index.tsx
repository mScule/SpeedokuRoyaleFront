import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design/components/zone"

/**
 * Component for html5 main element that holds the correct heading depth.
 *
 * @author Vilhelm
 */
export const Main: FC<ZonedProps<HTMLProps<HTMLDivElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="main" title={title}>
		{children}
	</Zone>
)
