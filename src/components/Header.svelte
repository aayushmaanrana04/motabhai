<script>
	import Logout from './logout.svelte';
	import SideDrawer from './sideDrawer.svelte';

	let hideDrawer = true;
	const close = () => {
		hideDrawer = true;
	};
</script>

<div class="h-16 flex">
	<div class="mx-6 w-full p-4 flex justify-between items-center">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class="h-10 w-12 border-2 rounded-lg"
			on:click={() => {
				hideDrawer = false;
			}}
			on:keydown
		/>
		<Logout />
	</div>
</div>
<SideDrawer {hideDrawer} {close} />
