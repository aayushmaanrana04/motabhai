<script>
	import { signOut } from 'firebase/auth';
	import { initFirebase } from '$lib/firebase';
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	async function logout() {
		const { auth } = initFirebase();
		signOut(auth)
			.then(() => {
				console.log('user signed out');
				goto('/');
			})
			.catch((e) => {
				console.log(e);
			});
	}
</script>

<Button on:click={logout} class="bg-accent text-gray-800">Logout</Button>
