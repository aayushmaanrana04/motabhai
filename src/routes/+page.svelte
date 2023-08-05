<script>
	import { onMount } from 'svelte';
	import Header from '../components/landingPage/header.svelte';
	import { goto } from '$app/navigation';
	onMount(() => {
		goto('/login');
	});
</script>

<Header />

<section>hello wrld</section>
