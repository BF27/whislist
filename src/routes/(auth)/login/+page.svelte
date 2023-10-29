<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import LoginForm from './components/loginForm.svelte';
	import { signIn } from '@auth/sveltekit/client';

</script>

<div class="flex flex-col gap-4 border-2 outline-2 rounded-lg border-black shadow-box p-4 bg-white">
	<header>
		<h2 class="font-semibold uppercase text-center">Please log in</h2>
	</header>
	<LoginForm />
</div>

<div class="flex flex-col w-full">
	<header class="w-full">
		<h2 class="font-semibold text-center">Or Continue with:</h2>
	</header>
	<div class="flex justify-between">
		<Button text={'GitHub'} bgColor={'primary'} handler={() => signIn('github')} />
		<Button text={'Google'} bgColor={'primary'} handler={() => signIn('google')} />
	</div>
</div>
