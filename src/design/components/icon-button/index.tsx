import {FC, ButtonHTMLAttributes} from "react"
import {Button} from "@/design/components/button"
import {Row} from "@/design/components/row"

import "./icon-button.css"
import {classes} from "@/design/utils/classes"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string
	slim?: boolean
	size: "small" | "medium" | "large"
}

export const IconButton: FC<IconButtonProps> = ({
	title,
	slim,
	size,
	children,
	className,
	...props
}) => (
	<Button
		{...classes(className, "icon-button", slim ? "slim" : undefined, size)}
		{...props}>
		{slim ? (
			children
		) : (
			<Row {...classes("align-center", "width-fit", "space-center")}>
				{title && <span>{title}</span>}
				<>{children}</>
			</Row>
		)}
	</Button>
)
