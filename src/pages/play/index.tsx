import {FC} from "react"
import {Navigateable} from "@/components/navigateable"
import {useTranslate} from "@/i18n"
import {Unity, useUnityContext} from "react-unity-webgl"

console.log("PATH TO LOADER:", import.meta.env.VITE_UNITY_LOADER_URL)

export const Play: FC = () => {
	const translate = useTranslate()
	const {unityProvider, loadingProgression, isLoaded} = useUnityContext({
		loaderUrl:    import.meta.env.VITE_UNITY_LOADER_URL,
		dataUrl:      import.meta.env.VITE_UNITY_DATA_URL,
		frameworkUrl: import.meta.env.VITE_UNITY_FRAMEWORK_URL,
		codeUrl:      import.meta.env.VITE_UNITY_CODE_URL
	})
	return (
		<Navigateable title={translate("title-play")}>
			{!isLoaded && (
				<p>
					{
						`${translate("loading")} ... ` +
						`${Math.round(loadingProgression * 100)}%`
					}
				</p>
			)}
			<Unity
				unityProvider={unityProvider}
				style={{
					visibility: isLoaded ? "visible" : "hidden",
					width:  "100%",
					height: "auto",
					borderRadius: "var(--roundness-small)"
				}}
			/>
		</Navigateable>
	)
}
