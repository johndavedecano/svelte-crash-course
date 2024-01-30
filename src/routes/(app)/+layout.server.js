// @ts-nocheck
import { User, Post } from '$lib/database.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const userId = cookies.get('user_id');

	const posts = Post.get();

	if (!userId) return { user: null, posts };

	const user = User.find(userId);

	return { user, posts };
}
