/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return validRoutes.includes(param);
}

const validRoutes = ['bio', 'android', 'ios', 'misc', 'web'];
