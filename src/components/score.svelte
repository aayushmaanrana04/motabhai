<script lang="ts">
	import { onMount } from 'svelte';

	export let progress: number;
	const angle = (360 * progress) / 100;

	let background = '';
	// Adapt the logic according to the approach
	// let background = `radial-gradient(black 50%, transparent 51%),
	// conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
	// conic-gradient(orange 0deg, yellow 90deg, lightgreen 180deg, green);`;

	$: {
		if (progress / 100 <= 0.5) {
			background = `radial-gradient(black 50%, transparent 51%),
	conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
	conic-gradient(lightcoral 0deg, red 90deg, red 180deg, maroon);`;
		} else if (progress / 100 >= 0.6) {
			// background = 'green';
			background = `radial-gradient(black 50%, transparent 51%),
	conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
	conic-gradient(lightgreen 0deg, green 90deg, green 180deg, greenyellow);`;
		} else {
			background = `radial-gradient(black 50%, transparent 51%),
	conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
	conic-gradient(yellow 0deg, yellow 90deg, yellow 180deg, orange);`;
		}
	}

	$: cssVarStyles = `--background:${background}`;
</script>

<div id="progress-circle" style={cssVarStyles} />

<!-- {progress/100} -->

<style>
	#progress-circle {
		background: var(--background);
		border-radius: 50%;
		width: 32px;
		height: 32px;
		transition: all 500ms ease-in;
		will-change: transform;
	}
</style>
