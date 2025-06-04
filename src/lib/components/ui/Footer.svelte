<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getDirectionsUrl } from '$lib/utils';

	const currentYear = new Date().getFullYear();
	import { companyInfo } from '$lib/data';

	let showFooter = false;

	onMount(() => {
		setTimeout(() => {
			showFooter = true;
		}, 500);
	});
</script>

{#if showFooter}
	<footer class="mx-auto w-full border-t bg-background py-5" in:fade={{ duration: 1000 }}>
		<!-- Mobile responsive layout -->
		<div
			class="mx-auto flex max-w-5xl flex-col justify-between space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0"
		>
			<div class="text-center lg:text-left">
				<div
					class="mx-auto flex w-full max-w-5xl items-center justify-center lg:mx-0 lg:justify-start"
				>
                                <a href="#" class="text-sm">
                                        &copy; {currentYear}
                                        {companyInfo.name}. Alle rechten voorbehouden.
                                </a>
				</div>

				<div
					class="mx-auto flex w-full items-center justify-center text-xs lg:mx-0 lg:justify-start"
				>
                                        Een S.Reynolds Medical Corporation
				</div>
			</div>

			<div class="text-center lg:text-left">
                                <h3 class="text-xl font-semibold">Locaties:</h3>
				<div class="mt-2">
					<h4 class="font-semibold">Long Beach</h4>
					<a
						href={getDirectionsUrl(companyInfo.locations.losAngeles.address)}
						class="text-muted-foreground"
					>
						{companyInfo.locations.losAngeles.address}
					</a>
				</div>
				<div class="mt-2">
					<h4 class="font-semibold">Orange County</h4>

					<a
						href={getDirectionsUrl(companyInfo.locations.orangeCounty.address)}
						class="text-muted-foreground"
					>
						{companyInfo.locations.orangeCounty.address}
					</a>
				</div>
			</div>

			<!-- Business Hours -->
			<div class="text-center lg:text-left">
                                <h3 class="text-xl font-semibold">Openingstijden:</h3>
				<div class="mt-2">
					<h4 class="font-semibold">Long Beach</h4>
                                        <p class="text-muted-foreground">Donderdag: 12:00 - 19:00</p>
                                        <p class="text-muted-foreground">Zaterdag: 10:00 - 17:00</p>
				</div>
				<div class="mt-2">
					<h4 class="font-semibold">Orange County</h4>
                                        <p class="text-muted-foreground">Maandag: 9:00 - 17:00</p>
                                        <p class="text-muted-foreground">Woensdag: 12:00 - 19:00</p>
                                        <p class="text-muted-foreground">Vrijdag: 9:00 - 14:00</p>
				</div>
			</div>
		</div>
	</footer>
{/if}
