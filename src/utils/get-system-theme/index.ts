import { Theme } from "@/types/theme";

/**
 * Gets users system theme.
 *
 * @author Vilhelm
 */
export const getSystemTheme = (): Theme =>
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
		? Theme.Dark
		: Theme.Light
