import {FC, HTMLProps} from "react"
import "./input.css"
import {classList} from "@/design-system/utils/class-list"

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
			className={classList([
				"border-small",
				"padding-small",
				type === "button" || type === "submit" ? "fill-clickable" : undefined
			])}
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
