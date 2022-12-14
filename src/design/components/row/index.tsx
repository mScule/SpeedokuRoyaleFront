import {FC, HTMLProps} from "react"
import {classes} from "@/design/utils/classes"
import "./row.css"

/**
 * Displays items inside it as a row.
 *
 * @author Vilhelm
 */
export const Row: FC<HTMLProps<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => (
	<div {...classes("row", className)} {...props}>
		{children}
	</div>
)
