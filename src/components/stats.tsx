export default function StatsSection() {
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
					<h2 className="text-4xl font-medium lg:text-5xl">
						{" "}
						Made for Nigeria. Built for Impact.
					</h2>
					<p>
						Innoson is more than just a car company — we’re a movement driving
						innovation, industry, and progress across Africa. Our numbers speak
						for themselves, reflecting a deep commitment to quality,
						accessibility, and national pride.
					</p>
				</div>

				<div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
					<div className="space-y-4">
						<div className="text-5xl font-bold">+3000</div>
						<p>Vehicles produced annually</p>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold">30+</div>
						<p>Dealer locations nationwide</p>
					</div>
					<div className="space-y-4">
						<div className="text-5xl font-bold">70%</div>
						<p>Locally sourced parts</p>
					</div>
				</div>
			</div>
		</section>
	);
}
