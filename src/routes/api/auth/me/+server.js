import { json } from '@sveltejs/kit';
import { User } from '$lib/database.js';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, cookies }) => {
	const user = User.find(cookies.get('user_id'));
	return json({ success: true, data: user });
};
