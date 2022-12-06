/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('/', { cache: 'reload' });
	const user = await res.json();
	return { user };
}
