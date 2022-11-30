import {FC, ReactNode} from "react"
import {classList} from "@/design/utils/class-list"
import "./icon.css"

interface IconProps {
	caption: string
	size: "small" | "medium" | "large"
	children: ReactNode
}

export const Icon: FC<IconProps> = ({caption, size, children}) => (
	<figure
		className={classList(["icon", size])}
		role="icon"
		aria-label={caption}>
		{children}
	</figure>
)
