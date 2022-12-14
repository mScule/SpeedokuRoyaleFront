import {classes} from "@/design/utils/classes"
import {FC, HTMLProps} from "react"
import "./input.css"

interface InputProps extends HTMLProps<HTMLInputElement> {
	id: string
	label?: string
}

/**
 * Component that combines the input, and label elements for ease of use, and
 * so they follow the design system.
 *
 * @author Vilhelm
 */
export const Input: FC<InputProps> = ({
	id,
	label,
	type,
	...props
}): JSX.Element => {
	const inputElement = (
		<input
			id={id}
			{...classes(
				"border-small",
				"padding-small",
				type === "button" || type === "submit" ? "fill-clickable" : undefined
			)}
			type={type}
			{...props}
		/>
	)
	return label ? (
		<>
			<label htmlFor={id}>{label}</label>
			{inputElement}
		</>
	) : (
		inputElement
	)
}
