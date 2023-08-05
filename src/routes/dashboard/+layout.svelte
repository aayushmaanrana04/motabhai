<script>
	import { auth as authStore, isLoggedIn } from '@store';
	import { onMount } from 'svelte';
	import Header from '../../components/Header.svelte';
	import { gameData } from '@store';

	let isReady = false;
	onMount(() => {
		authStore.subscribe((user) => {
			if (user) {
				isReady = true;
			} else {
				isReady = false;
			}
		});
		// getGame();
	});

	
	$: console.log($isLoggedIn);
</script>

<!-- {#if $isLoggedIn} -->
<body class="text-black dark:text-white bg-white dark:bg-black">
	<Header/>
	<slot />
</body>
<!-- {:else} -->
<!-- <p>loading...</p> -->
<!-- {/if} -->
