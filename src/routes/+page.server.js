import { user } from './+server';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		user.name = data.get('name')?.toString() || user.name;
		return { user };
	},
};
