import {FC, ButtonHTMLAttributes} from "react"
import {classList} from "@/design-system/utils/class-list"
import "./text-button.css"

export const TextButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	children,
	...props
}) => (
	<button className={classList(["text-button", className])} {...props}>
		{children}
	</button>
)
