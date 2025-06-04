<script lang="ts">
	import jitkaImage from '$lib/assets/images/jitka.png?enhanced';
	import drReynoldsImage from '$lib/assets/images/dr-reynolds.png?enhanced';
	import Icon from '@iconify/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import Locations from '$lib/components/ui/Locations.svelte';
	import { onDestroy, onMount, tick } from 'svelte';
	import { companyInfo } from '$lib/data';
	import { goBack } from '$lib/utils';
	import { PUBLIC_BOOKING_LINK } from '$env/static/public';
	import { animateMainStagger } from '$lib/animations';
	import SocialLinks from '$lib/components/ui/SocialLinks.svelte';

	function getDirectionsUrl(address: string) {
		return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
	}

	let gsapInstance: any;
	let ScrollTriggerInstance: any;

	const initializeAnimations = () => {
		tick();
		gsapInstance.from('.jitka-section', {
			duration: 1,
			opacity: 0,
			y: 20,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.jitka-section',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.jitka-section-photo', {
			duration: 1,
			opacity: 0,
			x: 10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.jitka-section',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.doctor-section', {
			duration: 1,
			opacity: 0,
			y: 20,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.doctor-section',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.doctor-section-photo', {
			duration: 1,
			opacity: 0,
			x: -10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.doctor-section',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.locations-section', {
			duration: 1,
			opacity: 0,
			y: 50,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.locations-section',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.booking-section', {
			duration: 1,
			opacity: 0,
			y: 10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.booking-section',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			import('gsap').then(({ gsap }) => {
				import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
					gsap.registerPlugin(ScrollTrigger);
					gsapInstance = gsap;
					ScrollTriggerInstance = ScrollTrigger;
					initializeAnimations();
					ScrollTriggerInstance.refresh();
				});
			});
			animateMainStagger();
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined' && ScrollTriggerInstance) {
			ScrollTriggerInstance.getAll().forEach((trigger: any) => trigger.kill());
		}
	});
</script>

<svelte:head>
	<title>About : {companyInfo.name}</title>
	<meta
		name="description"
		content={`Our story and team, and locations. ${companyInfo.name} is dedicated to providing top-notch services to our clients.`}
	/>
</svelte:head>

<Button on:click={goBack} variant="outline" class="flex items-center gap-2">
	<Icon icon="akar-icons:arrow-left" class="" />
	<div class="uppercase">Back</div>
</Button>
<div class="mt-5 w-full">
	<!-- JITKA SECTION -->
	<div class="jitka-section h-full w-full rounded-lg bg-background p-2 shadow-lg md:border md:p-5">
		<div class="animate-item w-full text-3xl font-bold md:text-5xl">JITKA ZAVADILOVA, RN</div>
		<div class="animate-item w-full text-2xl font-thin text-muted-foreground md:text-3xl">
			Registered Nurse / Co-founder
		</div>

		<!-- MOBILE IMAGE -->
		<div class="mt-2 flex items-start">
			<enhanced:img
				src={jitkaImage}
				alt="Jitka Zavadilova"
				class="jitka-section-photo mr-5 h-40 w-32 rounded-lg bg-fuchsia-300 object-cover object-top shadow-xl md:mt-5 md:hidden md:w-1/3"
			></enhanced:img>

			<div class="animate-item flex-1 text-xl text-muted-foreground md:mt-2">
				Based in Orange County and Los Angeles, California.
			</div>
		</div>

		<!-- DESKTOP IMAGE -->
		<enhanced:img
			src={jitkaImage}
			alt="Jitka Zavadilova"
			class="jitka-section-photo ml-5 mt-5 hidden w-full rounded-lg bg-fuchsia-300 object-cover shadow-xl md:float-right md:mt-5 md:flex md:w-1/3"
		></enhanced:img>

		<div class="my-5">
			<div class="flex items-center gap-2">
                                <a data-sveltekit-preload-data href="/diensten" class="animate-item w-full">
					<Button variant="outline" class="flex w-full items-center gap-2 uppercase">
						<div>Services</div>
						<Icon icon="bx:plus-medical" class="h-5 w-5" />
					</Button>
				</a>

                                <a data-sveltekit-preload-data href="/galerij" class="animate-item w-full">
					<Button variant="outline" class="flex w-full items-center gap-2 uppercase">
						<div>Patient Gallery</div>
						<Icon icon="lucide:gallery-vertical-end" class="h-5 w-5" />
					</Button>
				</a>
			</div>
		</div>

		<div class="animate-item mt-5 flex flex-col md:flex-row md:items-start">
			<div class=" flex-1 p-2 text-xl font-light">
                                <p>
                                        Jitka is een gecertificeerde verpleegkundige injector en geregistreerde verpleegkundige, een
                                        vergunning in zowel de VS als Europa. Oorspronkelijk uit Tsjechië begon Jitka haar
                                        verpleegcarrière op 18-jarige leeftijd en werkte ze zes jaar lang op een medisch-surgische
                                        afdeling voordat ze naar de Verenigde Staten verhuisde. Haar passie voor esthetiek bloeide
                                        op tijdens het werk onder een top cosmetisch dermatoloog en plastisch chirurg in Beverly
                                        Hills. Sindsdien heeft ze haar vaardigheden aangescherpt met talloze certificeringen,
                                        waaronder Juvederm, Restylane, Botox en Dysport.
                                </p>

                                <p class="mt-5">
                                        Jitka blinkt uit in het combineren van fillers met huidverzorgingsrituelen en gelooft dat
                                        deze perfecte combinatie helpt om een jeugdige en natuurlijke huid te behouden. Ze zet zich
                                        in om ieders unieke schoonheid te zien en te versterken door persoonlijke plannen te maken
                                        voor een look die het beste bij je eigen kenmerken past.
                                </p>
			</div>
		</div>
	</div>

	<!-- DOCTOR SECTION -->
	<div
		class="doctor-section mt-20 h-full rounded-lg bg-background p-2 shadow-lg md:mt-36 md:border md:p-5"
	>
		<div class="w-full text-3xl font-bold md:text-5xl">DR. STEVEN REYNOLDS</div>
		<div class="w-full text-2xl font-thin text-muted-foreground md:text-3xl">
			Medical Director / Co-founder
		</div>
		<!-- MOBILE IMAGE -->
		<div class="mt-2 flex items-start">
			<enhanced:img
				src={drReynoldsImage}
				alt="Dr. Steven Reynolds"
				class="jitka-section-photo mr-5 h-40 w-32 scale-x-[-1] rounded-lg bg-teal-300 object-cover object-top shadow-xl md:mt-5 md:hidden md:w-1/3"
			></enhanced:img>

			<div class="flex-1 text-xl text-muted-foreground md:mt-2">
                                Gevestigd in Long Beach, Californië.
			</div>
		</div>

		<!-- DESKTOP IMAGE -->
		<enhanced:img
			src={drReynoldsImage}
			alt="Dr. Steven Reynolds"
			class="doctor-section-photo mr-5 mt-5 hidden w-full scale-x-[-1] rounded-lg bg-teal-300 object-cover shadow-xl md:float-left md:mt-5 md:flex md:w-1/3"
		></enhanced:img>
		<div class="mt-5 flex flex-col md:flex-row md:items-start">
			<div class="flex-1 p-2 text-xl font-light">
                                <p>
                                        Ontdek ongeëvenaarde gezondheidszorg met Dr. Reynolds, een doorgewinterde board
                                        gecertificeerde specialist in huisartsgeneeskunde in het bruisende Long Beach, Californië.
                                        Met meer dan 29 jaar toewijding brengt Dr. Reynolds een schat aan ervaring en expertise
                                        naar zijn patiënten.
                                </p>

                                <p class="mt-5">
                                        Als hoofdonderzoeker bij CNS (Collaborative Neuroscience Research) sinds 2010 leidt Dr.
                                        Reynolds baanbrekende onderzoeken in Long Beach. Daarnaast is hij universitair hoofddocent
                                        aan de gerenommeerde University of Irvine College of Medicine, waar hij toekomstige
                                        medische professionals opleidt.
                                </p>
			</div>
		</div>
	</div>
</div>

<div class="mt-20 md:mt-48">
	<Locations />
</div>

<!-- BOOKING -->
<div class="booking-section my-40 flex w-full flex-col items-center p-2 md:p-5">
        <div class="mb-5 text-5xl font-bold md:text-7xl">Boeken</div>
	<a href={PUBLIC_BOOKING_LINK}>
		<Button size="lg" variant="default" class="flex w-full items-center gap-2 text-xl md:w-fit">
                        <div class="uppercase">Plan een consult</div>
			<Icon icon="akar-icons:arrow-right" class="h-5 w-5" />
		</Button>
	</a>
</div>
