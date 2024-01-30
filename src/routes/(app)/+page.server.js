// @ts-nocheck
import { Post } from '$lib/database.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const posts = Post.get();

	return { posts };
}
