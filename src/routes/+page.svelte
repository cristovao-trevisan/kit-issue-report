<script>
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

  /** @type {import('./$types').PageData} */
  export let data;

	if (browser) invalidateAll();
</script>

<form method="POST" use:enhance>
  <input name=name bind:value={data.user.name}>
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
