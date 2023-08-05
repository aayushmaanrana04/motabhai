<script lang="ts">
	import { onMount } from 'svelte';
	import Chain from '../../components/Chain.svelte';
	import Table from '../../components/table.svelte';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	import { gameData, polyData } from '@store';

	let dropdownOpen1 = false;
	let dropdownOpen2 = false;
	let data = [
		{ chainName: 'POLYGON', isDisabled: false },
		{ chainName: 'BNB', isDisabled: true },
		{ chainName: 'SOLANA', isDisabled: true }
	];
	let selection: number = 0;
	let filterSelect: number = 1;
	let filters = ['Score', 'Amount', 'Number of Transactions'];

	const handleExport = async () => {
		const params = new URLSearchParams();
		params.append('pageNo', String(3));
		const response = await fetch('https://test.buyhatke.com/airshot/categories/csv/downloadData', {
			body: params,
			method: 'POST'
		});
		if (response) {
			console.log('sent');
		}
	};

	onMount(() => {
		getPolygon();
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

	const getPolygon = async () => {
		const params = new URLSearchParams();
		params.append('pageNo', String(1));
		const response = await fetch('https://test.buyhatke.com/airshot/categories/chain/polygon', {
			body: params,
			method: 'POST'
		});
		const { data } = await response.json();
		if (data) {
			polyData.set(data);
		}
	};

	const getFilter = async () => {
		const params = new URLSearchParams();
		params.append('pageNo', String(1));
		const response = await fetch('https://test.buyhatke.com/airshot/categories/chain/polygon', {
			body: params,
			method: 'POST'
		});
		const { data } = await response.json();
		if (data) {
			//do something
		}
	};
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
	<div class=" py-10 text-start mr-auto ml-8 xl:ml-20">
		<h1 class="text-3xl pb-1">Welcome Back!</h1>
		<p class="text-gray-400">Here's a list of Chain Wallet Address</p>
	</div>

	<div class="">
		<div class="flex gap-2">
			<!-- chain select  -->
			<Button
				class="focus:ring-0 text-md text-black  flex justify-between {selection < 5
					? 'bg-slate-100'
					: 'bg-slate-600'} p-1 px-4 rounded"
			>
				<Chevron>
					{#if selection > 5}
						<span class="text-lg p-2 mr-auto">Chains</span>
					{:else}
						<span class="text-lg p-2 mr-auto">{data.at(selection)?.chainName}</span>
					{/if}
				</Chevron>
			</Button>
			<Dropdown bind:open={dropdownOpen1} class="overflow-y-auto overflow-x-hidden">
				{#each data as { chainName, isDisabled }, index (index)}
					<DropdownItem
						on:click={() => {
							selection = Number(index);
							dropdownOpen1 = false;
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
			<!-- filter select  -->
			<Button class="focus:ring-0 text-md text-black flex justify-between bg-slate-100 rounded">
				<Chevron>
					<span class="text-lg p-1 mr-auto">{filters.at(filterSelect)}</span>
				</Chevron>
			</Button>
			<Dropdown bind:open={dropdownOpen2} class="overflow-y-auto overflow-x-hidden">
				{#each filters as item, index (index)}
					<DropdownItem
						on:click={() => {
							filterSelect = Number(index);
							dropdownOpen2 = false;
						}}
						class="flex gap-2 items-center disabled:opacity-40"
					>
						<div class="w-full flex gap-2">
							{item}
						</div>
					</DropdownItem>
				{/each}
			</Dropdown>

			<Button
				class="bg-green-500 text-white ml-auto"
				on:click={() => {
					handleExport();
				}}>Export</Button
			>
		</div>

		<Table myData={$polyData} {filterSelect} />
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
