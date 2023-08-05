<script lang="ts">
	import { onMount } from 'svelte';
	import Chain from '../../components/Chain.svelte';
	import Table from '../../components/table.svelte';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	import { gameData } from '@store';

	let dropdownOpen = false;
	let selectedChainValue: String = '';
	let data = [
		{ chainName: 'POLYGON', isDisabled: false },
		{ chainName: 'BNB', isDisabled: true },
		{ chainName: 'SOLANA', isDisabled: true }
	];
	let handleSelect = (value: String) => {
		selectedChainValue = value;
	};
	let selection: number = 10;

	const handleExport = async () => {
		const params = new URLSearchParams();
		params.append('pageNo', String(3));
		const response = await fetch('https://test.buyhatke.com/airshot/categories/csv', {
			body: params,
			method: 'POST'
		});
		if (response) {
			console.log('sent');
		}
	};

	onMount(() => {
		getGame();
	});

	const getGame = async () => {
		const params = new URLSearchParams();
		params.append('pageNo', String(1));
		const response = await fetch('https://test.buyhatke.com/airshot/categories/chain/game', {
			body: params,
			method: 'POST'
		});
		const { data } = await response.json();
		if (data) {
			gameData.set(data);
		}
	};
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
	<div class=" py-10 text-start mr-auto ml-8 xl:ml-20">
		<h1 class="text-3xl pb-1">Welcome Back!</h1>
		<p class="text-gray-400">Here's a list of Chain Wallet Address</p>
	</div>

	<div class="">
		<div class="flex">
			<Button
				class="focus:ring-0 text-md text-black  flex justify-between {selection < 5
					? 'bg-slate-100'
					: 'border border-1'} p-2 px-4 rounded"
			>
				<Chevron>
					{#if selection > 5}
						<span class="text-lg p-2 mr-auto">Chains</span>
					{:else}
						<span class="text-lg p-2 mr-auto">{data.at(selection)?.chainName}</span>
					{/if}
				</Chevron>
			</Button>
			<Dropdown bind:open={dropdownOpen} class="overflow-y-auto overflow-x-hidden">
				{#each data as { chainName, isDisabled }, index (index)}
					<DropdownItem
						on:click={() => {
							selection = Number(index);
							dropdownOpen = false;
						}}
						class="flex gap-2 items-center disabled:opacity-40"
						disabled={isDisabled}
					>
						<div class="w-full flex gap-2">
							{chainName}
							{isDisabled ? '(coming soon)' : ''}
						</div>
					</DropdownItem>
				{/each}
			</Dropdown>
			<Button
				class={selection === 10 ? 'bg-slate-100 text-black' : 'border border-1'}
				on:click={() => {
					selection = 10;
				}}>Games</Button
			>
		</div>

		{#if selection <= 5}
			<Chain />
		{:else if selection === 10}
			<Table myData={$gameData} />
		{/if}
	</div>

	<Button
		on:click={() => {
			handleExport;
		}}>Export</Button
	>
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
