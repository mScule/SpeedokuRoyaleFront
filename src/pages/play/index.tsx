import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate, Translate} from "@/i18n"
import {Unity, useUnityContext} from "react-unity-webgl"

export const Play: FC = () => {
	const translate = useTranslate()
	const {unityProvider, loadingProgression, isLoaded} = useUnityContext({
		loaderUrl: "/sr-d-build/Build/sr-d-build.loader.js",
		dataUrl: "/sr-d-build/Build/sr-d-build.data.gz",
		frameworkUrl: "/sr-d-build/Build/sr-d-build.framework.js.gz",
		codeUrl: "/sr-d-build/Build/sr-d-build.wasm.gz"
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
