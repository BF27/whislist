<script>
	import Button from '$lib/components/button.svelte';
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	export let data;
	console.log(data)
</script>

{#if $page.data.session?.user}
	<p>Hello {$page.data.session.user.name}</p>
	<Button text={'SignOut'} bgColor={'accent'} handler={() => signOut()}>Sign out</Button>
{:else}
	<p>You are not signed in</p>
{/if}
