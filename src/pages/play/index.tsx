import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate} from "@/i18n"
import {classes} from "@/design/utils/classes"
import {Unity, useUnityContext} from "react-unity-webgl"
import {Section} from "@/design/components/section"

export const Play: FC = () => {
	const translate = useTranslate()
	const {unityProvider} = useUnityContext({
		loaderUrl: "/game-build/Build/sr-d-build.loader.js",
		dataUrl: "/game-build/Build/sr-d-build.data.gz",
		frameworkUrl: "/game-build/Build/sr-d-build.framework.js.gz",
		codeUrl: "/game-build/Build/sr-d-build.wasm.gz"
	})
	return (
		<Navigateable title={translate("title-play")}>
			{/*<Unity unityProvider={unityProvider} />*/}
			<Section
				title="Construction site!"
				{...classes("warning", "uppercase", "border-medium", "padding-small")}>
				<p>Game goes here</p>
			</Section>
		</Navigateable>
	)
}
