<script lang="ts">
	import Pagination from '../components/Paginations.svelte';
	import { onMount } from 'svelte';
	let data = [
		{
			walletAddress: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
			score: 11
		},
		{
			walletAddress: '0xd034739c2ae807c70cd703092b946f62a49509d1',
			score: 22
		},
		{
			walletAddress: '0xD034739C2aE807C70Cd703092b946f62a49509D1',
			score: 33
		},
		{
			walletAddress: '0xd034739c2ae807c70cd703092b946f62a49509d1',
			score: 44
		},
		{
			walletAddress: '0x40b38765696e3d5d8d9d834d8aad4bb6e418e489',
			score: 55
		},
		{
			walletAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
			score: 66
		},
		{
			walletAddress: '0xd034739c2ae807c70cd703092b946f62a49509d1',
			score: 44
		},
		{
			walletAddress: '0x40b38765696e3d5d8d9d834d8aad4bb6e418e489',
			score: 55
		},
		{
			walletAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
			score: 66
		},
		{
			walletAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
			score: 66
		},
		{
			walletAddress: '0xd034739c2ae807c70cd703092b946f62a49509d1',
			score: 44
		},
		{
			walletAddress: '0x40b38765696e3d5d8d9d834d8aad4bb6e418e489',
			score: 55
		},
		{
			walletAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
			score: 66
		},
		{
			walletAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
			score: 66
		},
		{
			walletAddress: '0xd034739c2ae807c70cd703092b946f62a49509d1',
			score: 44
		},
		{
			walletAddress: '0x40b38765696e3d5d8d9d834d8aad4bb6e418e489',
			score: 55
		},
		{
			walletAddress: 'archie',
			score: 68
		},
		{
			walletAddress: '0x40b38765696e3d5d8d9d834d8aad4bb6e418e489',
			score: 55
		},
		{
			walletAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
			score: 66
		},
		{
			walletAddress: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
			score: 66
		},
		{
			walletAddress: '0xd034739c2ae807c70cd703092b946f62a49509d1',
			score: 44
		},
		{
			walletAddress: '0x40b38765696e3d5d8d9d834d8aad4bb6e418e489',
			score: 55
		},
		{
			walletAddress: 'archie',
			score: 68
		}
	];
	let currentPage: number = 1;
	const itemsPerPage = 10; // Change this as needed
	let totalItems = data.length; /* Total number of items */
	let totalPages = Math.ceil(totalItems / itemsPerPage);
	let currentData: object = [];
	$: {
		console.log(totalItems);
	}
	function updateCurrentData() {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		currentData = data.slice(startIndex, endIndex);
	}

	onMount(updateCurrentData);

	function handlePageChange(newPage) {
		currentPage = newPage;
		updateCurrentData();
	}
</script>

<div class="flex flex-col justify-center h-full text-white">
	<table class="max-w-full mt-5 table">
		<div class=" max-w-full flex items-center justify-center">
			<div class="flex flex-col">
				<div class="-my-2 pb-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					<div
						class="align-middle inline-block shadow overflow-hidden sm:rounded-lg border
                        border-zinc-800"
					>
						<table class="w-screen-lg max-w-full text-base">
							<thead>
								<tr class="hover:bg-neutral-900">
									<th
										class="px-6 py-3 text-left uppercase tracking-wider border-b border-zinc-800 font-light"
									>
										<button> Walet Address </button>
									</th>
									<th
										class="px-6 py-3 text-right leading-4 uppercase tracking-wider border-b border-zinc-800 font-extralight"
									>
										<button> Score </button>
									</th>
								</tr>
							</thead>
							<tbody class="text-sm">
								{#each currentData as { walletAddress, score }}
									<tr class="hover:bg-neutral-900">
										<td
											class="pr-20 md:pr-40 lg:pr-52 xl:pr-96 pl-5 py-5 font-medium whitespace-no-wrap leading-5 border-b border-zinc-800"
										>
											{walletAddress}
										</td>
										<td
											class="pr-5 pl-20 md:pl-40 lg:pl-96 xl:pl-80 py-5 whitespace-no-wrap leading-5 border-b border-zinc-800"
										>
											{score}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
						<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
					</div>
				</div>
			</div>
		</div>
	</table>
</div>
