import { json } from '@sveltejs/kit';
import { Post } from '$lib/database.js';
import joi from 'joi';
import { v4 } from 'uuid';

/** @type {import('./$types').RequestHandler} */
export const DELETE = async ({ request, cookies, params }) => {
	const userId = cookies.get('user_id');

	const post = Post.find(params.id);

	if (post.userId !== userId) return json({ message: 'not allowed' }, { status: 401 });

	Post.remove(params.id);

	return json({ success: true });
};
