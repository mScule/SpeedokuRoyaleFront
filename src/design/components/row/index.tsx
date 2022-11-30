import {FC, HTMLProps} from "react"
import {classList} from "@/design/utils/class-list"
import "./row.css"

export const Row: FC<HTMLProps<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => (
	<div className={classList(["row", className])} {...props}>
		{children}
	</div>
)
