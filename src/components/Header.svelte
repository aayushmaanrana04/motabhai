<script l>
	import Logout from './logout.svelte';
	import SideDrawer from './sideDrawer.svelte';
	import Logo from '../images/airshot.png';
	import moon from '../images/moon.svg';
	let hideDrawer = true;
	const close = () => {
		hideDrawer = true;
	};
</script>

<div class="h-16 flex border-b border-zinc-800">
	<div class="mx-2 w-full px-4 py-5 flex justify-between items-center text-white">
		<img src={Logo} alt="logo" class="w-32 h-8" />

		<button
			class="h-10 w-12 border-2 rounded-lg xs:flex hidden"
			on:click={() => {
				hideDrawer = false;
			}}
			on:keydown
		/>
		<div class="flex gap-5 text-sm items-center xs:hidden">
			<a href="/documentatiom" class="text-gray-400 hover:text-white">Documentation</a>
			<a href="/pricing" class="text-gray-400 hover:text-white">Pricing</a>
			<img src={moon} alt="logo" class="w-10 h-5" />

			<Logout />
		</div>
	</div>
</div>
<SideDrawer {hideDrawer} {close} />
