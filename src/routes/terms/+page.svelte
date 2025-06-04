<script lang="ts">
	export let data;
	import { companyInfo } from '$lib/data';
</script>

<svelte:head>
	<title>Voorwaarden van services</title>
	<meta name="description" content="Terms of Service for our website." />
</svelte:head>

<main class="mx-auto max-w-4xl p-8">
	<h1 class="mb-4 text-3xl font-bold">Voorwaarden van services</h1>

	<p class="mb-4">Laatst bijgewerkt: Mon 15 juli 2024.</p>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold">1. Inleiding</h2>
		<p>
			Welcome to {companyInfo.name}! These terms of service govern your use of our site. By
			accessing or using our site, you agree to comply with these terms.
		</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold">2. Informatie die we verzamelen</h2>
		<p>We verzamelen persoonlijke informatie die u ons verstrekt wanneer u ons formulier invult, inclusief
Uw naam, e -mailadres, telefoonnummer en bericht.</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold">3. Gebruik van informatie</h2>
		<p>We gebruiken de informatie die we verzamelen om op uw vragen te reageren, diensten te bieden en te verbeteren
onze website.We kunnen uw informatie ook gebruiken om contact met u op te nemen met updates en promotie
materialen.</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold">4. Informatie delen</h2>
		<p>We delen uw persoonlijke informatie niet met derden, behalve indien nodig om te voorzien
onze diensten of zoals wettelijk vereist.</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold">5. Beveiliging</h2>
		<p>We nemen redelijke maatregelen om de informatie die u ons verstrekt te beschermen tegen ongeautoriseerd
toegang en gebruik.</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold">6. Wijzigingen in deze voorwaarden</h2>
		<p>We kunnen deze voorwaarden van tijd tot tijd bijwerken.Wij zullen u op de hoogte stellen van wijzigingen door de
Nieuwe voorwaarden op onze site.</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-2 text-2xl font-semibold">7. Neem contact met ons op</h2>
		<p>Als u vragen heeft over deze voorwaarden, neem dan contact met ons op via<a
				href={`mailto:${companyInfo.email}`}
				class="underline">{companyInfo.email}</a
			>.</p>
	</section>
</main>
