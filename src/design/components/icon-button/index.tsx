import {FC, ButtonHTMLAttributes} from "react"
import {Button} from "@/design/components/button"
import {Row} from "@/design/components/row"

import {classList} from "@/design/utils/class-list"

import "./icon-button.css"

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
		className={classList([
			className,
			"icon-button",
			slim ? "slim" : undefined,
			size
		])}
		{...props}>
		{slim ? (
			children
		) : (
			<Row className="align-center width-fit space-center">
				{title && <span>{title}</span>}
				<>{children}</>
			</Row>
		)}
	</Button>
)
