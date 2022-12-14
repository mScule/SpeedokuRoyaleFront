import {FC, HTMLProps} from "react"
import {classes} from "@/design/utils/classes"
import "./column.css"

/**
 * Element for creating columns that follows the design system
 *
 * @author Vilhelm
 */
export const Column: FC<HTMLProps<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => (
	<div {...classes("column", className)} {...props}>
		{children}
	</div>
)
