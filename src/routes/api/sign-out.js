
import { parse, serialize } from 'cookie';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ headers: { cookie } }) {


	return {
		status: 302,
		headers: {
			'Set-Cookie': serialize('jwt', '', {
				path: '/',
				expires: new Date(0),
			}),
		},
	};
}