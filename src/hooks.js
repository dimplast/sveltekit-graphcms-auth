import { parse } from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {

	const cookies = parse(request.headers.cookie || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	request.locals.user = jwt ? JSON.parse(jwt) : null;
	return await resolve(request);
}

export async function handleError({ error, request }) {
		
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
	return request.locals.user
		? {
				user: {
					name: request.locals.user.name,
					email: request.locals.user.email,
					avatar: request.locals.user.avatar
				}
		  }
		: {};
}

