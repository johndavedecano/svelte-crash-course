import { json } from '@sveltejs/kit';
import { User } from '$lib/database.js';
import joi from 'joi';

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request, cookies }) => {
	const body = await request.json();

	const schema = joi.object({
		email: joi.string().email().required(),
		password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
	});

	const result = schema.validate(body);

	if (result.error) return json({ success: false, data: result.error }, { status: 422 });

	const user = User.find(body.email);

	if (!user) return json({ success: false, message: 'invalid account' }, { status: 401 });

	if (user.password !== body.password) {
		return json({ success: false, message: 'invalid credentials' }, { status: 401 });
	}

	cookies.set('user_id', user.id, { path: '/' });

	return json({ success: true, data: { user_id: user.id } });
};
