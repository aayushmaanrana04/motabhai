<script>
	import { signOut } from 'firebase/auth';
	import { initFirebase } from '$lib/firebase';
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	async function logout() {
		try {
			const { auth } = initFirebase();
			const data = await fetch('airshot/logout', {
				method: 'POST'
			});
			if (data) {
				await signOut(auth);
			}
		} catch (e) {
			console.log(e);
		}
	}
</script>

<Button on:click={logout} class="focus:ring-0 bg-white text-black px-3 py-2 text-xs">Logout</Button>
