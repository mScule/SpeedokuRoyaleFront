import {FC, ButtonHTMLAttributes} from "react"
import {classes} from "@/design/utils/classes"

/**
 * Wrapper for html button element so it follows the design system.
 *
 * @author Vilhelm
 */
export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	children,
	...props
}) => (
	<button {...classes("fill-clickable", className)} {...props}>
		{children}
	</button>
)
