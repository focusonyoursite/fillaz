<script lang="ts">
	import type { PageData } from './$types.js';
	import Form from '$lib/components/ui/Form.svelte';
	import { companyInfo } from '$lib/data.js';
	export let data: PageData;
</script>

<svelte:head>
	<title>Contact : {companyInfo.name}</title>
        <meta
                name="description"
                content={`Neem contact met ons op voor meer informatie over onze diensten. We zijn toegewijd aan het leveren van eersteklas diensten aan onze klanten.`}
        />
</svelte:head>
<div
	class="flex h-full w-full flex-col justify-center gap-5 rounded-lg bg-background p-5 sm:min-h-full md:flex-row md:justify-center md:border md:shadow-lg"
>
	<Form data={data.form} />
</div>
