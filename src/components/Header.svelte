<script l>
	import Logout from './logout.svelte';
	import SideDrawer from './sideDrawer.svelte';
	import Logo from '../images/airshot.png';
	import LightLogo from '../images/airshotLight.png';
	import moon from '../images/moon.svg';
	import sun from '../images/sun.svg';
	let hideDrawer = true;
	const close = () => {
		hideDrawer = true;
	};
	export let darkMode = false;

	const toggleDarkMode = () => {
		darkMode = !darkMode;
		document.body.classList.toggle('dark', darkMode);
	};
</script>

<div class="h-16 flex border-b border-gray-200 dark:border-zinc-800">
	<div class="mx-2 w-full px-4 py-5 flex justify-between items-center text-white">
		<img src={darkMode ? Logo : LightLogo} alt="logo" class="w-32 h-8" />

		<button
			class="h-10 w-12 border-2 rounded-lg xs:flex hidden"
			on:click={() => {
				hideDrawer = false;
			}}
			on:keydown
		/>
		<div class="flex gap-5 text-sm items-center xs:hidden">
			<a
				href="/documentatiom"
				class=" text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
				>Documentation</a
			>
			<a
				href="/pricing"
				class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
				>Pricing</a
			>
			<button on:click={toggleDarkMode}
				><img src={darkMode ? moon : sun} alt="logo" class="w-10 h-8 dark:w-10 dark:h-5" /></button
			>

			<Logout />
		</div>
	</div>
</div>
<SideDrawer {hideDrawer} {close} />
