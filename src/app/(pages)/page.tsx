import HeroSection from "@/components/homepage/hero-section";
import WhyChoose from "@/components/whyChoose";
import { CarModels } from "@/components/homepage/carModels";
import StatsSection from "@/components/stats";

export default function Home() {
	return (
		<>
			<HeroSection />
			<StatsSection />
			<CarModels />
			<WhyChoose />
		</>
	);
}
