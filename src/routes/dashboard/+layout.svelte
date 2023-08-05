<script>
	import { auth as authStore, isLoggedIn } from '@store';
	import { onMount } from 'svelte';
	import Header from '../../components/Header.svelte';

	let isReady = false;
	onMount(() => {
		if (!$isLoggedIn) {
			// goto('/login');
		}
		authStore.subscribe((user) => {
			if (user) {
				isReady = true;
			} else {
				isReady = false;
			}
		});
	});
	$: console.log($isLoggedIn);
</script>

<!-- {#if $isLoggedIn} -->
<Header />
<slot />
<!-- {:else} -->
<!-- <p>loading...</p> -->
<!-- {/if} -->
