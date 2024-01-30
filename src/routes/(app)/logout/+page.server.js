// @ts-nocheck
import { redirect } from '@sveltejs/kit';

const wait = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 150);
	});
};

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	cookies.delete('user_id', { path: '/' });

	await wait();

	throw redirect(301, '/login');
}
