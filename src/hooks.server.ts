import { json } from '@sveltejs/kit';
import portfolio from '$lib/data/portfolio.json';

export async function handle({ event, resolve }) {
	if (event.url.pathname === '/resume') {
		return new Response(null, {
			status: 303,
			headers: { location: '/MattDunbar_Resume.pdf' }
		});
	}

	if (event.url.pathname === '/portfolio.json') {
		return json(portfolio);
	}

	return await resolve(event);
}
