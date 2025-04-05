import {
	Carousel,
	CarouselContent,
	CarouselNavigation,
	CarouselItem,
} from "../../../components/motion-primitives/carousel";

const cars = [
	{
		car: "one",
		image: "/assets/cars/c1.jpg",
	},
	{
		car: "two",
		image: "/assets/cars/c2.jpg",
	},
	{
		car: "three",
		image: "/assets/cars/c3.jpg",
	},
	{
		car: "four",
		image: "/assets/cars/c4.jpg",
	},
];
export function CarModels() {
	return (
		<div className="relative w-full px-4 mb-20">
			<Carousel>
				<CarouselContent className="-ml-4">
					{cars.map((car, index) => (
						<CarouselItem key={index} className="basis-1/3 pl-4">
							<div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
								<img
									className="w-full aspect-square"
									src={car.image}
									alt="image of car"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNavigation
					className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
					classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
					alwaysShow
				/>
			</Carousel>
		</div>
	);
}
