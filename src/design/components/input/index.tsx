import {classes} from "@/design/utils/classes"
import {FC, HTMLProps} from "react"
import "./input.css"

interface InputProps extends HTMLProps<HTMLInputElement> {
	id: string
	label?: string
}

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
