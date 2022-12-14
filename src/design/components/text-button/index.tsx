import {FC, ButtonHTMLAttributes} from "react"
import {classes} from "@/design/utils/classes"
import "./text-button.css"

/**
 * Button that purely consists of text.
 * Nothing else than text shouldn't be put inside it.
 *
 * @author Vilhelm
 */
export const TextButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	children,
	...props
}) => (
	<button {...classes("text-button", className)} {...props}>
		{children}
	</button>
)
