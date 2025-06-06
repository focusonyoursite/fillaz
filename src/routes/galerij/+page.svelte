<script lang="ts">
	import Icon from '@iconify/svelte';
	import { results } from '$lib/carousel-images';
	import { onMount } from 'svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import LazyImage from '$lib/components/ui/LazyImage.svelte';
	import { companyInfo } from '$lib/data';
	import { goBack } from '$lib/utils';
	import { animateTitle, animateMainStagger } from '$lib/animations';

	let showModal = false;
	let modalImageSrc = '';

	function openModal(src: any) {
		modalImageSrc = src;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	onMount(() => {
		animateTitle();
		animateMainStagger();
	});
</script>

<svelte:head>
        <title>Voor & Na : {companyInfo.name}</title>
        <meta
                name="description"
                content={`Voor- en naresultaten van onze cliënten bij ${companyInfo.name}.`}
        />
</svelte:head>

<div>
        <Button on:click={goBack} variant="outline" class="flex items-center gap-2">
                <Icon icon="akar-icons:arrow-left" class="" />
                <div class="uppercase">Terug</div>
        </Button>
        <div class="animate-title mt-5 flex items-center gap-5 md:mt-10">
                <div class="text-5xl font-bold uppercase">galerij</div>
		<!-- <Icon icon="ri:gallery-view-2" class="text-3xl md:text-5xl" /> -->
	</div>

        <div class="animate-item mt-5 text-xl text-muted-foreground">
                <span class="font-semibold text-foreground">Resultaten die voor zichzelf spreken.</span>
                Bekijk enkele voor- en naresultaten van onze cliënten. Neem gerust
                <a class="text-foreground underline" href="/contact">contact met ons op</a> als je vragen hebt over specifieke
                behandelingen.
        </div>

	<div
		class="animate-item my-5 grid grid-cols-2 gap-2 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-4"
	>
		{#each results as result}
			<div class="group">
				<button
					class="h-full w-full cursor-pointer rounded-lg object-cover shadow-lg transition-all duration-300 md:group-hover:-translate-y-[1px] md:group-hover:saturate-[110%]"
					on:click={() => openModal(result.image)}
					on:keydown={(e) => e.key === 'Enter' && openModal(result.image)}
				>
					{#if !result.image}
						<div class={`flex h-64 w-full items-center justify-center rounded-lg border`}>
							<Icon icon="eos-icons:loading" class="text-5xl text-muted-foreground" />
						</div>
					{:else}
						<enhanced:img
							src={result.image}
							alt="result"
							class="h-full w-full rounded-lg object-cover"
						></enhanced:img>
					{/if}
				</button>
			</div>
		{/each}
	</div>

	{#if showModal}
		<Modal imageSrc={modalImageSrc} onClose={closeModal} />
	{/if}
</div>
