import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design/components/zone"

/**
 * Component for html5 article element that holds the correct heading depth.
 *
 * @author Vilhelm
 */
export const Article: FC<ZonedProps<HTMLProps<HTMLDivElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="article" title={title}>
		{children}
	</Zone>
)
