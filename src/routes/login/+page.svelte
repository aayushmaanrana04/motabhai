<script lang="js">
	import { goto } from '$app/navigation';
	import { initFirebase } from '$lib/firebase';
	import { isLoggedIn } from '@store';
	import { signInWithPopup } from 'firebase/auth';
	import { Button } from 'flowbite-svelte';
	import Airshot from '../../images/airshot.png';
	import backImg from '../../images/Header.jpg';
	import Header from '../../components/Header.svelte';

	let emailData = '';

	async function login() {
		try {
			const { auth, provider } = initFirebase();
			const response = await signInWithPopup(auth, provider);
			console.log(response);
			if (response) {
				localStorage.setItem('uid', response.user.uid);
				const { uid, email, displayName } = response.user;
				const data = await fetch('/airshot/categories/auth/login', {
					body: JSON.stringify({ uid, email, displayName }),
					method: 'POST'
				});
				if (data) {
					console.log(data);
					goto('/dashboard');
				}
				// isLoggedIn.set(true);
			}
		} catch (e) {
			console.log(e);
		}
	}

	const handleSubmit = () => {
		if (emailData) {
			goto('/dashboard');
		}
	};
</script>

<div
	class="border border-1 border-gray-200 absolute top-0 left-0 bottom-0 right-0 m-4 rounded-lg pointer-events-none z-10"
/>

<img src={Airshot} class="absolute top-0 right-10 z-40 ml-8 mt-8" width="96" />

<section>
	<div
		class="flex items-end p-6 bg-bg m-4 relative top-0 bottom-0 left-0 rounded-l-lg"
		style={`background-image:url(${backImg});     background-position: left;
		"`}
	>
		<span class="text-black bg-slate-50 p-3 w-min font-light text-5xl mb-8 ml-6"
			>"Active blockchain gaming address management"</span
		>
	</div>
	<div class="flex flex-col justify-center gap-2 text-white">
		<div class="flex flex-col text-center gap-4">
			<!-- <span class="text-xl font-medium">Create an account </span> -->
			<!-- <span class="text-sm">Enter your email below to create your account </span>
			<input
				class="w-64 mx-auto p-2 rounded bg-bg border border-1 border-zinc-900 text-white outline-0"
				placeholder="name@example.com"
				type="email"
				bind:value={emailData} -->
			<!-- /> -->
		</div>
		<span class="flex items-center justify-center">
			<Button class=" p-4 text-bold m-auto bg-slate-300 rounded text-black" on:click={login}
				>Login with Google</Button
			>
		</span>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 2fr 2fr;
	}
	div {
		/* background: #000; */
	}
	.loginwithgoogle {
		margin: auto;
		padding: 1em;
		font-size: larger;
	}
</style>
