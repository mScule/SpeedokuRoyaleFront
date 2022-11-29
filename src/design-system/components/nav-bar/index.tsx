import {FC, HTMLProps} from "react"
import "./nav-bar.css"

import {classList} from "@/design-system/utils/class-list"
import {Row} from "@/design-system/components/row"

export const NavBar: FC<HTMLProps<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => (
	<nav className={classList(["border-radius-large"])} {...props}>
		<Row className={className}>{children}</Row>
	</nav>
)
