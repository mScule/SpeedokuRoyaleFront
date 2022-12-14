import {FC, ReactNode} from "react"
import {classes} from "@/design/utils/classes"
import "./icon.css"

interface IconProps {
	caption: string
	size: "small" | "medium" | "large"
	children: ReactNode
}

/**
 * Component for icons to be wrapped in so they follow the design system.
 *
 * @author Vilhelm
 */
export const Icon: FC<IconProps> = ({caption, size, children}) => (
	<figure {...classes("icon", size)} role="icon" aria-label={caption}>
		{children}
	</figure>
)
