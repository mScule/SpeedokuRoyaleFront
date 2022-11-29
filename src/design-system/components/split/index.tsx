import {classList} from "@/design-system/utils/class-list"
import {FC} from "react"
import "./split.css"

interface SplitProps {
	size: "small" | "medium" | "large"
	orientation: "vertical" | "horizontal"
}

export const Split: FC<SplitProps> = ({size, orientation}) => (
	<div
		className={classList([
			"split",
			`border-${size}`,
			`border-radius-${size}`,
			orientation
		])}></div>
)
