import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate, Translate} from "@/i18n"
import {Unity, useUnityContext} from "react-unity-webgl"

export const Play: FC = () => {
	const translate = useTranslate()
	const {unityProvider, loadingProgression, isLoaded} = useUnityContext({
		loaderUrl:    "/sr-webgl/Build/sr-webgl.loader.js",
		dataUrl:      "/sr-webgl/Build/sr-webgl.data",
		frameworkUrl: "/sr-webgl/Build/sr-webgl.framework.js",
		codeUrl:      "/sr-webgl/Build/sr-webgl.wasm"
	})
	return (
		<Navigateable title={translate("title-play")}>
			{!isLoaded && (
				<p>
					<Translate id="loading" />
					... {Math.round(loadingProgression * 100)}%
				</p>
			)}
			<Unity
				unityProvider={unityProvider}
				style={{
					visibility: isLoaded ? "visible" : "hidden",
					width: "100%",
					height: "auto",
					borderRadius: "var(--roundness-small)"
				}}
			/>
		</Navigateable>
	)
}
