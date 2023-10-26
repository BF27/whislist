<script lang="ts">
	export let text: string;
	export let bgColor: string;
	export let handler: () => void = () => {};
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
</script>

{#if bgColor === 'accent'}
	<button
		class="border-2 border-black outline-2 outline-black bg-accent px-4 uppercase font-bold rounded-lg shadow-box active:shadow-none shadow-black transition-all duration-100"
		{type}
		on:click={() => {
			handler();
		}}
	>
		{text}
	</button>
{:else if bgColor === 'primary'}
	<button
		class="border-2 border-black outline-2 outline-black bg-primary px-4 uppercase font-bold rounded-lg shadow-box active:shadow-none shadow-black transition-all duration-100"
		{type}
		on:click={() => {
			handler();
		}}
	>
		{text}
	</button>
{:else if bgColor === 'secondary'}
	<button
		class="border-2 border-black outline-2 outline-black bg-secondary px-4 uppercase font-bold rounded-lg shadow-box active:shadow-none shadow-black transition-all duration-100"
		{type}
		on:click={() => {
			handler();
		}}
	>
		{text}
	</button>
{/if}

<style>
	button:active {
		transform: translate(3px, 5px);
	}
</style>
