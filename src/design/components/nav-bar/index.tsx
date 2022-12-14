import {FC, HTMLProps} from "react"
import "./nav-bar.css"

import {Row} from "@/design/components/row"

/**
 * Wrapper component for html5 nav element so it follows the design system.
 *
 * @author Vilhelm
 */
export const NavBar: FC<HTMLProps<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => (
	<nav className="nav-bar" {...props}>
		<Row className={className}>{children}</Row>
	</nav>
)
