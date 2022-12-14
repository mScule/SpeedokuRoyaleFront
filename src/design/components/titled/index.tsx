import {clamp} from "@/math/clamp"
import {
	FC,
	Context,
	HTMLProps,
	useContext,
	createContext,
	createElement,
	ReactNode
} from "react"
import {Row} from "../row"
import {classes} from "@/design/utils/classes"

const HeadingDepthContext: Context<HeadingDepthContextProps> =
	createContext<HeadingDepthContextProps>({depth: 1})

interface HeadingDepthContextProps {
	depth: number
}

interface ExtendableTitleRow {
	titleRow?: ReactNode
}

export interface TitledComponent extends ExtendableTitleRow {
	title?: string
	invertedTitleRow?: boolean
	titleRowClassName?: string
}

export interface TitledProps
	extends HTMLProps<HTMLHeadingElement>,
		ExtendableTitleRow {
	title: string
	titleRowClassName?: string
}

/**
 * Component for something that is titled. Makes sure that the heading depth is
 * always in the correct order. Even when parent is removed every children
 * heading will be updated.
 *
 * @author Vilhelm
 */
export const Titled: FC<TitledProps> = ({
	title,
	children,
	titleRow,
	titleRowClassName,
	...props
}): JSX.Element => {
	const depthContext = useContext(HeadingDepthContext)

	const depth = clamp(depthContext.depth, 1, 6)
	const headingElement = (
		<header>
			{createElement(`h${depth}`, {
				children: title,
				...props
			})}
		</header>
	)

	const headingDepthProvider = (content: ReactNode) => (
		<HeadingDepthContext.Provider value={{depth: depthContext.depth + 1}}>
			{content}
		</HeadingDepthContext.Provider>
	)

	return (
		<>
			{titleRow ? (
				<Row {...classes(titleRowClassName ? titleRowClassName : undefined)}>
					{headingElement}
					{headingDepthProvider(titleRow)}
				</Row>
			) : (
				headingElement
			)}
			{headingDepthProvider(children)}
		</>
	)
}
