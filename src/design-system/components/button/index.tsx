import {FC, ButtonHTMLAttributes} from "react"
import {classList} from "@/design-system/utils/class-list"

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	children,
	...props
}) => (
	<button className={classList(["fill-clickable", className])} {...props}>
		{children}
	</button>
)
