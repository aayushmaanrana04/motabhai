<script>
	import '../app.css';
	import { auth as authStore, isLoggedIn } from '@store';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { initFirebase } from '$lib/firebase';

	onMount(() => {
		const { auth } = initFirebase();
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				authStore.set(user);
				isLoggedIn.set(true);
			}
		});

		unsub();
	});

	authStore.subscribe((user) => {
		//api post
		// console.log(user?.uid);
	});
</script>

<slot />
