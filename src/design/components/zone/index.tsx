import {FC, HTMLProps, ReactNode, createElement} from "react"
import {Titled, TitledComponent} from "@/design/components/titled"
import {classList} from "@/design/utils/class-list"

import "./zone.css"

export interface ZonedProps<T> extends HTMLProps<T>, TitledComponent {
	titleRowClassName?: string
}

interface ZoneProps<T> extends HTMLProps<T> {
	tag: string
	titleRow?: ReactNode
	invertedTitleRow?: boolean
	titleRowClassName?: string
}

export const Zone: FC<ZoneProps<any>> = ({
	tag,
	title,
	children,
	className,
	titleRow,
	invertedTitleRow,
	titleRowClassName,
	...props
}): JSX.Element =>
	createElement(
		tag,
		{className: classList(["zone", className]), ...props},
		title ? (
			<Titled
				title={title}
				titleRowClassName={classList(["zone", titleRowClassName])}
				titleRow={titleRow}>
				{children}
			</Titled>
		) : (
			children
		)
	)
