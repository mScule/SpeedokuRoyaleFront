/**
 * The entry point for React.
 */

import React from "react"
import ReactDOM from "react-dom/client"

import "@/design/config.css"
import "@/design/theme.css"
import "@/design/classes.css"
import "./main.css"

import {PreferenceProvider} from "./contexts/preference-context"
import {App} from "@/app"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<PreferenceProvider>
			<App />
		</PreferenceProvider>
	</React.StrictMode>
)
