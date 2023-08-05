<script>
	import { goto } from '$app/navigation';
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

<body class="bg-bg min-h-screen">
	<Header />
	<!-- {#if $isLoggedIn} -->
		<slot />
	<!-- {:else} -->
		<!-- <p>loading...</p> -->
	<!-- {/if} -->
</body>
