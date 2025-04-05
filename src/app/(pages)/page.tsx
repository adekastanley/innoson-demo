import HeroSection from "@/components/homepage/hero-section";
import WhyChoose from "@/components/whyChoose";
import { CarModels } from "@/components/homepage/carModels";
import StatsSection from "@/components/stats";
import { Blog } from "@/components/blog";
import CallToAction from "@/components/call-to-action";

export default function Home() {
	return (
		<>
			<HeroSection />
			<StatsSection />
			<CarModels />
			<WhyChoose />
			<Blog />
			<CallToAction />
		</>
	);
}
