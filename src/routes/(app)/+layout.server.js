// @ts-nocheck
import { User } from '$lib/database.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const userId = cookies.get('user_id');

	if (!userId) return { user: null };

	const user = User.find(userId);

	return { user };
}
