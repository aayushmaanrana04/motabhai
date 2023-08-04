<script lang="ts">
	import Logout from '../../components/logout.svelte';
	import { auth as authStore } from '@store';
</script>

<p>dashboard</p>
<p>{$authStore?.uid}</p>
<Logout />
