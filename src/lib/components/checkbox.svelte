<script lang="ts">
	export let id: string;
	export let name: string;
	export let text: string;
	export let required: boolean = false;
</script>

<div class="flex items-center gap-3 mx-4">
	<input
		{id}
		{name}
		type="checkbox"
		class="relative peer appearance-none w-5 h-5 border-2 border-black rounded-md bg-white checked:bg-body focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
		{required}
	/>
	<label for={id}>
		{text}
	</label>
	<svg
		class="absolute w-5 h-5 mt-1 hidden peer-checked:block pointer-events-none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="3"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<polyline points="20 6 9 17 4 12" />
	</svg>
</div>

<style>
</style>
