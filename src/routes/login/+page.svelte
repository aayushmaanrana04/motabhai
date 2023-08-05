<script lang="js">
	import { goto } from '$app/navigation';
	import { initFirebase } from '$lib/firebase';
	import { isLoggedIn } from '@store';
	import { signInWithPopup } from 'firebase/auth';
	import { Button } from 'flowbite-svelte';

	async function login() {
		try {
			const { auth, provider } = initFirebase();
			const response = await signInWithPopup(auth, provider);
			console.log(response.user.email);
			if (response) {
				isLoggedIn.set(true);
				goto('/dashboard');
			}
		} catch (e) {
			console.log(e);
		}
	}
</script>

<section>
	<div />
	<span class="flex items-center justify-center">
		<Button class="p-4 text-bold m-auto bg-slate-300" on:click={login}>Login with Google</Button>
	</span>
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
