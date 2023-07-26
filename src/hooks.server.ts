export async function handle({ event, resolve }) {
	if (event.url.pathname === '/resume') {
		return new Response(null, {
			status: 303,
			headers: { location: '/MattDunbar_Resume.pdf' }
		});
	}

	return await resolve(event);
}
