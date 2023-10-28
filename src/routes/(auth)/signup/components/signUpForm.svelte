<script lang="ts">
	const handleSubmit = (event: Event) => {
		console.log('registered');
	};
</script>

<form
	class="flex flex-col gap-5"
	on:submit={(e) => {
		handleSubmit(e);
	}}
/>
