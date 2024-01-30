import { json } from '@sveltejs/kit';
import { Post } from '$lib/database.js';
import joi from 'joi';
import { v4 } from 'uuid';

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request, cookies }) => {
	const body = await request.json();

	const schema = joi.object({
		title: joi.string().required(),
		content: joi.string().required()
	});

	const result = schema.validate(body);

	if (result.error) return json({ success: false, data: result.error }, { status: 422 });

	const userId = cookies.get('user_id');

	const post = {
		id: v4(),
		userId,
		title: body.title,
		content: body.content
	};

	Post.add(post);

	return json({ success: true, data: post });
};
