<script lang="ts">
	import Logout from '../../components/logout.svelte';
	import { auth as authStore } from '@store';
	import {
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let data = [
		{
			walletAddress: 'x012',
			score: 11
		},
		{
			walletAddress: 'x013',
			score: 22
		},
		{
			walletAddress: 'x014',
			score: 33
		},
		{
			walletAddress: 'x015',
			score: 44
		},
		{
			walletAddress: 'x016',
			score: 55
		},
		{
			walletAddress: 'x017',
			score: 66
		}
	];
</script>

<div class="flex justify-center items-center h-full">
	<table class="w-full m-16 table">
		<div class="p-4 w-full flex">
			<Button class="text-gray-800 border border-1 rounded-t-md border-white hover:bg-slate-500">Games</Button>
			<Button class="bg-accent text-gray-800">Chains</Button>
		</div>
		<tr class="">
			<th>walletAddress</th>
			<th>score</th>
		</tr>
		{#each data as { walletAddress, score }}
			<tr class="bg-rowEven">
				<td>{walletAddress}</td>
				<td>{score}</td>
			</tr>
		{/each}
	</table>
</div>

<!-- 
<p>dashboard</p>
<p>{$authStore?.uid}</p>
<Logout /> -->

<style>
	.table {
		background: #1a1a1a;
		border: 2px solid rgb(38, 38, 38);
		border-radius: 2em;
	}
</style>
