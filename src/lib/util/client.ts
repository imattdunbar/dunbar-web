import { browser } from '$app/environment'

/**
 * Returns true if running in iOS web app mode from homescreen or Chrome app
 */
export function isAppMode(): boolean {
	if (browser) {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		const nav = window.navigator as any
		return nav.standalone === true || window.matchMedia('(display-mode: standalone)').matches
	} else {
		return false
	}
}
