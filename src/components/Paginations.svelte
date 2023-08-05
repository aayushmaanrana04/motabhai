<script lang="ts">
	export let currentPage;
	export let totalPages;
	export let onPageChange;

	function goToPage(page) {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	}
</script>

<div class="flex justify-center mt-4">
	<nav aria-label="Pagination">
		<ul class="flex items-center space-x-2">
			<li>
				<button
					class="px-3 py-1 rounded-full bg-gray-300 hover:bg-gray-400"
					on:click={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
			</li>
			<li>
				<button
					class="px-3 py-1 rounded-full bg-gray-300 hover:bg-gray-400"
					on:click={() => goToPage(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</li>
		</ul>
	</nav>
</div>

<style>
	/* You can add additional styling here if needed */
</style>
