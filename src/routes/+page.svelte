<script>
	import Button from '$lib/components/button.svelte';
</script>

<h1 class="text-3xl font-bold underline">Hello World!</h1>
<Button text={'text'} bgColor={'accent'} handler={() => console.log('clicked')} />
