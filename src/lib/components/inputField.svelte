<script lang="ts">
	export let id: string;
	export let name: string;
	export let type: string;
	export let placeholder: string;
</script>

<label for={id}>
	<input
		{id}
		{name}
		{type}
		{placeholder}
		class="w-full p-2 border-2 border-black rounded-lg outline-0 shadow-box focus:shadow-none"
	/>
</label>
