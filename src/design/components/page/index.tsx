import {FC, ReactNode} from "react"
import {Main} from "@/design/components/main"

import "./page.css"

interface PageProps {
	title?: string
	children: ReactNode
}

/**
 * Component that holds the main content of the page.
 * There should always be only one of these visible at the time.
 *
 * @author Vilhelm
 */
export const Page: FC<PageProps> = ({title, children}) => (
	<Main title={title} className="page padding-small">
		{children}
	</Main>
)
