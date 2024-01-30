// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const isLoggedIn = cookies.get('user_id');

	if (isLoggedIn) throw redirect(302, '/');

	return {};
}
