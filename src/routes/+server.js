import { json } from '@sveltejs/kit';

export let user = { name: 'John' };

/** @type {import('./$types').RequestHandler} */
export function GET({ setHeaders }) {
	setHeaders({ 'cache-control': 'max-age=9999999' });
	return json(user);
}

