<script lang="ts">
	import { companyInfo } from '$lib/data';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '@iconify/svelte';
	import { animateMainStagger, animateTitle } from '$lib/animations';
	import { onMount } from 'svelte';
	import cherryImage from '$lib/assets/images/financing/cherry.png';
	import affirmImage from '$lib/assets/images/financing/affirm2.png';
	import { Badge } from '$lib/components/ui/badge/index.js';

	onMount(() => {
		animateMainStagger();
		animateTitle();
	});
</script>

<svelte:head>
        <title>Financiering : {companyInfo.name}</title>
        <meta name="financiering" content={`${companyInfo.name} checkout.`} />
</svelte:head>
<div class="flex items-center justify-between gap-5">
        <Button href={'/'} variant="outline" class="flex items-center gap-2">
                <Icon icon="akar-icons:arrow-left" class="" />
                <div class="uppercase">Terug</div>
        </Button>
</div>
<div class="animate-title mt-5 flex items-center gap-5 md:mt-10">
        <div class="text-5xl font-bold uppercase">financiering</div>
</div>
<div class="animate-item mt-5 text-xl text-muted-foreground">
        <span class="font-semibold text-foreground">Bereik je schoonheidsdoelen zonder te wachten</span> – geniet
        van onze flexibele financieringsopties, zodat je behandelingen betaalbaar en toegankelijk zijn wanneer het jou uitkomt.
</div>
<!-- <Icon icon="ri:gallery-view-2" class="text-3xl md:text-5xl" /> -->

<div class="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
	<a
		data-sveltekit-preload-data
		data-sveltekit-reload
                href="/financiering/cherry"
		class="animate-item group relative h-full rounded-lg border"
	>
		<img
			src={cherryImage}
			class="h-full w-full rounded-lg bg-red-400 object-cover md:h-full"
			alt="cherry"
		/>
		<!-- Overlay background with no text -->
		<div
			class="absolute inset-0 rounded-lg bg-background opacity-0 transition-opacity duration-300 group-hover:opacity-80"
		></div>

                <!-- "Get Started" text, unaffected by the overlay opacity -->
                <span
                        class="absolute inset-0 hidden items-center justify-center rounded-lg border border-muted-foreground text-5xl font-bold text-foreground group-hover:flex"
                >
                        Begin nu
                </span>

                <Badge variant="default" size="lg" class="absolute left-2 top-2 rounded-lg text-lg shadow">
                        Cherry Financiering
                </Badge>
	</a>

	<a
		data-sveltekit-preload-data
		data-sveltekit-reload
                href="/financiering/affirm"
		class="animate-item group relative h-full rounded-lg border"
	>
		<img
			src={affirmImage}
			class="h-full w-full rounded-lg bg-red-400 object-cover md:h-full"
			alt="affirm"
		/>
		<!-- Overlay background with no text -->
		<div
			class="absolute inset-0 rounded-lg bg-background opacity-0 transition-opacity duration-300 group-hover:opacity-80"
		></div>

                <!-- "Get Started" text, unaffected by the overlay opacity -->
                <span
                        class="absolute inset-0 hidden items-center justify-center rounded-lg border border-muted-foreground text-5xl font-bold text-foreground group-hover:flex"
                >
                        Begin nu
                </span>

                <Badge variant="default" size="lg" class="absolute left-2 top-2 rounded-lg text-lg shadow">
                        Affirm Financiering
                </Badge>
	</a>
</div>
