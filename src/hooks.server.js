// @ts-nocheck
import { json, redirect } from '@sveltejs/kit';

const isFetchRequest = (headers) => {
	return (
		headers.get('content-type') === 'application/json' ||
		headers.get('accept') === 'application/json' ||
		headers.has('x-requested-with')
	);
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const pathname = event.url.pathname;

	if (pathname.startsWith('/posts') || pathname.startsWith('/api/post')) {
		const userId = event.cookies.get('user_id');

		if (!userId) {
			if (isFetchRequest(event.request.headers)) {
				return json({ message: 'unauthenticated' }, { status: 401 });
			}
			throw redirect(302, '/login');
		}
	}

	return await resolve(event);
}
