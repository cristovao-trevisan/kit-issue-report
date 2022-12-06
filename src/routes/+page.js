/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('/');
	const user = await res.json();
	return { user };
}
