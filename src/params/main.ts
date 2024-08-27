import type { ParamMatcher } from '@sveltejs/kit'

export const match = ((param) => {
	const validRoutes = ['bio', 'android', 'ios', 'misc', 'web']
	return validRoutes.includes(param)
}) satisfies ParamMatcher
