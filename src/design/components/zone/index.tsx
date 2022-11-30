import {FC, HTMLProps, ReactNode, createElement} from "react"
import {Titled, TitledComponent} from "@/design/components/titled"
import {classes} from "@/design/utils/classes"

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
		{...classes("zone", className), ...props},
		title ? (
			<Titled
				title={title}
				titleRowClassName={classes("zone", titleRowClassName).className}
				titleRow={titleRow}>
				{children}
			</Titled>
		) : (
			children
		)
	)
