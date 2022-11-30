import {FC, HTMLProps} from "react"
import {Zone, ZonedProps} from "@/design/components/zone"

export const Article: FC<ZonedProps<HTMLProps<HTMLDivElement>>> = ({
	title,
	children,
	...props
}) => (
	<Zone {...props} tag="article" title={title}>
		{children}
	</Zone>
)
