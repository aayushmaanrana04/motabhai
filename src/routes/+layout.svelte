<script>
	import { auth as authStore } from '@store';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { initFirebase } from '$lib/firebase';

	onMount(() => {
		const { auth } = initFirebase();
		onAuthStateChanged(auth, (user) => {
			authStore.set(user);
		});
	});

	authStore.subscribe((user) => {
		//api post
		// console.log(user?.uid);
	});
</script>

<slot />
