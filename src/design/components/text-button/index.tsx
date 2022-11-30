import {FC, ButtonHTMLAttributes} from "react"
import {classes} from "@/design/utils/classes"
import "./text-button.css"

export const TextButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	children,
	...props
}) => (
	<button {...classes("text-button", className)} {...props}>
		{children}
	</button>
)
