import {FC} from "react"
import {classes} from "@/design/utils/classes"
import "./split.css"

interface SplitProps {
	size: "small" | "medium" | "large"
	orientation: "vertical" | "horizontal"
}

/**
 * Adds a vertical line, or a horizontal line separator.
 *
 * @author Vilhelm
 */
export const Split: FC<SplitProps> = ({size, orientation}) => (
	<div
		{...classes(
			"split",
			`border-${size}`,
			`border-radius-${size}`,
			orientation
		)}></div>
)
