import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
	return (
		<section className="py-16 max-sm:px-4">
			<div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">
						Join the Movement
					</h2>
					<p className="mt-4">
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						Innoson is more than a car — it's a symbol of pride, progress, and
						possibility.
					</p>

					<div className="mt-12 flex flex-wrap justify-center gap-4">
						<Button asChild size="lg">
							<Link href="/">
								<span>Explore Our Story</span>
							</Link>
						</Button>

						<Button asChild size="lg" variant="outline">
							<Link href="/">
								<span>Find a Dealer</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
