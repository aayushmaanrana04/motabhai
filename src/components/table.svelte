<script lang="ts">
	import Score from './score.svelte';
	import { gameData } from '@store';
	import type { gameDataType } from '@store';
	import { onMount } from 'svelte';

	export let myData: gameDataType[] = [];
	// onMount(() => {
	// 	data = $gameData;
	// });
	

	
</script>

<div class="flex flex-col justify-center h-full text-black dark:text-white">
	<table class="max-w-full mt-5 table">
		<div class=" max-w-full flex items-center justify-center">
			<div class="flex flex-col">
				<div class="-my-2 pb-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					<div
						class="align-middle inline-block shadow overflow-hidden sm:rounded-lg border
                        border-gray-200 dark:border-zinc-800"
					>
						<table class="w-screen-lg max-w-full text-base">
							<thead>
								<tr class="hover:bg-gray-100 dark:hover:bg-neutral-900">
									<th
										class="px-6 py-3 text-left uppercase tracking-wider border-b border-gray-200 dark:border-zinc-800 font-light"
									>
										<button> Walet Address </button>
									</th>
									<th
										class="px-6 py-3 text-right leading-4 uppercase tracking-wider border-b border-gray-200 dark:border-zinc-800 font-extralight"
									>
										<button> Score </button>
									</th>
								</tr>
							</thead>
							<tbody class="text-sm">
								{#each Object.entries(myData) as [index, { id, walletAddress, amount, token, chainName, numberOfTransactions, score }]}
									<tr class="hover:bg-gray-100 dark:hover:bg-neutral-900">
										<td
											class="pr-20 md:pr-40 lg:pr-52 xl:pr-96 pl-5 py-5 font-medium whitespace-no-wrap leading-5 border-b border-gray-200 dark:border-zinc-800"
										>
											{walletAddress}
										</td>
										<td
											class="pr-5 pl-20 md:pl-40 lg:pl-96 xl:pl-80 py-5 whitespace-no-wrap leading-5 border-b border-gray-200 dark:border-zinc-800"
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
