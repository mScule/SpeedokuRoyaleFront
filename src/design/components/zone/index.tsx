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

/**
 * Generic zone that should contain something and something that can be labeled
 * with a title if needed. Makes use of the Titled component. Base component for
 * every other "contentful" semantic component.
 *
 * @author Vilhelm
 */
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
