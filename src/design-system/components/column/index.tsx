import {FC, HTMLProps} from "react"
import {classList} from "@/design-system/utils/class-list"
import "./column.css"

export const Column: FC<HTMLProps<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => (
	<div className={classList(["column", className])} {...props}>
		{children}
	</div>
)
