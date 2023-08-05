<script lang="ts">
	import '../app.css';
	import { auth as authStore, isLoggedIn } from '@store';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { initFirebase } from '$lib/firebase';
	import { goto } from '$app/navigation';

	onMount(() => {
		const { auth } = initFirebase();
		const unsub = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const { uid } = user;
				console.log(uid, 'uid');
				const data = await fetch('https://test.buyhatke.com/isLoggedIn', {
					body: uid,
					method: 'POST'
				});
				if (data) {
					console.log(data);
				}
				isLoggedIn.set(true);
			} else {
				console.log('user logged out probably');
				isLoggedIn.set(false);
			}
		});
		// goto('/login');
	});
</script>

<slot />
