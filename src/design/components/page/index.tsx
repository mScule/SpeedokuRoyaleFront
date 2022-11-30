import {FC, ReactNode} from "react"
import {Main} from "@/design/components/main"

import "./page.css"

interface PageProps {
	title?: string
	children: ReactNode
}

export const Page: FC<PageProps> = ({title, children}) => (
	<Main title={title} className="page padding-small">
		{children}
	</Main>
)
