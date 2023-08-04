<script>
	import { signOut } from 'firebase/auth';
	import { initFirebase } from '$lib/firebase';

	async function logout() {
		const { auth } = initFirebase();
		signOut(auth)
			.then(() => {
				console.log('user signed out');
			})
			.catch((e) => {
				console.log(e);
			});
	}
</script>

<button on:click={logout}>Logout</button>
