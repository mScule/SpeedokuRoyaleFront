import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design-system/components/zone"

export const Main: FC<ZonedProps<HTMLProps<HTMLDivElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="main" title={title}>
		{children}
	</Zone>
)
