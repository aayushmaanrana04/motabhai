<script lang="ts">
	import Score from './score.svelte';

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
		}
	];
</script>

<div class="flex flex-col justify-center h-auto text-white">
	<table class="max-w-full mt-5 table">
		<div class=" max-w-full flex items-center justify-center">
			<div class="flex flex-col">
				<div class="-my-2 pb-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					<div
						class="align-middle inline-block shadow overflow-hidden sm:rounded-lg border border-zinc-800"
					>
						<table class="w-screen-lg bg-black text-white text-base">
							<thead>
								<tr class="hover:bg-neutral-900">
									<th
										class="px-6 py-3 text-left uppercase tracking-wider border-b border-zinc-800 font-light"
									>
										<button> Wallet Address </button>
									</th>
									<th
										class="px-6 py-3 text-right leading-4 uppercase tracking-wider border-b border-zinc-800 font-extralight"
									>
										<button> Score </button>
									</th>
								</tr>
							</thead>
							<tbody class="text-xs md:text-sm">
								{#each data as { walletAddress, score }}
									<tr class="hover:bg-neutral-900">
										<td
											class="pl-3 sm:pl-5 sm:pr-24 md:pr-40 lg:pr-52 xl:pr-96 py-5 font-medium whitespace-no-wrap leading-5 border-b border-zinc-800"
										>
											{walletAddress}
										</td>
										<td
											class="pr-5 sm:pl-24 md:pl-40 lg:pl-96 xl:pl-80 py-5 whitespace-no-wrap leading-5 border-b border-zinc-800"
										>
											<span class="flex gap-4 text-xs items-center justify-center mr-4"
												><span class="relative z-30">{score}</span><span class="absolute z-20"
													><Score progress={score} /></span
												></span
											>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</table>
</div>
