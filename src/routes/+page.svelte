<script>
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

  /** @type {import('./$types').PageData} */
  export let data;
  $: ({ user } = data);

	if (browser) {
    (async () => {
      const res = await fetch('/', { cache: 'reload' });
      const data = await res.json();
      console.log('fetch with cache reload', data);
      await invalidateAll();
      console.log('invalidated', user);
    })();
  }
</script>

<form method="POST" use:enhance>
  <input name=name bind:value={user.name}>
  <button> Submit </button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 10rem;
    gap: 0.25rem;
  }
</style>
