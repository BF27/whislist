<script lang="ts">
	import InputField from '$lib/components/inputField.svelte';
	import Checkbox from '$lib/components/checkbox.svelte';
	import Button from '$lib/components/button.svelte';

	const handleSubmit = (event: Event) => {
		if (!(event.target instanceof HTMLFormElement)) {
			return;
		}
		const formEl: HTMLFormElement = event.target;
		const formData = new FormData(formEl);
	};
	
</script>

<form
	class="flex flex-col gap-5"
	on:submit={(e) => {
		handleSubmit(e);
	}}
>
	<div class="flex flex-col gap-4">
		<InputField id={'loginEmailInput'} name={'login-email'} type={'email'} placeholder={'Email'} />
		<InputField
			id={'loginPwdInput'}
			name={'login-pwd'}
			type={'password'}
			placeholder={'Password'}
		/>
		<Checkbox id={'loginCheck'} name={'login-check'} text={'Stay logged in'} required={true} />
	</div>
	<div class="flex justify-end">
		<Button text={'login'} bgColor={'secondary'} type={'submit'} />
	</div>
</form>
