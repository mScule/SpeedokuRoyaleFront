import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design-system/components/zone"

export const Section: FC<ZonedProps<HTMLProps<HTMLDivElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="section" title={title}>
		{children}
	</Zone>
)
