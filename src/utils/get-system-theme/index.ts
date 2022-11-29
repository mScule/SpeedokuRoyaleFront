import { Theme } from "@/types/theme";

export const getSystemTheme = (): Theme =>
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
		? Theme.Dark
		: Theme.Light
