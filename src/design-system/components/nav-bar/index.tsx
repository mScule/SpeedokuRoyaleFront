import {FC, HTMLProps} from "react"
import "./nav-bar.css"

import {Row} from "@/design-system/components/row"

export const NavBar: FC<HTMLProps<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => (
	<nav className="nav-bar" {...props}>
		<Row className={className}>{children}</Row>
	</nav>
)
