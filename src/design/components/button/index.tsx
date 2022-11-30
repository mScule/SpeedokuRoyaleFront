import {FC, ButtonHTMLAttributes} from "react"
import {classes} from "@/design/utils/classes"

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	children,
	...props
}) => (
	<button {...classes("fill-clickable", className)} {...props}>
		{children}
	</button>
)
