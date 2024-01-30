// @ts-nocheck
import { Post } from '$lib/database.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
	const post = Post.find(params.id);

	if (!post) throw new redirect(301, '/posts');

	return { post };
}
