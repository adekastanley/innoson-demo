"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	// ChartBarIncreasingIcon,
	Database,
	Fingerprint,
	IdCard,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function WhyChoose() {
	type ImageKey = "item-1" | "item-2" | "item-3";
	const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

	const images = {
		"item-1": {
			image: "/assets/cars/one.jpg",
			alt: "Innoson vehicle image",
		},
		"item-2": {
			image: "/assets/cars/two.jpg",
			alt: "Innoson vehicle image",
		},
		"item-3": {
			image: "/assets/cars/three.jpg",
			alt: "Innoson vehicle image",
		},
	};

	return (
		<section className="py-12 md:py-20 lg:py-32">
			<div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
				<div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-6xl">
						Why Choose Innoson
					</h2>
					<p>
						Every Innoson vehicle is designed and assembled right here in
						Nigeria — by Nigerians, for Nigerians. We’re building more than cars
						— we’re building a future powered by local innovation.
					</p>
				</div>

				<div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
					<Accordion
						type="single"
						value={activeItem}
						onValueChange={(value) => setActiveItem(value as ImageKey)}
						className="w-full"
					>
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<div className="flex items-center gap-2 text-base">
									<Database className="size-4" />
									Affordable Without Compromise
								</div>
							</AccordionTrigger>
							<AccordionContent>
								Luxury doesn’t have to break the bank. Our vehicles are priced
								with you in mind, offering top-tier performance and comfort at
								competitive prices.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>
								<div className="flex items-center gap-2 text-base">
									<Fingerprint className="size-4" />
									Nationwide Support, Always Within Reach
								</div>
							</AccordionTrigger>
							<AccordionContent>
								From Lagos to Enugu and beyond, our service centers and partners
								are ready to keep your Innoson running smoothly. We’re never far
								away.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>
								<div className="flex items-center gap-2 text-base">
									<IdCard className="size-4" />
									Built for Your Needs
								</div>
							</AccordionTrigger>
							<AccordionContent>
								Whether you need a rugged bus for business or a stylish car for
								city life, Innoson has a model for every purpose. Custom fleet
								solutions available for businesses and organizations.
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
						<div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
						<div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={`${activeItem}-id`}
									initial={{ opacity: 0, y: 6, scale: 0.98 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: 6, scale: 0.98 }}
									transition={{ duration: 0.2 }}
									className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
								>
									<Image
										src={images[activeItem].image}
										className="size-full object-cover object-left-top dark:mix-blend-lighten"
										alt={images[activeItem].alt}
										width={1207}
										height={929}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
						<BorderBeam
							duration={6}
							size={200}
							className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
