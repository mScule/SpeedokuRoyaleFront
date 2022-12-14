import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design/components/zone"

/**
 * Component for html5 section element that holds the correct heading depth.
 *
 * @author Vilhelm
 */
export const Section: FC<ZonedProps<HTMLProps<HTMLDivElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="section" title={title}>
		{children}
	</Zone>
)
