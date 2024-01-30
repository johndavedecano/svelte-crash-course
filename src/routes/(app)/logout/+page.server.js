// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	cookies.delete('user_id', { path: '/' });
	throw redirect(302, '/');
}
