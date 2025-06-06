<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { fade, slide } from 'svelte/transition';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from '$lib/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Icon from '@iconify/svelte';
	import { enhance, applyAction } from '$app/forms';
	import { toast } from 'svelte-sonner';
	import Logo from '$lib/assets/images/bbj-logo.png';
	import { onDestroy, onMount, tick } from 'svelte';
	import { companyInfo } from '$lib/data';
	import * as Select from '$lib/components/ui/select';
	import Button from './button/button.svelte';

	export let data: SuperValidated<Infer<FormSchema>>;
	let isSubmitting = false;

	$: selectedType = $formData.type
		? {
				label: $formData.type,
				value: $formData.type
			}
		: undefined;

	$: selectedLocation = $formData.location
		? {
				label: $formData.location,
				value: $formData.location
			}
		: undefined;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData } = form;

	let gsapInstance: any;
	let ScrollTriggerInstance: any;

	const initializeAnimations = async () => {
		await tick(); // Wait for the DOM to update

		gsapInstance.from('.contact-header', {
			duration: 1,
			opacity: 0,
			y: -10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.contact-header',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.contact-form', {
			duration: 1,
			opacity: 0,
			y: 10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: '.contact-form',
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		});

		gsapInstance.from('.contact-title-icon', {
			duration: 1,
			opacity: 0,
			y: -10,
			scale: 0.8,
			ease: 'power2.out'
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
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined' && ScrollTriggerInstance) {
			ScrollTriggerInstance.getAll().forEach((trigger: any) => trigger.kill());
		}
	});
</script>

<div class="flex w-full items-center justify-center">
	<div class="w-full max-w-md">
		<div class="contact-header flex flex-col items-start gap-2">
			<!-- <img
				src={Logo}
				alt="Jitka"
				class="mb-5 hidden h-16 w-16 rounded-full border shadow-lg md:mx-auto md:flex"
			/> -->
			<div class="flex items-center gap-5">
				<div class="text-5xl font-bold uppercase md:text-7xl">Contact</div>
				<Icon
					icon="material-symbols:android-chat"
					class="contact-title-icon text-5xl md:text-7xl"
				/>
			</div>
                        <div class="text-2xl font-thin">
                                Heb je een vraag of wil je een consult of afspraak plannen? Vul het formulier in, we nemen snel
                                contact met je op.
                        </div>

			<!--

			<div class="mt-5 flex items-center text-xl">
				<div>Or, send us a</div>
				<a href="sms:9499935222" class="ml-2">
					<Button variant="outline" class="flex items-center gap-2 uppercase">
						<div>text message</div>
					</Button>
				</a>
      </div>
-->
		</div>
	</div>
</div>

<div class="mx-auto w-full max-w-md">
	<form
		method="POST"
		action="/contact?"
		class="contact-form"
		use:enhance={({ cancel }) => {
			if (isSubmitting) return cancel(); // Prevent multiple submissions
			isSubmitting = true;

			return async ({ result, update }) => {
				if (result.type === 'success') {
					toast.success('Form Submitted Successfully!', {
						description: "We'll get back to you as soon as possible, typically within 24 hours."
					});
				} else {
					toast.error('Failed to Submit Form', {
						description: 'Please check your input and try again.'
					});
				}

				// await update();
				applyAction(result);

				isSubmitting = false;
			};
		}}
	>
		<div class="mb-2 flex items-center gap-2 md:gap-5">
			<Form.Field {form} name="firstName" class="w-full">
				<Form.Control let:attrs>
                                        <Form.Label>Voornaam</Form.Label>
					<Input {...attrs} bind:value={$formData.firstName} />
				</Form.Control>
			</Form.Field>

			<Form.Field {form} name="lastName" class="w-full">
				<Form.Control let:attrs>
                                        <Form.Label>Achternaam</Form.Label>
					<Input {...attrs} bind:value={$formData.lastName} />
				</Form.Control>
			</Form.Field>
		</div>

		<div class="flex items-center gap-2 md:gap-5">
			<Form.Field {form} name="firstName" class="w-full">
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="lastName" class="w-full">
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<Form.Field {form} name="email">
			<Form.Control let:attrs>
                                <Form.Label>E-mail</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="phone">
			<Form.Control let:attrs>
                                <Form.Label>Telefoon</Form.Label>
				<Input {...attrs} bind:value={$formData.phone} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<div class="mb-2 flex items-center gap-2 md:gap-5">
			<Form.Field {form} name="type" class="w-full">
				<Form.Control let:attrs>
                                        <Form.Label>Berichttype</Form.Label>
					<Select.Root
						name="messageType"
						selected={selectedType}
						onSelectedChange={(v) => {
							v && ($formData.type = v.value);
						}}
					>
						<Select.Trigger {...attrs} class="w-full">
                                                        <Select.Value class="text-lg" placeholder="Kies type" />
						</Select.Trigger>
						<Select.Content>
                                                        <Select.Item class="text-lg" label="Consult" value="Consultation"
                                                                >Consult</Select.Item
                                                        >
                                                        <Select.Item class="text-lg" label="Afspraak" value="Appointment"
                                                                >Afspraak</Select.Item
                                                        >
                                                        <Select.Item class="text-lg" label="Algemene Vraag" value="General Question"
                                                                >Algemene Vraag</Select.Item
                                                        >
						</Select.Content>
					</Select.Root>
					<input hidden bind:value={$formData.type} name={attrs.name} />
				</Form.Control>
			</Form.Field>

			<Form.Field {form} name="location" class="w-full">
				<Form.Control let:attrs>
                                        <Form.Label>Beste locatie</Form.Label>
					<Select.Root
						name="location"
						selected={selectedLocation}
						onSelectedChange={(v) => {
							v && ($formData.location = v.value);
						}}
					>
						<Select.Trigger {...attrs} class="w-full">
                                                        <Select.Value class="text-lg" placeholder="Kies locatie" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item class="text-lg" label="Orange County" value="Orange County"
								>Orange County</Select.Item
							>
							<Select.Item class="text-lg" label="Long Beach" value="Long Beach"
								>Long Beach</Select.Item
							>
						</Select.Content>
					</Select.Root>
					<input hidden bind:value={$formData.location} name={attrs.name} />
				</Form.Control>
			</Form.Field>
		</div>

		<div class="flex items-center gap-2 md:gap-5">
			<Form.Field {form} name="type" class="w-full">
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="location" class="w-full">
				<Form.FieldErrors />
			</Form.Field>
		</div>

		<Form.Field {form} name="message">
			<Form.Control let:attrs>
                                <Form.Label>Bericht</Form.Label>
				<Textarea {...attrs} bind:value={$formData.message} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button disabled={isSubmitting} size="lg" class="group/sendButton mt-5 w-full">
			<div class="flex items-center gap-2 text-xl">
                                <div class="uppercase">Verstuur</div>
				<Icon
					icon={`${isSubmitting ? 'mingcute:loading-fill' : 'bi:arrow-right'}`}
					class={`${isSubmitting ? 'animate-spin' : ''} h-7 w-7 transition-transform duration-300 lg:group-hover/sendButton:translate-x-1`}
				/>
			</div>
		</Form.Button>

		{#if $formData.phone}
			<p transition:slide class="mt-5 text-center text-xs text-muted-foreground">
				*By providing your phone number via paper/digital intake forms and/or website submissions,
				you consent to receive calls and text messages regarding appointments, marketing, and other
				information. No purchase is required. Message and data rates may apply. ${companyInfo.name} will
				send approximately 4 texts a month (maximum) offering special discounts and text-only deals.
				You may opt out at any time by replying STOP to the text message."
			</p>
		{/if}

                <p class="mt-5 text-center text-xs text-muted-foreground">
                        Door op doorgaan te klikken ga je akkoord met onze
                        <a href="/terms" class="underline underline-offset-4 hover:text-primary">
                                Voorwaarden van service
                        </a>
                        en
                        <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
                                Privacybeleid
                        </a>
			.
		</p>
	</form>
</div>
