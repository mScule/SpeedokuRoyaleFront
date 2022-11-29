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
import {classList} from "@/design-system/utils/class-list"

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
				<Row
					className={classList([
						titleRowClassName ? titleRowClassName : undefined
					])}>
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
