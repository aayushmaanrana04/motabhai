<script lang="ts">
	import Logout from '../../components/logout.svelte';
	import { auth as authStore } from '@store';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import Chain from '../../components/Chain.svelte';
	import Game from '../../components/Game.svelte';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	let dropdownOpen = false;
	let selectedChainValue: String = '';
	let data = [{ chainName: 'ERC20' }, { chainName: 'USDT20' }, { chainName: 'TETH20' }];
	let handleSelect = (value: String) => {
		selectedChainValue = value;
	};
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
	<div class=" py-10 text-start mr-auto ml-8 xl:ml-20">
		<h1 class="text-3xl pb-1">Welcome Back!</h1>
		<p class="text-gray-400">Here's a list of Chain Wallet Address</p>
	</div>

	<div>
		<Tabs style="pill" class="  text-base  px-0  mx-0 my-0" contentClass="px-0 py-0">
			<Button class="px-0 py-0 text-base focus:ring-0 " on:mouseenter={() => (dropdownOpen = true)}>
				<TabItem
					title="Select chain"
					defaultClass="text-xl"
					inactiveClasses="text-black dark:text-white p-2 m-0"
					activeClasses="text-black dark:text-white p-2"
				>
					<Chain />
				</TabItem>
			</Button>

			<Dropdown
				bind:open={dropdownOpen}
				class="w-32 p-1 space-y-1 text-sm border border-gray-200 dark:border-gray-800"
			>
				{#each data as chain}
					<DropdownItem on:click={() => handleSelect(chain.chainName)}
						>{chain.chainName}</DropdownItem
					>
				{/each}
			</Dropdown>

			<TabItem
				open
				title="Game"
				defaultClass="text-xl"
				inactiveClasses="text-black dark:text-white p-2 m-0"
				activeClasses="text-black dark:text-white p-2"
			>
				<Game />
			</TabItem>
		</Tabs>
	</div>
</div>

<!-- <Button class="text-gray-800 border border-1 rounded-t-md border-white hover:bg-slate-500"
				>Games</Button
			>
			<Button class="bg-accent text-gray-800">Chains</Button>
		</div>
		<tr class="">
			<th>walletAddress</th>
			<th>score</th>
		</tr>
		{#each data as { walletAddress, score }}
			<tr class="bg-rowEven">
				<td>{walletAddress}</td>
				<td>{score}<Score progress={score} /></td>
			</tr>
		{/each} -->
<!-- 
<p>dashboard</p>
<p>{$authStore?.uid}</p>
<Logout /> -->

<style>
</style>
