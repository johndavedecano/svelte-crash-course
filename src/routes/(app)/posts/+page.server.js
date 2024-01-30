// @ts-nocheck
import { User, Post } from '$lib/database.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const userId = cookies.get('user_id');

	const posts = Post.getByUser(userId);

	return { userPosts: posts };
}
