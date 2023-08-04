<script lang="js">
	import { goto } from '$app/navigation';
	import { initFirebase } from '$lib/firebase';
	import { signInWithPopup } from 'firebase/auth';

	async function login() {
		try {
			const { auth, provider } = initFirebase();
			const response = await signInWithPopup(auth, provider);
			console.log(response.user.uid);
			// goto('/dashboard');
		} catch (e) {
			console.log(e);
		}
	}
</script>

<section>
	<div />
	<button class="loginwithgoogle" on:click={login}>Login with Google</button>
</section>

<style>
	section {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 3fr 2fr;
	}
	div {
		background: #000;
	}
	.loginwithgoogle {
		margin: auto;
		padding: 1em;
		font-size: larger;
	}
</style>
